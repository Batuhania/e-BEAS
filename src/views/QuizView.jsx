import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiXCircle, FiArrowRight, FiInfo, FiDatabase, FiFilter, FiBookOpen, FiShuffle, FiList, FiClock, FiZap, FiTarget, FiEyeOff, FiEye } from 'react-icons/fi';
import questionsData from '../data/questions.json';
import { detailedLessons } from '../data/detailedLessons';

// Get unique categories
const allCategories = [...new Set(questionsData.map(q => q.ust_kategori))].filter(Boolean);

// Load answered questions set from localStorage
function loadAnsweredQs() {
  try {
    const saved = localStorage.getItem('ebeas_answered_qs');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  } catch { return new Set(); }
}
function saveAnsweredQs(set) {
  localStorage.setItem('ebeas_answered_qs', JSON.stringify([...set]));
}

export default function QuizView() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [orderMode, setOrderMode] = useState('sequential');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [solvedCount, setSolvedCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const orderedRef = useRef(null);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const timerRef = useRef(null);
  const feedbackRef = useRef(null);
  const [hideSolved, setHideSolved] = useState(() => {
    return localStorage.getItem('ebeas_hide_solved') === 'true';
  });
  const [answeredQs, setAnsweredQs] = useState(() => loadAnsweredQs());
  const answeredQsRef = useRef(answeredQs);
  const pendingCorrectRef = useRef(null); // defer hide until next question

  // Timer logic
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (timerEnabled && !isAnswered && currentQuestion) {
      setTimeLeft(60);
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [timerEnabled, questionIndex, currentQuestion]);

  // Stop timer when answered
  useEffect(() => {
    if (isAnswered && timerRef.current) clearInterval(timerRef.current);
  }, [isAnswered]);

  // Auto-skip when time runs out
  useEffect(() => {
    if (timerEnabled && timeLeft === 0 && !isAnswered) {
      setIsAnswered(true);
      setIsCorrect(false);
      setSelectedAnswer('__timeout__');
      setStreak(0);
      // Save stats (dedup: only count if not already answered)
      const qId = currentQuestion?.id;
      const alreadyAnswered = answeredQsRef.current.has(qId);
      const stats = JSON.parse(localStorage.getItem('ebeas_stats') || '{"solved":0,"correct":0}');
      if (!alreadyAnswered) {
        stats.solved++;
        localStorage.setItem('ebeas_stats', JSON.stringify(stats));
      }
      setSolvedCount(stats.solved);
      // Save as mistake
      if (currentQuestion) {
        const m = JSON.parse(localStorage.getItem('ebeas_mistakes') || '[]');
        if (!m.some(x => x.id === qId)) {
          m.push({ ...currentQuestion, userAnswer: 'Süre doldu', timestamp: Date.now() });
          localStorage.setItem('ebeas_mistakes', JSON.stringify(m));
        }
      }
    }
  }, [timeLeft, timerEnabled, isAnswered]);

  // Filter questions by category, then optionally hide correctly answered ones
  const categoryFiltered = useMemo(() => {
    if (selectedCategory === 'all') return questionsData;
    return questionsData.filter(q => q.ust_kategori === selectedCategory);
  }, [selectedCategory]);

  const filteredQuestions = useMemo(() => {
    if (!hideSolved) return categoryFiltered;
    return categoryFiltered.filter(q => !answeredQs.has(q.id));
  }, [categoryFiltered, hideSolved, answeredQs]);

  // Re-order ONLY when category or mode changes (not when answeredQs/hideSolved changes)
  const [resetKey, setResetKey] = useState(0);
  useEffect(() => {
    setResetKey(k => k + 1);
  }, [selectedCategory, orderMode]);

  useEffect(() => {
    if (orderMode === 'random') {
      orderedRef.current = [...filteredQuestions].sort(() => Math.random() - 0.5);
    } else {
      orderedRef.current = [...filteredQuestions];
    }
    setQuestionIndex(0);
    setCurrentQuestion(orderedRef.current[0] || null);
    setIsAnswered(false);
    setSelectedAnswer(null);

    const stats = JSON.parse(localStorage.getItem('ebeas_stats') || '{"solved":0,"correct":0}');
    setSolvedCount(stats.solved);
  }, [resetKey]);

  const handleAnswerSelect = (optionValue) => {
    if (isAnswered) return;

    setSelectedAnswer(optionValue);
    setIsAnswered(true);

    const correct = optionValue === currentQuestion.dogru_cevap;
    setIsCorrect(correct);

    const newStreak = correct ? streak + 1 : 0;
    if (correct) setStreak(prev => prev + 1);
    else setStreak(0);

    const qId = currentQuestion.id;
    const alreadyAnswered = answeredQsRef.current.has(qId);

    // Track this question as answered in ref and localStorage only (don't update state yet)
    if (correct) {
      const updated = new Set(answeredQsRef.current);
      updated.add(qId);
      answeredQsRef.current = updated;
      saveAnsweredQs(updated);
      pendingCorrectRef.current = updated; // will apply on next question
    }

    // Stats: only count if this question hasn't been answered before
    const stats = JSON.parse(localStorage.getItem('ebeas_stats') || '{"solved":0,"correct":0}');
    if (!alreadyAnswered) {
      stats.solved += 1;
      if (correct) stats.correct += 1;

      // Per-category stats
      if (!stats.categories) stats.categories = {};
      const cat = currentQuestion.ust_kategori || 'Diğer';
      if (!stats.categories[cat]) stats.categories[cat] = { solved: 0, correct: 0 };
      stats.categories[cat].solved += 1;
      if (correct) stats.categories[cat].correct += 1;
    }

    // Best streak tracking
    if (!stats.bestStreak) stats.bestStreak = 0;
    if (newStreak > stats.bestStreak) stats.bestStreak = newStreak;

    // Daily study log
    const today = new Date().toISOString().split('T')[0];
    if (!stats.dailyLog) stats.dailyLog = {};
    if (!stats.dailyLog[today]) stats.dailyLog[today] = { solved: 0, correct: 0 };
    stats.dailyLog[today].solved += 1;
    if (correct) stats.dailyLog[today].correct += 1;

    // Last study timestamp
    stats.lastStudy = Date.now();

    localStorage.setItem('ebeas_stats', JSON.stringify(stats));
    setSolvedCount(stats.solved);
    // Notify App.jsx sidebar to update stats in real-time
    window.dispatchEvent(new Event('ebeas-stats-updated'));

    // Auto-scroll to the next button after a brief delay
    setTimeout(() => {
      feedbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);

    if (!correct) {
      const mistakes = JSON.parse(localStorage.getItem('ebeas_mistakes') || '[]');
      if (!mistakes.some(m => m.id === qId)) {
        mistakes.push({ ...currentQuestion, timestamp: Date.now() });
        localStorage.setItem('ebeas_mistakes', JSON.stringify(mistakes));
      }
    }
  };

  const handleNextQuestion = () => {
    // Apply pending correctly-answered question to state
    if (pendingCorrectRef.current) {
      setAnsweredQs(pendingCorrectRef.current);
      pendingCorrectRef.current = null;
    }

    setIsAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(false);

    // Simply advance to the next question in the current ordered list
    const nextIdx = questionIndex + 1;
    if (nextIdx < orderedRef.current.length) {
      setQuestionIndex(nextIdx);
      setCurrentQuestion(orderedRef.current[nextIdx]);
    } else {
      // Reached the end — rebuild the list for a fresh pass
      const currentFiltered = hideSolved
        ? categoryFiltered.filter(q => !answeredQsRef.current.has(q.id))
        : categoryFiltered;

      if (currentFiltered.length === 0) {
        setCurrentQuestion(null);
        setQuestionIndex(0);
        return;
      }

      if (orderMode === 'random') {
        orderedRef.current = [...currentFiltered].sort(() => Math.random() - 0.5);
      } else {
        orderedRef.current = [...currentFiltered];
      }
      setQuestionIndex(0);
      setCurrentQuestion(orderedRef.current[0]);
    }
  };

  if (!currentQuestion) return <div className="loading">Bu kategoride soru bulunamadı.</div>;

  const options = [
    { id: 'A', value: currentQuestion.sik_a },
    { id: 'B', value: currentQuestion.sik_b },
    { id: 'C', value: currentQuestion.sik_c },
    { id: 'D', value: currentQuestion.sik_d },
  ].filter(opt => opt.value);

  // Short category names for filter buttons
  const shortCatName = (name) => {
    if (name.length > 30) return name.substring(0, 28) + '…';
    return name;
  };

  return (
    <div className="quiz-view">
      <header className="page-header">
        <div>
          <h1>Soru Havuzu</h1>
          <p>Sınav soru havuzundan derlenmiş <strong>{filteredQuestions.length}</strong> gerçek soruyla kendini test et.</p>
        </div>
      </header>

      {/* Order Mode Toggle + Timer + Smart Study */}
      <div className="quiz-controls">
        <div className="order-toggle">
          <span className="filter-label">Sıralama:</span>
          <button
            className={`order-btn ${orderMode === 'sequential' ? 'active' : ''}`}
            onClick={() => setOrderMode('sequential')}
          >
            <FiList /> Sıralı
          </button>
          <button
            className={`order-btn ${orderMode === 'random' ? 'active' : ''}`}
            onClick={() => setOrderMode('random')}
          >
            <FiShuffle /> Karışık
          </button>
          <button
            className={`order-btn timer-btn ${timerEnabled ? 'active timer-active' : ''}`}
            onClick={() => setTimerEnabled(!timerEnabled)}
          >
            <FiClock /> {timerEnabled ? 'Zamanlı ✓' : 'Zamanlı'}
          </button>
          <button
            className="order-btn smart-btn"
            onClick={() => {
              const mistakes = JSON.parse(localStorage.getItem('ebeas_mistakes') || '[]');
              if (mistakes.length === 0) { alert('Henüz yanlış yok! Önce soru çöz.'); return; }
              const catCount = {};
              mistakes.forEach(m => { const c = m.ust_kategori || 'Diğer'; catCount[c] = (catCount[c] || 0) + 1; });
              const weakest = Object.entries(catCount).sort((a, b) => b[1] - a[1])[0][0];
              setSelectedCategory(weakest);
              setOrderMode('random');
              alert(`En zayıf konun: "${weakest}" (${catCount[weakest]} yanlış). Bu kategoriden karışık sorular yüklendi.`);
            }}
          >
            <FiTarget /> Zayıf Konudan
          </button>
          <button
            className={`order-btn ${hideSolved ? 'active' : ''}`}
            onClick={() => {
              const next = !hideSolved;
              setHideSolved(next);
              localStorage.setItem('ebeas_hide_solved', String(next));
            }}
            title={hideSolved ? 'Tüm soruları göster' : 'Doğru bildiğin soruları gizle'}
          >
            {hideSolved ? <FiEyeOff /> : <FiEye />} {hideSolved ? 'Gizli' : 'Çözüleni Gizle'}
          </button>
        </div>
      </div>

      {/* Solved info banner */}
      {hideSolved && (
        <div className="solved-info-banner">
          {answeredQs.size > 0
            ? `${answeredQs.size} doğru cevaplanan soru gizlendi. ${filteredQuestions.length} soru kaldı.`
            : 'Henüz doğru cevaplanan soru yok.'}
        </div>
      )}

      {/* Timer bar */}
      {timerEnabled && currentQuestion && (
        <div className={`quiz-timer-bar ${timeLeft <= 10 ? 'danger' : timeLeft <= 25 ? 'warning' : 'safe'}`}>
          <div className="timer-track">
            <div className="timer-fill" style={{ width: `${(timeLeft / 60) * 100}%` }}></div>
          </div>
          <span className={`timer-text ${timeLeft <= 10 ? 'flash' : ''}`}>
            <FiClock /> {timeLeft}s
          </span>
        </div>
      )}

      <div className="category-filter">
        <div className="filter-label"><FiFilter /> Kategori Filtresi:</div>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            Tümü ({hideSolved ? filteredQuestions.length : questionsData.length})
          </button>
          {allCategories.map(cat => {
            const count = questionsData.filter(q => q.ust_kategori === cat).length;
            return (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                title={cat}
              >
                {shortCatName(cat)} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress & Source Badge */}
      <div className="quiz-progress-bar">
        <div className="progress-info">
          <span className="source-badge"><FiDatabase /> Resmi Soru Havuzu (Sorular-3139)</span>
          <span className="q-counter">Soru #{questionIndex + 1} / {orderedRef.current?.length || filteredQuestions.length}</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${((questionIndex + 1) / (orderedRef.current?.length || filteredQuestions.length)) * 100}%` }}></div>
        </div>
        <div className="session-stats-row">
          <span>Toplam çözülen: <strong>{solvedCount}</strong></span>
          {streak > 1 && <span className="streak-badge">{streak} Seri Doğru!</span>}
        </div>
      </div>

      <div className="quiz-container glass-panel">
        <div className="quiz-meta">
          <span className="quiz-qid">Havuz No: {currentQuestion.id}</span>
          <span className="quiz-category">{currentQuestion.ust_kategori || 'Genel Konular'}</span>
          {currentQuestion.alt_kategori && (
            <span className="quiz-subcategory">{currentQuestion.alt_kategori}</span>
          )}
        </div>

        <h2 className="question-text">{currentQuestion.soru}</h2>

        <div className="options-grid">
          {options.map((option) => {
            const isSelected = selectedAnswer === option.value;
            const isActualCorrect = option.value === currentQuestion.dogru_cevap;

            let btnClass = "option-btn glass-card";
            if (isAnswered) {
              if (isActualCorrect) btnClass += " correct";
              else if (isSelected) btnClass += " wrong";
              else btnClass += " disabled";
            }

            return (
              <button
                key={option.id}
                className={btnClass}
                onClick={() => handleAnswerSelect(option.value)}
                disabled={isAnswered}
              >
                <span className="option-letter">{option.id}</span>
                <span className="option-text">{option.value}</span>
                {isAnswered && isActualCorrect && <FiCheckCircle className="result-icon success" />}
                {isAnswered && isSelected && !isActualCorrect && <FiXCircle className="result-icon danger" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`feedback-panel ${isCorrect ? 'success-panel' : 'danger-panel'}`}
            >
              <div className="feedback-main">
                <div className="feedback-content">
                  <div className="feedback-icon-lg">
                    {isCorrect ? <FiCheckCircle /> : <FiXCircle />}
                  </div>
                  <div>
                    <h3>{isCorrect ? 'Doğru Bildin' : 'Yanlış Cevap'}</h3>
                    {isCorrect && streak > 2 && (
                      <p className="streak-msg">Mükemmel! {streak} soru üst üste doğru.</p>
                    )}
                    {!isCorrect && (
                      <p className="correct-reveal">Doğru Cevap: <strong>{currentQuestion.dogru_cevap}</strong></p>
                    )}
                  </div>
                </div>

                {!isCorrect && (() => {
                  const matchedLesson = detailedLessons.find(l =>
                    currentQuestion.soru && l.soruMetni &&
                    (currentQuestion.soru.substring(0, 60).trim() === l.soruMetni.substring(0, 60).trim() ||
                      l.id === currentQuestion.id)
                  );
                  return (
                    <div className="wrong-explanation">
                      {matchedLesson ? (
                        <div className="lesson-inline">
                          <div className="lesson-inline-header">
                            <FiBookOpen className="tip-icon" />
                            <strong>Detaylı Konu Analizi</strong>
                            <span className={`importance-tag ${matchedLesson.onemDuzeyi}`}>
                              {matchedLesson.onemDuzeyi === 'kritik' ? 'KRİTİK' : matchedLesson.onemDuzeyi === 'yuksek' ? 'YÜKSEK' : 'ORTA'}
                            </span>
                          </div>
                          <div className="lesson-inline-body">
                            <p className="lesson-summary"><FiTarget /> <strong>{matchedLesson.konuBasligi}</strong></p>
                            <p className="lesson-explanation">{matchedLesson.konuAnlatimi}</p>
                            {matchedLesson.bilmenGerekenler && matchedLesson.bilmenGerekenler.length > 0 && (
                              <div className="lesson-keys">
                                <strong>Bilmen Gerekenler:</strong>
                                <ul>
                                  {matchedLesson.bilmenGerekenler.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {matchedLesson.hafizaSifresi && (
                              <div className="memory-hack">
                                <FiZap /> <strong>Hafıza Şifresi:</strong> {matchedLesson.hafizaSifresi}
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="wrong-tip">
                          <FiBookOpen className="tip-icon" />
                          <div>
                            <strong>Neden Bu Cevap?</strong>
                            <p>Bu soru <em>{currentQuestion.alt_kategori || currentQuestion.ust_kategori}</em> konusuna ait. Bu konuyu pekiştirmek için <strong>Konu Anlatımı</strong> sekmesindeki ilgili dersleri incele ve <strong>Kritik Bilgiler</strong> sekmesinden hızlı tekrar yap.</p>
                          </div>
                        </div>
                      )}
                      <div className="mistake-saved">
                        <FiInfo /> Bu soru "Yanlışlarım" bölümüne kaydedildi. Tekrar çözebilirsin.
                      </div>
                    </div>
                  );
                })()}
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky next button bar - always visible after answering */}
      {
        isAnswered && (
          <div className="sticky-next-bar" ref={feedbackRef}>
            <button className="btn btn-primary next-btn-sticky" onClick={handleNextQuestion}>
              Sıradaki Soru <FiArrowRight />
            </button>
          </div>
        )
      }

      <style>{`
        .quiz-view {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
          padding-bottom: 3rem;
        }

        .page-header h1 {
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Order Toggle */
        .quiz-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .order-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .order-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          border: 1px solid var(--glass-border);
          background: var(--glass-bg);
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .order-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .order-btn.active {
          background: rgba(59, 130, 246, 0.2);
          border-color: var(--accent-primary);
          color: var(--accent-secondary);
          font-weight: 700;
        }

        .order-btn.smart-btn {
          border-color: rgba(251, 146, 60, 0.3);
          color: #fb923c;
        }
        .order-btn.smart-btn:hover {
          background: rgba(251, 146, 60, 0.15);
          border-color: rgba(251, 146, 60, 0.5);
        }

        /* Category Filter */
        .category-filter {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .filter-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .filter-btn {
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          border: 1px solid var(--glass-border);
          background: var(--glass-bg);
          color: var(--text-secondary);
          font-size: 0.78rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .filter-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: rgba(59, 130, 246, 0.2);
          border-color: var(--accent-primary);
          color: var(--accent-secondary);
          font-weight: 700;
        }

        .quiz-qid {
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          font-family: monospace;
        }

        .quiz-progress-bar { margin-bottom: 0.5rem; }

        .progress-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .source-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: var(--success);
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .q-counter {
          color: var(--accent-secondary);
          font-size: 0.9rem;
          font-weight: 700;
        }

        .progress-track {
          height: 6px;
          background: var(--glass-bg);
          border-radius: 999px;
          overflow: hidden;
          margin-bottom: 0.35rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(to right, var(--accent-primary), var(--success));
          border-radius: 999px;
          transition: width 0.4s ease;
        }

        .session-stats-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .streak-badge {
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.25);
          color: #fbbf24;
          padding: 0.15rem 0.65rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.8rem;
          animation: pulse 1s ease-in-out infinite alternate;
        }

        @keyframes pulse {
          from { opacity: 0.8; }
          to { opacity: 1; transform: scale(1.03); }
        }

        .quiz-container { padding: 2.5rem; }

        .quiz-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .quiz-category {
          background: rgba(59,130,246,0.15);
          color: var(--accent-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .quiz-subcategory {
          background: rgba(255,255,255,0.05);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.875rem;
        }

        .question-text {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .result-icon { position: absolute; right: 1.25rem; font-size: 1.5rem; }
        .result-icon.success { color: var(--success); }
        .result-icon.danger { color: var(--danger); }

        .feedback-panel {
          margin-top: 2rem;
          padding: 1.5rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feedback-main { display: flex; flex-direction: column; gap: 1rem; }

        .success-panel { background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2); }
        .danger-panel { background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.2); }

        .feedback-content { display: flex; align-items: center; gap: 1.5rem; }
        .feedback-icon-lg { font-size: 3rem; flex-shrink: 0; }
        .success-panel .feedback-icon-lg { color: var(--success); }
        .danger-panel .feedback-icon-lg { color: var(--danger); }

        .streak-msg { color: #fbbf24; font-weight: 600; font-size: 0.9rem; margin-top: 0.25rem; }

        .correct-reveal {
          margin-top: 0.25rem;
          color: var(--text-secondary);
        }

        .correct-reveal strong { color: var(--success); }

        .wrong-explanation {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 10px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .wrong-tip {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .tip-icon { font-size: 1.5rem; color: var(--accent-secondary); flex-shrink: 0; margin-top: 2px; }

        .wrong-tip p {
          margin-top: 0.25rem;
          color: var(--text-secondary);
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .wrong-tip em { color: var(--accent-secondary); font-style: normal; font-weight: 600; }

        .mistake-saved {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--warning);
        }

        .next-btn {
          align-self: stretch;
          display: none;
        }

        .sticky-next-bar {
          position: sticky;
          bottom: 0;
          z-index: 50;
          padding: 1rem;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.98) 60%, rgba(15, 23, 42, 0) 100%);
        }

        .next-btn-sticky {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 1rem 2rem;
          font-size: 1.15rem;
          font-weight: 700;
          border-radius: 12px;
          background: var(--accent-primary);
          color: #fff;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .next-btn-sticky:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
        }

        /* Inline Lesson Display */
        .lesson-inline {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(59, 130, 246, 0.25);
        }

        .lesson-inline-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1.25rem;
          background: rgba(6, 182, 212, 0.1);
          border-bottom: 1px solid rgba(59, 130, 246, 0.15);
        }

        .importance-tag {
          margin-left: auto;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
        }
        .importance-tag.kritik { background: rgba(239, 68, 68, 0.2); color: #f87171; }
        .importance-tag.yuksek { background: rgba(245, 158, 11, 0.2); color: #fbbf24; }
        .importance-tag.orta { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }

        .lesson-inline-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .lesson-summary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-secondary);
          font-size: 1rem;
          margin: 0;
        }

        .lesson-explanation {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.925rem;
          white-space: pre-line;
          margin: 0;
        }

        .lesson-keys {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.15);
          border-radius: 8px;
          padding: 1rem;
        }

        .lesson-keys strong {
          color: #34d399;
          font-size: 0.9rem;
        }

        .lesson-keys ul {
          margin: 0.5rem 0 0;
          padding-left: 1.25rem;
        }

        .lesson-keys li {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 0.25rem;
        }

        .memory-hack {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.05));
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 8px;
          padding: 0.875rem 1rem;
          color: #fbbf24;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .memory-hack strong {
          color: #f59e0b;
          white-space: nowrap;
        }

        /* Timer */
        .quiz-timer-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
        }
        .timer-track {
          flex: 1;
          height: 6px;
          background: rgba(255,255,255,0.08);
          border-radius: 3px;
          overflow: hidden;
        }
        .timer-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 1s linear;
        }
        .quiz-timer-bar.safe .timer-fill { background: linear-gradient(90deg, #3b82f6, #60a5fa); }
        .quiz-timer-bar.safe .timer-text { color: #60a5fa; }
        .quiz-timer-bar.warning .timer-fill { background: linear-gradient(90deg, #f59e0b, #fbbf24); }
        .quiz-timer-bar.warning .timer-text { color: #fbbf24; }
        .quiz-timer-bar.danger .timer-fill { background: linear-gradient(90deg, #ef4444, #f87171); }
        .quiz-timer-bar.danger .timer-text { color: #f87171; }
        .timer-text {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.9rem;
          font-weight: 700;
          min-width: 50px;
        }
        .timer-text.flash { animation: timer-flash 0.5s ease-in-out infinite; }
        @keyframes timer-flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .timer-btn.timer-active {
          background: rgba(59,130,246,0.15) !important;
          border-color: rgba(59,130,246,0.3) !important;
          color: #60a5fa !important;
        }

        @media (max-width: 640px) {
          .quiz-container { padding: 1.5rem; }
          .question-text { font-size: 1.125rem; }
          .next-btn { width: 100%; }
        }
      `}</style>
    </div >
  );
}
