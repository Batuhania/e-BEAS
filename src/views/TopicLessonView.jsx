import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiTarget, FiAlertTriangle, FiZap, FiBookOpen, FiCheck } from 'react-icons/fi';
import { detailedLessons } from '../data/detailedLessons';

const onemRenkleri = {
  kritik: { bg: 'rgba(239, 68, 68, 0.15)', border: 'rgba(239, 68, 68, 0.3)', text: '#f87171', label: 'KRİTİK' },
  yuksek: { bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.3)', text: '#fbbf24', label: 'YÜKSEK' },
  orta: { bg: 'rgba(59, 130, 246, 0.15)', border: 'rgba(59, 130, 246, 0.3)', text: '#60a5fa', label: 'ORTA' },
};

export default function TopicLessonView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lesson = detailedLessons[currentIndex];
  const onem = onemRenkleri[lesson.onemDuzeyi] || onemRenkleri.orta;

  const goNext = () => setCurrentIndex(i => Math.min(i + 1, detailedLessons.length - 1));
  const goPrev = () => setCurrentIndex(i => Math.max(i - 1, 0));

  return (
    <div className="topic-lesson-view">
      <header className="page-header">
        <div>
          <h1>Konu Anlatımı</h1>
          <p>Soru bazlı detaylı ders anlatımları, hafıza şifreleri ve analitik çözümler.</p>
        </div>
        <div className="lesson-counter-badge">
          Ders {currentIndex + 1} / {detailedLessons.length}
        </div>
      </header>

      {/* Navigation Bar */}
      <div className="lesson-nav">
        <button className="nav-arrow" onClick={goPrev} disabled={currentIndex === 0}>
          <FiChevronLeft /> Önceki
        </button>
        <div className="lesson-dots">
          {detailedLessons.map((_, i) => (
            <button key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(i)}>
              {i + 1}
            </button>
          ))}
        </div>
        <button className="nav-arrow" onClick={goNext} disabled={currentIndex === detailedLessons.length - 1}>
          Sonraki <FiChevronRight />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.25 }}
          className="lesson-content"
        >
          {/* Category & Importance Badge */}
          <div className="lesson-meta">
            <span className="meta-cat">{lesson.kategori}</span>
            <span className="meta-topic">{lesson.konuBasligi}</span>
            <span className="meta-onem" style={{ background: onem.bg, borderColor: onem.border, color: onem.text }}>
              {onem.label}
            </span>
          </div>

          {/* Question */}
          <div className="lesson-section glass-panel question-block">
            <h3><FiTarget className="section-icon" /> Soru {lesson.id}</h3>
            <p className="question-full">{lesson.soruMetni}</p>
            <div className="question-summary">
              <strong>Sade Türkçeyle:</strong> {lesson.soruOzeti}
            </div>
          </div>

          {/* Topic Explanation */}
          <div className="lesson-section glass-panel explanation-block">
            <h3><FiBookOpen className="section-icon" /> Sıfırdan Konu Anlatımı</h3>
            <div className="explanation-text">
              {lesson.konuAnlatimi.split('\n').map((p, i) => (
                p.trim() ? <p key={i}>{p}</p> : <br key={i} />
              ))}
            </div>
          </div>

          {/* Correct Answer */}
          <div className="lesson-section correct-answer-block">
            <h3><FiCheck className="section-icon" /> Doğru Cevap</h3>
            <div className="correct-answer-text">{lesson.dogruCevap}</div>
          </div>

          {/* Key Takeaways */}
          <div className="lesson-section glass-panel takeaway-block">
            <h3><FiAlertTriangle className="section-icon" /> Bilmen Gerekenler</h3>
            <ul>
              {lesson.bilmenGerekenler.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Memory Hack */}
          <div className="lesson-section memory-block">
            <h3><FiZap className="section-icon" /> Hafıza Şifresi</h3>
            <p>{lesson.hafizaSifresi}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <style>{`
        .topic-lesson-view {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 950px;
          margin: 0 auto;
          padding-bottom: 3rem;
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

        .lesson-counter-badge {
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.25);
          color: var(--accent-secondary);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.875rem;
        }

        .lesson-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .nav-arrow {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          padding: 0.6rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .nav-arrow:hover:not(:disabled) {
          background: rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .nav-arrow:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .lesson-dots {
          display: flex;
          gap: 0.35rem;
          flex-wrap: wrap;
          justify-content: center;
          flex: 1;
          overflow-x: auto;
        }

        .dot {
          width: 30px;
          height: 30px;
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

        .dot:hover {
          background: rgba(59, 130, 246, 0.15);
          color: var(--text-primary);
        }

        .dot.active {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
          transform: scale(1.15);
        }

        .lesson-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }

        .meta-cat {
          background: rgba(59, 130, 246, 0.15);
          color: var(--accent-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .meta-topic {
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 500;
        }

        .meta-onem {
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          border: 1px solid;
          margin-left: auto;
        }

        .lesson-section {
          padding: 1.5rem;
          border-radius: 16px;
          margin-bottom: 0.5rem;
        }

        .lesson-section h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .section-icon {
          font-size: 1.3rem;
          color: var(--accent-secondary);
        }

        .question-block {
          border-left: 4px solid var(--accent-primary);
        }

        .question-full {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .question-summary {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 8px;
          padding: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .explanation-block {
          border-left: 4px solid var(--success);
        }

        .explanation-text p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }

        .correct-answer-block {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .correct-answer-block h3 {
          color: var(--success);
        }

        .correct-answer-text {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--success);
          padding: 0.5rem 0;
        }

        .takeaway-block {
          border-left: 4px solid var(--warning);
        }

        .takeaway-block ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .takeaway-block li {
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .takeaway-block li::before {
          content: '›';
          position: absolute;
          left: 0;
        }

        .memory-block {
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.2);
        }

        .memory-block h3 {
          color: #06b6d4;
        }

        .memory-block p {
          font-size: 1.05rem;
          font-weight: 600;
          color: #67e8f9;
          line-height: 1.7;
        }

        @media (max-width: 640px) {
          .lesson-section { padding: 1.25rem; }
          .lesson-nav { flex-direction: column; }
          .lesson-dots { order: -1; }
        }
      `}</style>
    </div>
  );
}
