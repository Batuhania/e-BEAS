import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiCheckCircle, FiXCircle, FiChevronLeft, FiChevronRight, FiFlag, FiAlertTriangle, FiAward, FiTarget, FiBarChart2, FiBookOpen } from 'react-icons/fi';
import questionsData from '../data/questions.json';

const EXAM_QUESTIONS = 100;
const EXAM_TIME = 120 * 60; // 120 minutes in seconds
const PASS_SCORE = 60;

export default function ExamSimView() {
    const [phase, setPhase] = useState('intro'); // intro, exam, results
    const [questions, setQuestions] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [answers, setAnswers] = useState({});
    const [flagged, setFlagged] = useState(new Set());
    const [timeLeft, setTimeLeft] = useState(EXAM_TIME);
    const [examResult, setExamResult] = useState(null);
    const timerRef = useRef(null);
    const [showNav, setShowNav] = useState(false);

    // Prepare exam
    const startExam = () => {
        const shuffled = [...questionsData].sort(() => Math.random() - 0.5).slice(0, EXAM_QUESTIONS);
        setQuestions(shuffled);
        setAnswers({});
        setFlagged(new Set());
        setCurrentIdx(0);
        setTimeLeft(EXAM_TIME);
        setPhase('exam');
    };

    // Timer
    useEffect(() => {
        if (phase !== 'exam') return;
        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timerRef.current);
    }, [phase]);

    // Auto-submit when time runs out
    useEffect(() => {
        if (phase === 'exam' && timeLeft === 0) finishExam();
    }, [timeLeft, phase]);

    const formatTime = (s) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m}:${sec.toString().padStart(2, '0')}`;
    };

    const timePercent = (timeLeft / EXAM_TIME) * 100;
    const timeColor = timeLeft > 600 ? '#34d399' : timeLeft > 180 ? '#fbbf24' : '#f87171';

    const selectAnswer = (qIdx, answer) => {
        setAnswers(prev => ({ ...prev, [qIdx]: answer }));
    };

    const toggleFlag = () => {
        setFlagged(prev => {
            const next = new Set(prev);
            if (next.has(currentIdx)) next.delete(currentIdx);
            else next.add(currentIdx);
            return next;
        });
    };

    const answeredCount = Object.keys(answers).length;

    const finishExam = useCallback(() => {
        clearInterval(timerRef.current);
        let correct = 0;
        let wrong = 0;
        let empty = 0;
        const catResults = {};
        const wrongQuestions = [];

        questions.forEach((q, i) => {
            const cat = q.ust_kategori || 'Diğer';
            if (!catResults[cat]) catResults[cat] = { total: 0, correct: 0, wrong: 0, empty: 0 };
            catResults[cat].total++;

            if (!answers[i]) {
                empty++;
                catResults[cat].empty++;
            } else if (answers[i] === q.dogru_cevap) {
                correct++;
                catResults[cat].correct++;
            } else {
                wrong++;
                catResults[cat].wrong++;
                wrongQuestions.push({ ...q, userAnswer: answers[i], examIndex: i + 1 });
            }
        });

        const score = Math.round((correct / EXAM_QUESTIONS) * 100);
        const passed = score >= PASS_SCORE;
        const timeUsed = EXAM_TIME - timeLeft;

        // Save wrong questions as mistakes
        const existingMistakes = JSON.parse(localStorage.getItem('ebeas_mistakes') || '[]');
        wrongQuestions.forEach(wq => {
            if (!existingMistakes.some(m => m.soru === wq.soru)) {
                existingMistakes.push({ ...wq, kaynak: 'exam', timestamp: Date.now() });
            }
        });
        localStorage.setItem('ebeas_mistakes', JSON.stringify(existingMistakes));

        // Save exam history
        const examHistory = JSON.parse(localStorage.getItem('ebeas_exam_history') || '[]');
        examHistory.push({ date: Date.now(), score, correct, wrong, empty, timeUsed, passed });
        localStorage.setItem('ebeas_exam_history', JSON.stringify(examHistory));

        setExamResult({ score, correct, wrong, empty, passed, timeUsed, catResults, wrongQuestions });
        setPhase('results');
    }, [questions, answers, timeLeft]);

    // ============ INTRO SCREEN ============
    if (phase === 'intro') {
        const history = JSON.parse(localStorage.getItem('ebeas_exam_history') || '[]');
        const bestScore = history.length > 0 ? Math.max(...history.map(h => h.score)) : null;
        const lastExam = history.length > 0 ? history[history.length - 1] : null;

        return (
            <div className="exam-view">
                <div className="exam-intro glass-panel">
                    <div className="exam-intro-badge"><FiBookOpen style={{ fontSize: '2.5rem', color: '#60a5fa' }} /></div>
                    <h1>Sınav Simülasyonu</h1>
                    <p>Gerçek sınav formatında kendini test et</p>

                    <div className="exam-info-grid">
                        <div className="exam-info-card"><FiBookOpen /><span>100 Soru</span><small>Rastgele seçilir</small></div>
                        <div className="exam-info-card"><FiClock /><span>120 Dakika</span><small>Geri sayım</small></div>
                        <div className="exam-info-card"><FiTarget /><span>60 Puan</span><small>Geçme notu</small></div>
                        <div className="exam-info-card"><FiFlag /><span>İşaretle</span><small>Soruya dön</small></div>
                    </div>

                    <div className="exam-rules">
                        <h3>Sınav Kuralları</h3>
                        <ul>
                            <li>Havuzdan rastgele 100 soru seçilecek</li>
                            <li>120 dakika süreniz var, süre bitince otomatik teslim edilir</li>
                            <li>Soruları işaretleyip sonra dönebilirsiniz</li>
                            <li>Boş bırakılan sorular yanlış sayılmaz ama puan da vermez</li>
                            <li>Geçme notu: 100 üzerinden 60</li>
                            <li>Yanlış cevaplar otomatik olarak "Yanlışlarım"a kaydedilir</li>
                        </ul>
                    </div>

                    {history.length > 0 && (
                        <div className="exam-past">
                            <h3>Geçmiş Sınavlar ({history.length})</h3>
                            <div className="exam-past-stats">
                                <div><span>Son Sınav</span><strong style={{ color: lastExam.passed ? '#34d399' : '#f87171' }}>{lastExam.score} puan</strong></div>
                                <div><span>En İyi</span><strong style={{ color: bestScore >= 60 ? '#34d399' : '#fbbf24' }}>{bestScore} puan</strong></div>
                                <div><span>Deneme Sayısı</span><strong>{history.length}</strong></div>
                            </div>
                        </div>
                    )}

                    <button className="exam-start-btn" onClick={startExam}>
                        Sınava Başla
                    </button>
                </div>
                <style>{examStyles}</style>
            </div>
        );
    }

    // ============ RESULTS SCREEN ============
    if (phase === 'results' && examResult) {
        const r = examResult;
        const catArr = Object.entries(r.catResults)
            .map(([name, data]) => ({ name, ...data, pct: Math.round((data.correct / data.total) * 100) }))
            .sort((a, b) => a.pct - b.pct);

        return (
            <div className="exam-view">
                <div className={`exam-result-header glass-panel ${r.passed ? 'passed' : 'failed'}`}>
                    <div className="exam-result-badge" style={{ fontSize: '2rem', fontWeight: 800, color: r.passed ? '#34d399' : '#f87171' }}>{r.passed ? 'GEÇTİN' : 'KALDIN'}</div>
                    <h1>{r.passed ? 'TEBRİKLER' : 'TEKRAR DENE'}</h1>
                    <div className="exam-score-ring">
                        <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                            <circle cx="50" cy="50" r="42" fill="none"
                                stroke={r.passed ? '#34d399' : '#f87171'} strokeWidth="8" strokeLinecap="round"
                                strokeDasharray={`${(r.score / 100) * 264} 264`}
                                transform="rotate(-90 50 50)" />
                        </svg>
                        <span className="exam-score-num" style={{ color: r.passed ? '#34d399' : '#f87171' }}>{r.score}</span>
                    </div>
                    <div className="exam-result-stats">
                        <div className="er-stat"><span className="er-val green">{r.correct}</span><span className="er-lbl">Doğru</span></div>
                        <div className="er-stat"><span className="er-val red">{r.wrong}</span><span className="er-lbl">Yanlış</span></div>
                        <div className="er-stat"><span className="er-val gray">{r.empty}</span><span className="er-lbl">Boş</span></div>
                        <div className="er-stat"><span className="er-val blue">{formatTime(r.timeUsed)}</span><span className="er-lbl">Süre</span></div>
                    </div>
                </div>

                {/* Category breakdown */}
                <div className="exam-cat-breakdown glass-panel">
                    <h3><FiBarChart2 /> Kategori Bazlı Sonuçlar</h3>
                    {catArr.map(cat => (
                        <div key={cat.name} className="exam-cat-row">
                            <div className="exam-cat-info">
                                <span className="exam-cat-name">{cat.name}</span>
                                <span className="exam-cat-detail">{cat.correct}/{cat.total} doğru</span>
                            </div>
                            <div className="exam-cat-bar-track">
                                <div className={`exam-cat-bar-fill ${cat.pct >= 70 ? 'green' : cat.pct >= 50 ? 'yellow' : 'red'}`}
                                    style={{ width: `${cat.pct}%` }}></div>
                            </div>
                            <span className={`exam-cat-pct ${cat.pct >= 70 ? 'green' : cat.pct >= 50 ? 'yellow' : 'red'}`}>{cat.pct}%</span>
                        </div>
                    ))}
                </div>

                {/* Wrong answers summary */}
                {r.wrongQuestions.length > 0 && (
                    <div className="exam-wrong-summary glass-panel">
                        <h3><FiAlertTriangle /> Yanlış Cevaplanan Sorular ({r.wrongQuestions.length})</h3>
                        <p className="exam-wrong-note">Bu sorular "Yanlışlarım"a otomatik kaydedildi.</p>
                        <div className="exam-wrong-list">
                            {r.wrongQuestions.slice(0, 10).map((wq, i) => (
                                <div key={i} className="exam-wrong-item">
                                    <span className="exam-wrong-num">S{wq.examIndex}</span>
                                    <span className="exam-wrong-text">{wq.soru.substring(0, 80)}...</span>
                                    <span className="exam-wrong-cat">{wq.ust_kategori?.substring(0, 20)}</span>
                                </div>
                            ))}
                            {r.wrongQuestions.length > 10 && (
                                <p className="exam-wrong-more">...ve {r.wrongQuestions.length - 10} soru daha</p>
                            )}
                        </div>
                    </div>
                )}

                <div className="exam-actions">
                    <button className="exam-start-btn" onClick={startExam}>Tekrar Dene</button>
                    <button className="exam-back-btn" onClick={() => setPhase('intro')}>← Sınav Girişi</button>
                </div>

                <style>{examStyles}</style>
            </div>
        );
    }

    // ============ EXAM SCREEN ============
    const q = questions[currentIdx];
    if (!q) return null;
    const options = [
        { id: 'A', value: q.sik_a },
        { id: 'B', value: q.sik_b },
        { id: 'C', value: q.sik_c },
        { id: 'D', value: q.sik_d },
    ].filter(o => o.value);

    return (
        <div className="exam-view">
            {/* Timer bar */}
            <div className="exam-timer-bar">
                <div className="exam-timer-fill" style={{ width: `${timePercent}%`, background: timeColor }}></div>
            </div>

            <div className="exam-header">
                <div className="exam-timer" style={{ color: timeColor }}>
                    <FiClock /> {formatTime(timeLeft)}
                </div>
                <div className="exam-progress-text">
                    {answeredCount}/{EXAM_QUESTIONS} cevaplandı
                </div>
                <button className={`exam-flag-btn ${flagged.has(currentIdx) ? 'flagged' : ''}`} onClick={toggleFlag}>
                    <FiFlag /> {flagged.has(currentIdx) ? 'İşaretli' : 'İşaretle'}
                </button>
            </div>

            {/* Question */}
            <div className="exam-question glass-panel">
                <div className="exam-q-meta">
                    <span className="exam-q-num">Soru {currentIdx + 1}/{EXAM_QUESTIONS}</span>
                    <span className="exam-q-cat">{q.ust_kategori}</span>
                </div>
                <h2 className="exam-q-text">{q.soru}</h2>
                <div className="exam-options">
                    {options.map(opt => (
                        <button key={opt.id}
                            className={`exam-option ${answers[currentIdx] === opt.value ? 'selected' : ''}`}
                            onClick={() => selectAnswer(currentIdx, opt.value)}>
                            <span className="exam-opt-letter">{opt.id}</span>
                            <span className="exam-opt-text">{opt.value}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="exam-nav">
                <button className="exam-nav-btn" onClick={() => setCurrentIdx(p => Math.max(0, p - 1))} disabled={currentIdx === 0}>
                    <FiChevronLeft /> Önceki
                </button>
                <button className="exam-nav-toggle" onClick={() => setShowNav(!showNav)}>
                    {currentIdx + 1}/{EXAM_QUESTIONS}
                </button>
                {currentIdx < EXAM_QUESTIONS - 1 ? (
                    <button className="exam-nav-btn" onClick={() => setCurrentIdx(p => p + 1)}>
                        Sonraki <FiChevronRight />
                    </button>
                ) : (
                    <button className="exam-finish-btn" onClick={() => {
                        const unanswered = EXAM_QUESTIONS - answeredCount;
                        if (unanswered > 0) {
                            if (!confirm(`${unanswered} soru boş! Sınavı bitirmek istediğine emin misin?`)) return;
                        }
                        finishExam();
                    }}>
                        Sınavı Bitir ✓
                    </button>
                )}
            </div>

            {/* Question grid navigator */}
            {showNav && (
                <div className="exam-grid glass-panel">
                    <div className="exam-grid-legend">
                        <span><span className="exam-dot answered"></span> Cevaplanmış</span>
                        <span><span className="exam-dot flagged"></span> İşaretli</span>
                        <span><span className="exam-dot empty"></span> Boş</span>
                    </div>
                    <div className="exam-grid-dots">
                        {questions.map((_, i) => (
                            <button key={i}
                                className={`exam-grid-btn ${i === currentIdx ? 'current' : ''} ${answers[i] ? 'answered' : ''} ${flagged.has(i) ? 'flagged' : ''}`}
                                onClick={() => { setCurrentIdx(i); setShowNav(false); }}>
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <style>{examStyles}</style>
        </div>
    );
}

const examStyles = `
    .exam-view { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem; padding-bottom: 3rem; }

    /* Intro */
    .exam-intro { padding: 2.5rem; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1.25rem; }
    .exam-intro-badge { font-size: 3.5rem; }
    .exam-intro h1 { margin: 0; font-size: 1.8rem; background: linear-gradient(135deg, #f8fafc, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .exam-intro p { margin: 0; color: var(--text-secondary); font-size: 1rem; }
    .exam-info-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.6rem; width: 100%; }
    .exam-info-card { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; padding: 1rem 0.5rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; color: #60a5fa; }
    .exam-info-card span { font-weight: 700; font-size: 0.9rem; color: var(--text-primary); }
    .exam-info-card small { font-size: 0.7rem; color: var(--text-tertiary); }
    .exam-rules { text-align: left; width: 100%; background: rgba(245,158,11,0.06); border: 1px solid rgba(245,158,11,0.15); border-radius: 12px; padding: 1.25rem; }
    .exam-rules h3 { margin: 0 0 0.5rem; color: #fbbf24; font-size: 0.95rem; }
    .exam-rules ul { margin: 0; padding-left: 1.25rem; }
    .exam-rules li { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.8; }
    .exam-past { width: 100%; background: rgba(59,130,246,0.06); border: 1px solid rgba(59,130,246,0.15); border-radius: 12px; padding: 1.25rem; }
    .exam-past h3 { margin: 0 0 0.75rem; font-size: 0.95rem; color: #60a5fa; }
    .exam-past-stats { display: flex; gap: 1.5rem; justify-content: center; }
    .exam-past-stats div { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
    .exam-past-stats span { font-size: 0.75rem; color: var(--text-tertiary); }
    .exam-past-stats strong { font-size: 1.2rem; }
    .exam-start-btn { padding: 1rem 2.5rem; border-radius: 14px; background: linear-gradient(135deg, #3b82f6, #06b6d4); color: white; font-size: 1.1rem; font-weight: 700; border: none; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 15px rgba(59,130,246,0.3); }
    .exam-start-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(59,130,246,0.4); }

    /* Timer */
    .exam-timer-bar { height: 4px; background: rgba(255,255,255,0.06); border-radius: 2px; overflow: hidden; }
    .exam-timer-fill { height: 100%; transition: width 1s linear; border-radius: 2px; }
    .exam-header { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; }
    .exam-timer { display: flex; align-items: center; gap: 0.4rem; font-size: 1.2rem; font-weight: 700; font-variant-numeric: tabular-nums; }
    .exam-progress-text { font-size: 0.85rem; color: var(--text-secondary); }
    .exam-flag-btn { display: flex; align-items: center; gap: 0.3rem; padding: 0.5rem 0.85rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: transparent; color: var(--text-tertiary); font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .exam-flag-btn.flagged { border-color: rgba(251,146,60,0.4); background: rgba(251,146,60,0.12); color: #fb923c; }

    /* Question */
    .exam-question { padding: 1.5rem; }
    .exam-q-meta { display: flex; justify-content: space-between; margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.06); }
    .exam-q-num { font-weight: 700; font-size: 0.85rem; color: #60a5fa; }
    .exam-q-cat { font-size: 0.8rem; color: var(--text-tertiary); background: rgba(255,255,255,0.05); padding: 0.2rem 0.6rem; border-radius: 6px; }
    .exam-q-text { font-size: 1.05rem; line-height: 1.6; margin: 0 0 1.25rem; font-weight: 500; }
    .exam-options { display: flex; flex-direction: column; gap: 0.6rem; }
    .exam-option { display: flex; align-items: center; width: 100%; padding: 1rem; border: 1px solid rgba(255,255,255,0.08); background: rgba(30,41,59,0.4); color: var(--text-primary); border-radius: 10px; cursor: pointer; transition: all 0.2s; text-align: left; }
    .exam-option:hover { background: rgba(59,130,246,0.08); border-color: rgba(59,130,246,0.2); }
    .exam-option.selected { background: rgba(59,130,246,0.15); border-color: #3b82f6; }
    .exam-opt-letter { display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 8px; background: rgba(255,255,255,0.08); margin-right: 1rem; font-weight: 700; font-size: 0.85rem; flex-shrink: 0; }
    .exam-option.selected .exam-opt-letter { background: #3b82f6; color: white; }
    .exam-opt-text { font-size: 0.9rem; flex: 1; }

    /* Navigation */
    .exam-nav { display: flex; gap: 0.5rem; align-items: center; }
    .exam-nav-btn { flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.75rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: var(--text-primary); font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: all 0.2s; }
    .exam-nav-btn:hover:not(:disabled) { background: rgba(59,130,246,0.1); border-color: rgba(59,130,246,0.2); }
    .exam-nav-btn:disabled { opacity: 0.3; cursor: default; }
    .exam-nav-toggle { padding: 0.75rem 1.25rem; border-radius: 10px; border: 1px solid rgba(59,130,246,0.2); background: rgba(59,130,246,0.08); color: #60a5fa; font-weight: 700; font-size: 0.85rem; cursor: pointer; }
    .exam-finish-btn { flex: 1; padding: 0.75rem; border-radius: 10px; border: none; background: linear-gradient(135deg, #10b981, #059669); color: white; font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: all 0.2s; }
    .exam-finish-btn:hover { transform: scale(1.02); }

    /* Question grid */
    .exam-grid { padding: 1rem; }
    .exam-grid-legend { display: flex; gap: 1rem; margin-bottom: 0.75rem; font-size: 0.7rem; color: var(--text-tertiary); }
    .exam-dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 0.3rem; vertical-align: middle; }
    .exam-dot.answered { background: #3b82f6; }
    .exam-dot.flagged { background: #fb923c; }
    .exam-dot.empty { background: rgba(255,255,255,0.1); }
    .exam-grid-dots { display: grid; grid-template-columns: repeat(10, 1fr); gap: 0.3rem; }
    .exam-grid-btn { width: 100%; aspect-ratio: 1; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); color: var(--text-tertiary); font-size: 0.65rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
    .exam-grid-btn.current { border-color: #60a5fa; background: rgba(59,130,246,0.15); color: white; }
    .exam-grid-btn.answered { background: rgba(59,130,246,0.12); color: #60a5fa; border-color: rgba(59,130,246,0.2); }
    .exam-grid-btn.flagged { border-color: rgba(251,146,60,0.4); background: rgba(251,146,60,0.1); }
    .exam-grid-btn.answered.flagged { background: rgba(251,146,60,0.15); color: #fb923c; }

    /* Results */
    .exam-result-header { padding: 2rem; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1rem; }
    .exam-result-header.passed { border-color: rgba(16,185,129,0.3); }
    .exam-result-header.failed { border-color: rgba(239,68,68,0.3); }
    .exam-result-badge { font-size: 3rem; }
    .exam-result-header h1 { margin: 0; font-size: 1.5rem; }
    .exam-score-ring { position: relative; width: 120px; height: 120px; }
    .exam-score-ring svg { width: 100%; height: 100%; }
    .exam-score-num { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 800; }
    .exam-result-stats { display: flex; gap: 2rem; }
    .er-stat { display: flex; flex-direction: column; align-items: center; }
    .er-val { font-size: 1.5rem; font-weight: 700; }
    .er-val.green { color: #34d399; }
    .er-val.red { color: #f87171; }
    .er-val.gray { color: #94a3b8; }
    .er-val.blue { color: #60a5fa; }
    .er-lbl { font-size: 0.7rem; color: var(--text-tertiary); }

    /* Category breakdown */
    .exam-cat-breakdown { padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; }
    .exam-cat-breakdown h3 { margin: 0; font-size: 1rem; display: flex; align-items: center; gap: 0.4rem; }
    .exam-cat-row { display: flex; align-items: center; gap: 0.6rem; }
    .exam-cat-info { flex: 1; min-width: 0; }
    .exam-cat-name { display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .exam-cat-detail { font-size: 0.7rem; color: var(--text-tertiary); }
    .exam-cat-bar-track { width: 120px; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; flex-shrink: 0; }
    .exam-cat-bar-fill { height: 100%; border-radius: 3px; transition: width 0.5s; }
    .exam-cat-bar-fill.green { background: #10b981; }
    .exam-cat-bar-fill.yellow { background: #f59e0b; }
    .exam-cat-bar-fill.red { background: #ef4444; }
    .exam-cat-pct { font-size: 0.75rem; font-weight: 700; min-width: 35px; text-align: right; }
    .exam-cat-pct.green { color: #34d399; }
    .exam-cat-pct.yellow { color: #fbbf24; }
    .exam-cat-pct.red { color: #f87171; }

    /* Wrong summary */
    .exam-wrong-summary { padding: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; }
    .exam-wrong-summary h3 { margin: 0; font-size: 1rem; display: flex; align-items: center; gap: 0.4rem; color: #f87171; }
    .exam-wrong-note { margin: 0; font-size: 0.8rem; color: var(--text-tertiary); }
    .exam-wrong-list { display: flex; flex-direction: column; gap: 0.3rem; }
    .exam-wrong-item { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; background: rgba(239,68,68,0.05); border-radius: 8px; font-size: 0.8rem; }
    .exam-wrong-num { color: #f87171; font-weight: 700; min-width: 30px; }
    .exam-wrong-text { flex: 1; color: var(--text-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .exam-wrong-cat { font-size: 0.7rem; color: var(--text-tertiary); }
    .exam-wrong-more { text-align: center; font-size: 0.8rem; color: var(--text-tertiary); margin: 0.25rem 0 0; }

    .exam-actions { display: flex; gap: 0.75rem; }
    .exam-back-btn { flex: 1; padding: 0.85rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: transparent; color: var(--text-primary); font-weight: 600; font-size: 0.9rem; cursor: pointer; }

    @media (max-width: 640px) {
        .exam-intro { padding: 1.5rem; }
        .exam-question { padding: 1rem; }
        .exam-result-header { padding: 1.5rem; }
        .exam-info-grid { grid-template-columns: repeat(2, 1fr); }
        .exam-grid-dots { grid-template-columns: repeat(10, 1fr); }
        .exam-result-stats { gap: 1.25rem; }
        .er-val { font-size: 1.2rem; }
        .exam-q-text { font-size: 0.95rem; }
    }
`;
