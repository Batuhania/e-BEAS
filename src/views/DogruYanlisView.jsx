import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiX, FiAward, FiShuffle, FiEye, FiEyeOff } from 'react-icons/fi';
import { dogruYanlisData } from '../data/dogruYanlisData';

const allCats = [...new Set(dogruYanlisData.map(d => d.kategori))];
const STORAGE_KEY = 'ebeas_dy_progress';

function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}

export default function DogruYanlisView() {
    const [progress, setProgress] = useState(() => loadProgress());
    const [filterCat, setFilterCat] = useState('all');
    const [showMastered, setShowMastered] = useState(false);
    const [cards, setCards] = useState([]);
    const [idx, setIdx] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [userAnswer, setUserAnswer] = useState(null);
    const [score, setScore] = useState({ correct: 0, wrong: 0 });
    const [done, setDone] = useState(false);

    // Build card list based on filters + mastered state
    useEffect(() => {
        let source = filterCat === 'all' ? [...dogruYanlisData] : dogruYanlisData.filter(d => d.kategori === filterCat);
        if (!showMastered) {
            source = source.filter(d => !progress[d.id]?.mastered);
        }
        setCards(source.sort(() => Math.random() - 0.5));
        setIdx(0); setAnswered(false); setUserAnswer(null);
        setScore({ correct: 0, wrong: 0 }); setDone(false);
    }, [filterCat, showMastered]);

    const saveProgress = (newProgress) => {
        setProgress(newProgress);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
    };

    const current = cards[idx];
    const isCorrect = userAnswer === current?.dogru;

    const handleAnswer = (val) => {
        if (answered) return;
        setAnswered(true);
        setUserAnswer(val);
        const correct = val === current.dogru;

        if (correct) {
            setScore(p => ({ ...p, correct: p.correct + 1 }));
            // Mark as mastered (correct 2 times = mastered)
            const prev = progress[current.id] || { correct: 0, wrong: 0, mastered: false };
            const newCorrect = prev.correct + 1;
            const newProg = { ...progress, [current.id]: { ...prev, correct: newCorrect, mastered: newCorrect >= 2 } };
            saveProgress(newProg);
        } else {
            setScore(p => ({ ...p, wrong: p.wrong + 1 }));
            // Save to Yanlışlarım (same format as QuizView mistakes)
            const mistakes = JSON.parse(localStorage.getItem('ebeas_mistakes') || '[]');
            // Check if already exists
            const exists = mistakes.some(m => m.soru === current.ifade && m.kaynak === 'dy');
            if (!exists) {
                mistakes.push({
                    soru: current.ifade,
                    dogru_cevap: current.dogru ? 'DOĞRU' : 'YANLIŞ',
                    userAnswer: val ? 'DOĞRU' : 'YANLIŞ',
                    ust_kategori: current.kategori,
                    alt_kategori: 'Doğru/Yanlış',
                    sik_a: 'DOĞRU',
                    sik_b: 'YANLIŞ',
                    aciklama: current.aciklama,
                    kaynak: 'dy',
                    timestamp: Date.now()
                });
                localStorage.setItem('ebeas_mistakes', JSON.stringify(mistakes));
            }
            // Track in progress
            const prev = progress[current.id] || { correct: 0, wrong: 0, mastered: false };
            const newProg = { ...progress, [current.id]: { ...prev, wrong: prev.wrong + 1, mastered: false } };
            saveProgress(newProg);
        }
    };

    const next = () => {
        if (idx + 1 >= cards.length) { setDone(true); return; }
        setIdx(p => p + 1); setAnswered(false); setUserAnswer(null);
    };

    const restart = () => {
        let source = filterCat === 'all' ? [...dogruYanlisData] : dogruYanlisData.filter(d => d.kategori === filterCat);
        if (!showMastered) source = source.filter(d => !progress[d.id]?.mastered);
        setCards(source.sort(() => Math.random() - 0.5));
        setIdx(0); setAnswered(false); setUserAnswer(null);
        setScore({ correct: 0, wrong: 0 }); setDone(false);
    };

    // Stats
    const totalItems = dogruYanlisData.length;
    const masteredCount = Object.values(progress).filter(p => p.mastered).length;
    const remaining = filterCat === 'all'
        ? dogruYanlisData.filter(d => !progress[d.id]?.mastered).length
        : dogruYanlisData.filter(d => d.kategori === filterCat && !progress[d.id]?.mastered).length;

    if (done) {
        const total = score.correct + score.wrong;
        const pct = total > 0 ? Math.round((score.correct / total) * 100) : 0;
        return (
            <div className="dy-view">
                <div className="dy-complete glass-panel">
                    <FiAward style={{ fontSize: '3rem', color: '#fbbf24' }} />
                    <h2>Tur Bitti!</h2>
                    <div className="dy-complete-stats">
                        <div className="dy-stat green"><span>{score.correct}</span><small>Doğru</small></div>
                        <div className="dy-stat red"><span>{score.wrong}</span><small>Yanlış</small></div>
                        <div className="dy-stat blue"><span>{pct}%</span><small>Başarı</small></div>
                    </div>
                    <div className="dy-mastery-info">
                        <span>Toplam Öğrenilen: <strong>{masteredCount}/{totalItems}</strong></span>
                        {remaining > 0 && <span>Kalan: <strong>{remaining}</strong> ifade</span>}
                    </div>
                    {remaining > 0 ? (
                        <button className="btn btn-primary" onClick={restart}><FiShuffle /> Kalanları Çalış</button>
                    ) : (
                        <div className="dy-all-done">
                            <span style={{ fontSize: '2rem', fontWeight: 700, color: '#34d399' }}>TAMAMLANDI</span>
                            <p>Tüm ifadeleri öğrendin! Sıfırlamak istersen Ayarlar'a git.</p>
                        </div>
                    )}
                </div>
                <style>{dyStyles}</style>
            </div>
        );
    }

    if (cards.length === 0) {
        return (
            <div className="dy-view">
                <header className="page-header"><div><h1>Doğru mu Yanlış mı?</h1></div></header>
                <div className="dy-complete glass-panel">
                    <span style={{ fontSize: '2rem', fontWeight: 700, color: '#34d399' }}>TAMAMLANDI</span>
                    <h2>{filterCat === 'all' ? 'Tüm ifadeleri öğrendin!' : `"${filterCat}" kategorisini bitirdin!`}</h2>
                    <p>Öğrenilenleri tekrar görmek için:</p>
                    <button className="btn btn-primary" onClick={() => setShowMastered(true)}>
                        <FiEye /> Öğrenilenleri Göster
                    </button>
                </div>
                <style>{dyStyles}</style>
            </div>
        );
    }

    if (!current) return null;

    return (
        <div className="dy-view">
            <header className="page-header">
                <div>
                    <h1>Doğru mu Yanlış mı?</h1>
                    <p>İfadeyi oku, doğru mu yanlış mı karar ver!</p>
                </div>
                <div className="dy-mastery-badge">{masteredCount}/{totalItems}</div>
            </header>

            <div className="dy-filters">
                <button className={`fc-filter-btn ${filterCat === 'all' ? 'active' : ''}`} onClick={() => setFilterCat('all')}>
                    Tümü ({filterCat === 'all' && !showMastered ? remaining : dogruYanlisData.length})
                </button>
                {allCats.map(c => {
                    const catRemaining = dogruYanlisData.filter(d => d.kategori === c && !progress[d.id]?.mastered).length;
                    const catTotal = dogruYanlisData.filter(d => d.kategori === c).length;
                    return (
                        <button key={c} className={`fc-filter-btn ${filterCat === c ? 'active' : ''}`} onClick={() => setFilterCat(c)}>
                            {c} ({showMastered ? catTotal : catRemaining})
                        </button>
                    );
                })}
            </div>

            <div className="dy-filter-row">
                <button className={`fc-filter-btn ${showMastered ? 'active' : ''}`} onClick={() => setShowMastered(!showMastered)}>
                    {showMastered ? <><FiEyeOff /> Öğrenilenleri Gizle</> : <><FiEye /> Öğrenilenleri Göster ({masteredCount})</>}
                </button>
            </div>

            <div className="dy-progress">
                <div className="fc-progress-track"><div className="fc-progress-fill" style={{ width: `${((idx + 1) / cards.length) * 100}%` }}></div></div>
                <div className="fc-progress-info">
                    <span>{idx + 1} / {cards.length}</span>
                    <span>{score.correct} doğru · {score.wrong} yanlış</span>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={idx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                    className={`dy-card glass-panel ${answered ? (isCorrect ? 'correct' : 'wrong') : ''}`}>
                    <div className="dy-card-top">
                        <span className="dy-cat-badge">{current.kategori}</span>
                        {progress[current.id]?.mastered && <span className="dy-mastered-tag">Öğrenildi</span>}
                    </div>
                    <p className="dy-statement">{current.ifade}</p>

                    {answered && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="dy-feedback">
                            <div className={`dy-verdict ${isCorrect ? 'correct' : 'wrong'}`}>
                                {isCorrect ? <><FiCheck /> Doğru bildin!</> : <><FiX /> Yanlış! Cevap: {current.dogru ? 'DOĞRU' : 'YANLIŞ'}</>}
                            </div>
                            <p className="dy-explanation">{current.aciklama}</p>
                            {!isCorrect && <p className="dy-saved-notice">Bu ifade yanlışlarına kaydedildi.</p>}
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>

            {!answered ? (
                <div className="dy-buttons">
                    <button className="dy-btn dogru" onClick={() => handleAnswer(true)}><FiCheck /> DOĞRU</button>
                    <button className="dy-btn yanlis" onClick={() => handleAnswer(false)}><FiX /> YANLIŞ</button>
                </div>
            ) : (
                <div className="dy-buttons">
                    <button className="dy-btn next" onClick={next}>Sonraki →</button>
                </div>
            )}

            <style>{dyStyles}</style>
        </div>
    );
}

const dyStyles = `
    .dy-view { max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.25rem; padding-bottom: 3rem; }
    .dy-filters { display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .dy-filter-row { display: flex; gap: 0.5rem; }
    .dy-progress { display: flex; flex-direction: column; gap: 0.4rem; }
    .dy-mastery-badge { display: flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.8rem; border-radius: 8px; background: rgba(16,185,129,0.12); color: #34d399; font-weight: 700; font-size: 0.9rem; white-space: nowrap; }
    .dy-mastery-info { display: flex; gap: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
    .dy-mastery-info strong { color: var(--text-primary); }
    .dy-card { padding: 2rem; border-radius: 16px; text-align: center; min-height: 200px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1.25rem; border: 2px solid rgba(255,255,255,0.08); transition: border-color 0.3s; }
    .dy-card.correct { border-color: rgba(16,185,129,0.4); }
    .dy-card.wrong { border-color: rgba(239,68,68,0.4); }
    .dy-card-top { display: flex; gap: 0.5rem; align-items: center; }
    .dy-cat-badge { padding: 0.3rem 0.75rem; border-radius: 8px; background: rgba(59,130,246,0.15); color: #60a5fa; font-size: 0.75rem; font-weight: 700; }
    .dy-mastered-tag { padding: 0.3rem 0.75rem; border-radius: 8px; background: rgba(16,185,129,0.12); color: #34d399; font-size: 0.75rem; font-weight: 700; }
    .dy-statement { font-size: 1.2rem; font-weight: 600; line-height: 1.7; color: var(--text-primary); max-width: 600px; margin: 0; }
    .dy-feedback { display: flex; flex-direction: column; gap: 0.75rem; width: 100%; }
    .dy-verdict { display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem; border-radius: 10px; font-weight: 700; font-size: 1rem; }
    .dy-verdict.correct { background: rgba(16,185,129,0.15); color: #34d399; }
    .dy-verdict.wrong { background: rgba(239,68,68,0.15); color: #f87171; }
    .dy-explanation { background: rgba(245,158,11,0.08); border: 1px solid rgba(245,158,11,0.2); border-radius: 10px; padding: 0.875rem; color: #fbbf24; font-size: 0.95rem; line-height: 1.6; margin: 0; text-align: left; font-weight: 500; }
    .dy-saved-notice { font-size: 0.8rem; color: #f87171; margin: 0; }
    .dy-buttons { display: flex; gap: 1rem; justify-content: center; }
    .dy-btn { padding: 1rem 2.5rem; border-radius: 14px; font-size: 1.1rem; font-weight: 700; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 0.5rem; border: 2px solid; }
    .dy-btn.dogru { border-color: rgba(16,185,129,0.3); background: rgba(16,185,129,0.1); color: #34d399; }
    .dy-btn.dogru:hover { background: rgba(16,185,129,0.2); transform: scale(1.03); }
    .dy-btn.yanlis { border-color: rgba(239,68,68,0.3); background: rgba(239,68,68,0.1); color: #f87171; }
    .dy-btn.yanlis:hover { background: rgba(239,68,68,0.2); transform: scale(1.03); }
    .dy-btn.next { border-color: rgba(59,130,246,0.3); background: rgba(59,130,246,0.15); color: #60a5fa; flex: 1; max-width: 300px; justify-content: center; }
    .dy-btn.next:hover { background: rgba(59,130,246,0.25); }
    .dy-complete { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 3rem 2rem; gap: 1.5rem; }
    .dy-complete-stats { display: flex; gap: 2.5rem; }
    .dy-stat { display: flex; flex-direction: column; align-items: center; }
    .dy-stat span { font-size: 2.5rem; font-weight: 700; }
    .dy-stat.green span { color: #34d399; }
    .dy-stat.red span { color: #f87171; }
    .dy-stat.blue span { color: #60a5fa; }
    .dy-all-done { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
    .dy-all-done p { color: var(--text-secondary); }
    @media (max-width: 640px) {
        .dy-card { padding: 1.25rem; }
        .dy-statement { font-size: 1rem; }
        .dy-btn { padding: 0.875rem 1.5rem; font-size: 0.95rem; }
    }
`;
