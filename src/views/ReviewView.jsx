import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAlertCircle, FiTrash2, FiRefreshCw, FiCheckCircle, FiXCircle, FiChevronLeft, FiChevronRight, FiBookOpen, FiZap, FiTarget, FiEye } from 'react-icons/fi';
import { detailedLessons } from '../data/detailedLessons';

export default function ReviewView() {
  const [mistakes, setMistakes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const savedMistakes = JSON.parse(localStorage.getItem('ebeas_mistakes') || '[]');
    setMistakes(savedMistakes);
  }, []);

  const currentQuestion = mistakes[currentIndex];

  const handleAnswerSelect = (optionValue) => {
    if (isAnswered) return;
    setSelectedAnswer(optionValue);
    setIsAnswered(true);
    setIsCorrect(optionValue === currentQuestion.dogru_cevap);
  };

  const goToQuestion = (idx) => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(false);
    setCurrentIndex(idx);
  };

  const handleRemoveMistake = () => {
    const updatedMistakes = mistakes.filter((_, idx) => idx !== currentIndex);
    setMistakes(updatedMistakes);
    localStorage.setItem('ebeas_mistakes', JSON.stringify(updatedMistakes));
    setIsAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(false);
    if (currentIndex >= updatedMistakes.length) {
      setCurrentIndex(Math.max(0, updatedMistakes.length - 1));
    }
  };

  const clearAllMistakes = () => {
    if (window.confirm('Tüm kaydedilmiş yanlış soruları silmek istediğinize emin misiniz?')) {
      setMistakes([]);
      localStorage.setItem('ebeas_mistakes', JSON.stringify([]));
    }
  };

  if (mistakes.length === 0) {
    return (
      <div className="review-view">
        <div className="empty-state">
          <FiCheckCircle className="empty-icon" />
          <h2>Harika İş Çıkarıyorsun!</h2>
          <p>Henüz kaydedilmiş yanlış bir sorun bulunmuyor.<br />Soru Havuzunda çözdüğün yanlışlar buraya otomatik eklenir.</p>
        </div>
      </div>
    );
  }

  const options = currentQuestion ? [
    { id: 'A', value: currentQuestion.sik_a },
    { id: 'B', value: currentQuestion.sik_b },
    { id: 'C', value: currentQuestion.sik_c },
    { id: 'D', value: currentQuestion.sik_d },
  ].filter(opt => opt.value) : [];

  return (
    <div className="review-view">
      <header className="page-header">
        <div>
          <h1>Yanlışlarım</h1>
          <p>Önceden yanlış yaptığın soruları tekrar çözerek pekiştir. ({mistakes.length} soru)</p>
        </div>
        <button className="btn btn-outline danger-text" onClick={clearAllMistakes}>
          <FiTrash2 /> Tümünü Temizle
        </button>
      </header>

      {/* Enhanced Navigation */}
      <div className="review-nav">
        <button className="nav-arrow-btn" onClick={() => goToQuestion(currentIndex - 1)} disabled={currentIndex === 0}>
          <FiChevronLeft /> Önceki
        </button>
        <div className="review-counter">
          <span className="counter-current">{currentIndex + 1}</span>
          <span className="counter-sep">/</span>
          <span className="counter-total">{mistakes.length}</span>
        </div>
        <button className="nav-arrow-btn" onClick={() => goToQuestion(currentIndex + 1)} disabled={currentIndex >= mistakes.length - 1}>
          Sonraki <FiChevronRight />
        </button>
      </div>

      {/* Question Dot Navigator */}
      <div className="review-dots">
        {mistakes.map((_, i) => (
          <button key={i} className={`review-dot ${i === currentIndex ? 'active' : ''}`} onClick={() => goToQuestion(i)}>
            {i + 1}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${((currentIndex + 1) / mistakes.length) * 100}%` }}></div>
      </div>

      <div className="quiz-container glass-panel">
        {/* Category info */}
        <div className="quiz-meta">
          <span className="quiz-category">{currentQuestion.ust_kategori || 'Genel'}</span>
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
              <div className="feedback-content">
                <div className="feedback-icon-lg">
                  {isCorrect ? <FiCheckCircle /> : <FiXCircle />}
                </div>
                <div>
                  <h3>{isCorrect ? 'Tebrikler, bu kez doğru!' : 'Yine Yanlış Cevap'}</h3>
                  {!isCorrect && (
                    <p>Doğru Cevap: <strong>{currentQuestion.dogru_cevap}</strong></p>
                  )}
                </div>
              </div>
              <div className="feedback-actions">
                {isCorrect && (
                  <button className="btn btn-outline" onClick={handleRemoveMistake}>
                    <FiTrash2 /> Öğrendim, Listeden Çıkar
                  </button>
                )}
                {currentIndex < mistakes.length - 1 && (
                  <button className="btn btn-primary" onClick={() => goToQuestion(currentIndex + 1)}>
                    Sıradaki <FiChevronRight />
                  </button>
                )}
              </div>

              {/* Inline lesson for wrong answers in review */}
              {!isCorrect && (() => {
                const matchedLesson = detailedLessons.find(l =>
                  currentQuestion.soru && l.soruMetni &&
                  (currentQuestion.soru.substring(0, 60).trim() === l.soruMetni.substring(0, 60).trim() ||
                    l.id === currentQuestion.id)
                );
                if (!matchedLesson) return null;
                return (
                  <div className="review-lesson-box">
                    <div className="review-lesson-header">
                      <FiBookOpen /> <strong>Bu Sorunun Detaylı Analizi</strong>
                      <span className={`importance-tag ${matchedLesson.onemDuzeyi}`}>
                        {matchedLesson.onemDuzeyi === 'kritik' ? 'KRİTİK' : matchedLesson.onemDuzeyi === 'yuksek' ? 'YÜKSEK' : 'ORTA'}
                      </span>
                    </div>
                    <p className="review-lesson-title"><FiTarget /> <strong>{matchedLesson.konuBasligi}</strong></p>
                    <p className="review-lesson-body">{matchedLesson.konuAnlatimi}</p>
                    {matchedLesson.bilmenGerekenler && matchedLesson.bilmenGerekenler.length > 0 && (
                      <div className="review-lesson-keys">
                        <strong>Bilmen Gerekenler:</strong>
                        <ul>{matchedLesson.bilmenGerekenler.map((b, i) => <li key={i}>{b}</li>)}</ul>
                      </div>
                    )}
                    {matchedLesson.hafizaSifresi && (
                      <div className="review-memory-hack">
                        <FiZap /> <strong>Hafıza Şifresi:</strong> {matchedLesson.hafizaSifresi}
                      </div>
                    )}
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .review-view {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .page-header h1 {
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 50vh;
          text-align: center;
          color: var(--text-secondary);
        }

        .empty-icon {
          font-size: 4rem;
          color: var(--success);
          margin-bottom: 1.5rem;
          opacity: 0.6;
        }

        .empty-state h2 { color: var(--text-primary); margin-bottom: 0.5rem; }

        .btn-outline {
          background: transparent;
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          cursor: pointer;
        }

        .btn-outline:hover { background: rgba(255, 255, 255, 0.05); }

        .danger-text {
          color: var(--danger);
          border-color: rgba(239, 68, 68, 0.3);
        }

        .danger-text:hover { background: rgba(239, 68, 68, 0.1); }

        /* Navigation */
        .review-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-arrow-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          padding: 0.6rem 1.25rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.2s;
        }

        .nav-arrow-btn:hover:not(:disabled) {
          background: rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .nav-arrow-btn:disabled { opacity: 0.3; cursor: default; }

        .review-counter {
          font-size: 1.25rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .counter-current { color: var(--accent-secondary); font-size: 1.5rem; }
        .counter-sep { color: var(--text-tertiary); }
        .counter-total { color: var(--text-secondary); }

        .review-dots {
          display: flex;
          gap: 0.35rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .review-dot {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          background: var(--glass-bg);
          color: var(--text-tertiary);
          font-size: 0.7rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .review-dot:hover { background: rgba(59, 130, 246, 0.15); color: white; }

        .review-dot.active {
          background: var(--danger);
          color: white;
          border-color: var(--danger);
          transform: scale(1.15);
        }

        .quiz-container { padding: 2rem; }

        .quiz-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .quiz-category {
          background: rgba(59, 130, 246, 0.15);
          color: var(--accent-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .quiz-subcategory {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.875rem;
        }

        .question-text {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
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

        .success-panel { background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); }
        .danger-panel { background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); }

        .feedback-content { display: flex; align-items: center; gap: 1.5rem; }
        .feedback-icon-lg { font-size: 3rem; }
        .success-panel .feedback-icon-lg { color: var(--success); }
        .danger-panel .feedback-icon-lg { color: var(--danger); }

        .feedback-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }

        /* Review inline lesson */
        .review-lesson-box {
          margin-top: 0.5rem;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          overflow: hidden;
        }

        .review-lesson-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1.25rem;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(6, 182, 212, 0.08));
          border-bottom: 1px solid rgba(59, 130, 246, 0.12);
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

        .review-lesson-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-secondary);
          padding: 1rem 1.25rem 0;
          margin: 0;
        }

        .review-lesson-body {
          padding: 0.75rem 1.25rem;
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.9rem;
          white-space: pre-line;
          margin: 0;
        }

        .review-lesson-keys {
          margin: 0 1.25rem 1rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.15);
          border-radius: 8px;
          padding: 1rem;
        }
        .review-lesson-keys strong { color: #34d399; font-size: 0.9rem; }
        .review-lesson-keys ul { margin: 0.5rem 0 0; padding-left: 1.25rem; }
        .review-lesson-keys li { color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6; margin-bottom: 0.25rem; }

        .review-memory-hack {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin: 0 1.25rem 1rem;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.05));
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 8px;
          padding: 0.875rem 1rem;
          color: #fbbf24;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .review-memory-hack strong { color: #f59e0b; white-space: nowrap; }

        @media (max-width: 640px) {
          .quiz-container { padding: 1rem; }
          .option-btn { padding: 1rem; }
          .option-letter { width: 28px; height: 28px; font-size: 0.9rem; margin-right: 0.75rem; }
          .option-text { font-size: 0.95rem; padding-right: 1rem; }
          .feedback-panel { flex-direction: column; align-items: flex-start; }
          .feedback-actions { width: 100%; flex-direction: column; }
          .feedback-actions button { width: 100%; }
        }
      `}</style>
    </div>
  );
}
