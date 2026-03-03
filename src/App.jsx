import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBookOpen, FiEdit3, FiAlertCircle, FiAward, FiMenu, FiX, FiBook, FiZap, FiLayers, FiBarChart2, FiCheckSquare, FiSettings, FiRefreshCw, FiTrash2 } from 'react-icons/fi';
import KonuAnlatimiView from './views/KonuAnlatimiView';
import WeakTopicsView from './views/WeakTopicsView';
import QuizView from './views/QuizView';
import ReviewView from './views/ReviewView';
import CheatSheetView from './views/CheatSheetView';
import FlashcardView from './views/FlashcardView';
import DogruYanlisView from './views/DogruYanlisView';
import ExamSimView from './views/ExamSimView';
import './index.css';

export default function App() {
  const [currentView, setCurrentView] = useState('lessons');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [stats, setStats] = useState({
    solved: 0,
    correct: 0,
    savedMistakes: 0
  });

  useEffect(() => {
    const savedStats = localStorage.getItem('ebeas_stats');
    if (savedStats) setStats(JSON.parse(savedStats));

    const mistakes = JSON.parse(localStorage.getItem('ebeas_mistakes') || '[]');
    setStats(prev => ({ ...prev, savedMistakes: mistakes.length }));
  }, [currentView]);

  const navItems = [
    { id: 'lessons', label: 'Konu Anlatımı', icon: <FiBook />, desc: 'Detaylı ders' },
    { id: 'flashcard', label: 'Bilgi Kartları', icon: <FiLayers />, desc: '150 kavram kartı' },
    { id: 'truefalse', label: 'Doğru / Yanlış', icon: <FiCheckSquare />, desc: '80 ifade' },
    { id: 'cheat', label: 'Kritik Bilgiler', icon: <FiZap />, desc: '54 bolum' },
    { id: 'quiz', label: 'Soru Havuzu Çöz', icon: <FiEdit3 />, desc: '1197 soru' },
    { id: 'exam', label: 'Sınav Simülasyonu', icon: <FiAward />, desc: '100 soru / 120dk' },
    { id: 'review', label: 'Yanlışlarım', icon: <FiAlertCircle />, badge: stats.savedMistakes > 0 ? stats.savedMistakes : null },
    { id: 'study', label: 'Performans Analizi', icon: <FiBarChart2 />, desc: 'Zayıf konular' },
    { id: 'settings', label: 'Ayarlar', icon: <FiSettings />, desc: 'Sıfırlama' },
  ];

  const handleNavClick = (id) => {
    setCurrentView(id);
    setIsSidebarOpen(false);
  };

  return (
    <div className="app-container">
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="logo">
          <FiAward className="logo-icon" />
          <span>e-BEAS PRO</span>
        </div>
        <button className="menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(isSidebarOpen || !isMobile) && (
          <motion.nav
            className="sidebar glass-panel"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          >
            <div className="sidebar-header">
              <FiAward className="logo-icon" />
              <h2>e-BEAS PRO</h2>
            </div>

            <div className="nav-links">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-item ${currentView === item.id ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <div className="nav-text-group">
                    <span className="nav-label">{item.label}</span>
                    {item.desc && <span className="nav-desc">{item.desc}</span>}
                  </div>
                  {item.badge && <span className="nav-badge">{item.badge}</span>}
                </button>
              ))}
            </div>

            <div className="user-stats glass-card">
              <h4>İlerlemen</h4>
              <div className="level-display">
                <span className="level-badge">
                  {stats.solved < 50 ? '' : stats.solved < 200 ? '' : stats.solved < 500 ? '' : ''}
                </span>
                <div className="level-info">
                  <span className="level-name">
                    {stats.solved < 50 ? 'Stajyer' : stats.solved < 200 ? 'Uzman' : stats.solved < 500 ? 'Master' : 'Profesör'}
                  </span>
                  <span className="level-next">
                    {stats.solved < 50 ? `${50 - stats.solved} soru → Uzman` : stats.solved < 200 ? `${200 - stats.solved} soru → Master` : stats.solved < 500 ? `${500 - stats.solved} soru → Profesör` : 'Max Seviye'}
                  </span>
                </div>
              </div>
              <div className="progress-mini">
                <div className="progress-mini-track">
                  <div className="progress-mini-fill" style={{ width: `${Math.min((stats.solved / 1197) * 100, 100)}%` }}></div>
                </div>
                <span className="progress-mini-label">{stats.solved} / 1197</span>
              </div>
              <div className="stat-row">
                <span>Başarı:</span>
                <strong style={{ color: stats.solved > 0 && (stats.correct / stats.solved) >= 0.7 ? 'var(--success)' : stats.solved > 0 && (stats.correct / stats.solved) >= 0.5 ? '#fbbf24' : 'var(--danger)' }}>
                  {stats.solved > 0 ? Math.round((stats.correct / stats.solved) * 100) : 0}%
                </strong>
              </div>
              <div className="stat-row">
                <span>Doğru:</span>
                <strong className="success-text">{stats.correct}</strong>
              </div>
              <div className="stat-row">
                <span>Yanlış:</span>
                <strong style={{ color: 'var(--danger)' }}>{stats.savedMistakes}</strong>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="view-container"
          >
            {currentView === 'lessons' && <KonuAnlatimiView />}
            {currentView === 'flashcard' && <FlashcardView />}
            {currentView === 'truefalse' && <DogruYanlisView />}
            {currentView === 'cheat' && <CheatSheetView />}
            {currentView === 'quiz' && <QuizView />}
            {currentView === 'exam' && <ExamSimView />}
            {currentView === 'review' && <ReviewView />}
            {currentView === 'study' && <WeakTopicsView />}
            {currentView === 'settings' && (
              <div className="settings-view">
                <header className="page-header"><div><h1><FiSettings /> Ayarlar</h1><p>Verileri sıfırla ve yönet</p></div></header>
                <div className="settings-section glass-panel">
                  <h3>İstatistik Sıfırlama</h3>
                  <button className="settings-btn" onClick={() => { if (confirm('Quiz istatistikleri sıfırlansın mı?')) { localStorage.removeItem('ebeas_stats'); setStats({ solved: 0, correct: 0, savedMistakes: 0 }); alert('Quiz istatistikleri sıfırlandı!'); } }}><FiRefreshCw /> Quiz İstatistiklerini Sıfırla</button>
                  <button className="settings-btn" onClick={() => { if (confirm('D/Y ilerleme verisi sıfırlansın mı? Öğrenilen ifadeler tekrar gösterilecek.')) { localStorage.removeItem('ebeas_dy_progress'); alert('Doğru/Yanlış ilerlemesi sıfırlandı!'); } }}><FiRefreshCw /> Doğru/Yanlış İlerlemesini Sıfırla</button>
                  <button className="settings-btn" onClick={() => { if (confirm('Bilgi kartı öğrenme verileri sıfırlansın mı?')) { localStorage.removeItem('ebeas_fc_mastery'); alert('Flashcard ilerlemesi sıfırlandı!'); } }}><FiRefreshCw /> Bilgi Kartı İlerlemesini Sıfırla</button>
                  <button className="settings-btn warning" onClick={() => { if (confirm('Tüm yanlış cevaplar silinsin mi?')) { localStorage.removeItem('ebeas_mistakes'); setStats(p => ({ ...p, savedMistakes: 0 })); alert('Yanlışlar silindi!'); } }}><FiTrash2 /> Yanlışları Temizle</button>
                  <button className="settings-btn danger" onClick={() => { if (confirm('TÜM VERİLER silinecek! Emin misiniz?')) { localStorage.removeItem('ebeas_stats'); localStorage.removeItem('ebeas_mistakes'); localStorage.removeItem('ebeas_dy_progress'); localStorage.removeItem('ebeas_exam_history'); localStorage.removeItem('ebeas_fc_mastery'); setStats({ solved: 0, correct: 0, savedMistakes: 0 }); alert('Tüm veriler sıfırlandı!'); } }}><FiTrash2 /> Tüm Verileri Sıfırla</button>
                </div>
                <div className="settings-section glass-panel">
                  <h3>Uygulama Bilgisi</h3>
                  <div className="settings-info"><span>Soru Havuzu</span><strong>1197 soru</strong></div>
                  <div className="settings-info"><span>Bilgi Kartları</span><strong>90 kart</strong></div>
                  <div className="settings-info"><span>Doğru/Yanlış</span><strong>45 ifade</strong></div>
                  <div className="settings-info"><span>Kritik Bilgiler</span><strong>46 bölüm, 450+ kart</strong></div>
                  <div className="settings-info"><span>Konu Anlatımı</span><strong>12 ders, 10+ tablo</strong></div>
                  <div className="settings-info"><span>Detaylı Çözüm</span><strong>159 soru analizi</strong></div>
                </div>
                <style>{`
                  .settings-view { max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; padding-bottom: 3rem; }
                  .settings-section { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; }
                  .settings-section h3 { margin: 0 0 0.5rem; font-size: 1.05rem; }
                  .settings-btn { display: flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1rem; border-radius: 10px; border: 1px solid rgba(59,130,246,0.2); background: rgba(59,130,246,0.05); color: #60a5fa; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
                  .settings-btn:hover { background: rgba(59,130,246,0.15); }
                  .settings-btn.warning { border-color: rgba(245,158,11,0.2); background: rgba(245,158,11,0.05); color: #fbbf24; }
                  .settings-btn.warning:hover { background: rgba(245,158,11,0.15); }
                  .settings-btn.danger { border-color: rgba(239,68,68,0.2); background: rgba(239,68,68,0.05); color: #f87171; }
                  .settings-btn.danger:hover { background: rgba(239,68,68,0.15); }
                  .settings-info { display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.9rem; }
                  .settings-info span { color: var(--text-secondary); }
                  .settings-info strong { color: var(--text-primary); }
                `}</style>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Mobile Bottom Tab Bar - Always Visible */}
      <nav className="bottom-tab-bar">
        {navItems.filter(i => ['lessons', 'flashcard', 'truefalse', 'cheat', 'quiz', 'review', 'study', 'settings'].includes(i.id)).slice(0, 6).map(item => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`tab-item ${currentView === item.id ? 'active' : ''}`}
          >
            <span className="tab-icon">{item.icon}</span>
            <span className="tab-label">
              {item.id === 'lessons' ? 'Konu' : item.id === 'flashcard' ? 'Kartlar' : item.id === 'truefalse' ? 'D/Y' : item.id === 'cheat' ? 'Kritik' : item.id === 'quiz' ? 'Sorular' : 'Yanlış'}
            </span>
            {item.badge && <span className="tab-badge">{item.badge}</span>}
          </button>
        ))}
      </nav>

      <style>{`
        .app-container {
          display: flex;
          min-height: 100vh;
          position: relative;
        }

        .mobile-header {
          display: none;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--glass-border);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.25rem;
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-icon {
          color: #3b82f6;
          -webkit-text-fill-color: initial;
        }

        .menu-toggle {
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: 1.5rem;
          cursor: pointer;
        }

        .sidebar {
          width: 280px;
          position: fixed;
          top: 1rem;
          bottom: 1rem;
          left: 1rem;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          z-index: 40;
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .sidebar-header h2 {
          font-size: 1.5rem;
          margin: 0;
          background: linear-gradient(135deg, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1rem;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 12px;
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }

        .nav-item.active {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.2));
          border-color: rgba(59, 130, 246, 0.3);
          color: var(--accent-secondary);
        }

        .nav-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .nav-text-group {
          display: flex;
          flex-direction: column;
        }

        .nav-desc {
          font-size: 0.7rem;
          color: var(--text-tertiary);
          font-weight: 400;
          margin-top: 0.15rem;
        }

        .nav-item.active .nav-desc {
          color: rgba(96, 165, 250, 0.6);
        }

        .nav-badge {
          margin-left: auto;
          background: var(--danger);
          color: white;
          font-size: 0.75rem;
          padding: 0.15rem 0.5rem;
          border-radius: 999px;
          font-weight: 700;
        }

        .user-stats {
          margin-top: auto;
          padding: 1rem;
        }

        .user-stats h4 {
          margin-bottom: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        .success-text {
          color: var(--success);
        }

        .level-display {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .level-badge {
          font-size: 1.75rem;
        }

        .level-info {
          display: flex;
          flex-direction: column;
        }

        .level-name {
          font-weight: 700;
          font-size: 1rem;
          background: linear-gradient(135deg, #60a5fa, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .level-next {
          font-size: 0.7rem;
          color: var(--text-tertiary);
          margin-top: 0.1rem;
        }

        .progress-mini {
          margin-bottom: 0.75rem;
        }

        .progress-mini-track {
          height: 6px;
          background: rgba(255,255,255,0.08);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 0.35rem;
        }

        .progress-mini-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          border-radius: 3px;
          transition: width 0.5s ease;
        }

        .progress-mini-label {
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }

        .main-content {
          margin-left: 300px;
          flex: 1;
          padding: 2rem;
          max-width: 1200px;
        }

        .view-container {
          height: 100%;
        }

        /* Bottom Tab Bar */
        .bottom-tab-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 0.35rem 0.5rem calc(0.35rem + env(safe-area-inset-bottom, 0px));
          justify-content: space-around;
          align-items: center;
        }

        .tab-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.15rem;
          background: transparent;
          border: none;
          color: var(--text-tertiary);
          font-size: 0.65rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.4rem 0.75rem;
          border-radius: 10px;
          transition: all 0.2s;
          position: relative;
          min-width: 52px;
        }

        .tab-item.active {
          color: #60a5fa;
          background: rgba(59, 130, 246, 0.1);
        }

        .tab-icon {
          font-size: 1.25rem;
          display: flex;
        }

        .tab-label {
          white-space: nowrap;
          letter-spacing: 0.02em;
        }

        .tab-badge {
          position: absolute;
          top: 0;
          right: 0.25rem;
          background: var(--danger);
          color: white;
          font-size: 0.6rem;
          min-width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .mobile-header {
            display: flex;
          }
          .bottom-tab-bar {
            display: flex;
          }
          .sidebar {
            top: 0;
            left: 0;
            bottom: 0;
            margin: 0;
            border-radius: 0;
            border-left: none;
            border-top: none;
            border-bottom: none;
            padding-top: 5rem;
          }
          .main-content {
            margin-left: 0;
            padding: 4.5rem 1rem 5.5rem 1rem;
          }
          .sidebar-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(4px);
            z-index: 30;
          }
        }
      `}</style>
    </div>
  );
}
