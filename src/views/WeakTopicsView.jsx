import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiTrendingUp, FiTarget, FiAward, FiBarChart2, FiZap, FiRefreshCw, FiCalendar, FiClock, FiCheckCircle, FiStar, FiActivity } from 'react-icons/fi';
import questionsData from '../data/questions.json';

const allCategories = [...new Set(questionsData.map(q => q.ust_kategori))].filter(Boolean);

export default function WeakTopicsView() {
    const [mistakes, setMistakes] = useState([]);
    const [stats, setStats] = useState({ solved: 0, correct: 0 });
    const [dyProgress, setDyProgress] = useState({});
    const [activeTab, setActiveTab] = useState('overview'); // overview, categories, history

    useEffect(() => {
        setMistakes(JSON.parse(localStorage.getItem('ebeas_mistakes') || '[]'));
        setStats(JSON.parse(localStorage.getItem('ebeas_stats') || '{"solved":0,"correct":0}'));
        setDyProgress(JSON.parse(localStorage.getItem('ebeas_dy_progress') || '{}'));
    }, []);

    const totalQuestions = 1197;
    const accuracy = stats.solved > 0 ? Math.round((stats.correct / stats.solved) * 100) : 0;
    const dyMastered = Object.values(dyProgress).filter(p => p.mastered).length;

    // Category analysis with per-category stats
    const categoryAnalysis = useMemo(() => {
        const catMap = {};
        questionsData.forEach(q => {
            const cat = q.ust_kategori || 'Diğer';
            if (!catMap[cat]) catMap[cat] = { total: 0, wrong: 0, solved: 0, correct: 0 };
            catMap[cat].total++;
        });
        mistakes.forEach(m => {
            const cat = m.ust_kategori || 'Diğer';
            if (catMap[cat]) catMap[cat].wrong++;
        });
        // Merge with per-category stats if available
        if (stats.categories) {
            Object.entries(stats.categories).forEach(([cat, data]) => {
                if (catMap[cat]) {
                    catMap[cat].solved = data.solved;
                    catMap[cat].correct = data.correct;
                }
            });
        }
        return Object.entries(catMap)
            .map(([name, data]) => ({
                name,
                ...data,
                accuracy: data.solved > 0 ? Math.round((data.correct / data.solved) * 100) : -1,
                coverage: Math.round((data.solved / data.total) * 100),
                dangerLevel: data.wrong === 0 ? 'safe' : data.wrong >= 5 ? 'critical' : data.wrong >= 2 ? 'warning' : 'mild'
            }))
            .sort((a, b) => b.wrong - a.wrong);
    }, [mistakes, stats]);

    // Readiness Score (0-100)
    const readinessScore = useMemo(() => {
        if (stats.solved === 0) return 0;
        const coverageScore = Math.min((stats.solved / totalQuestions) * 100, 100) * 0.3; // 30% weight
        const accuracyScore = accuracy * 0.4; // 40% weight
        const mistakeRatio = mistakes.length > 0 ? Math.max(0, 100 - (mistakes.length / stats.solved) * 200) : 100;
        const mistakeScore = mistakeRatio * 0.15; // 15% weight
        const dyScore = (dyMastered / 45) * 100 * 0.15; // 15% weight
        return Math.round(coverageScore + accuracyScore + mistakeScore + dyScore);
    }, [stats, accuracy, mistakes, dyMastered]);

    const readinessLabel = readinessScore >= 80 ? 'Sınava Hazırsın' : readinessScore >= 60 ? 'İyi Gidiyorsun' : readinessScore >= 40 ? 'Daha Çok Çalış' : readinessScore > 0 ? 'Başlangıç Aşaması' : 'Henüz Başlamadın';
    const readinessColor = readinessScore >= 80 ? '#34d399' : readinessScore >= 60 ? '#fbbf24' : readinessScore >= 40 ? '#fb923c' : '#f87171';

    // Study streak (consecutive days)
    const studyStreak = useMemo(() => {
        if (!stats.dailyLog) return 0;
        const days = Object.keys(stats.dailyLog).sort().reverse();
        if (days.length === 0) return 0;
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (days[0] !== today && days[0] !== yesterday) return 0;
        let streak = 0;
        let checkDate = new Date(days[0]);
        for (const day of days) {
            const d = new Date(day);
            const diff = Math.round((checkDate - d) / 86400000);
            if (diff > 1) break;
            streak++;
            checkDate = d;
        }
        return streak;
    }, [stats]);

    // Daily log for chart (last 7 days)
    const last7Days = useMemo(() => {
        const days = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date(Date.now() - i * 86400000);
            const key = d.toISOString().split('T')[0];
            const log = stats.dailyLog?.[key] || { solved: 0, correct: 0 };
            days.push({
                label: d.toLocaleDateString('tr-TR', { weekday: 'short' }),
                date: key,
                ...log,
                accuracy: log.solved > 0 ? Math.round((log.correct / log.solved) * 100) : 0
            });
        }
        return days;
    }, [stats]);

    const maxDailySolved = Math.max(...last7Days.map(d => d.solved), 1);

    // Smart recommendation
    const recommendation = useMemo(() => {
        const weakCats = categoryAnalysis.filter(c => c.dangerLevel === 'critical' || c.dangerLevel === 'warning');
        const uncoveredCats = categoryAnalysis.filter(c => c.coverage < 10 && c.total > 20);

        if (stats.solved === 0) return { title: 'Başla', text: 'Soru Havuzu\'ndan çözmeye başla. Günde 50 soru çözmeye çalış.' };
        if (weakCats.length > 0) return { title: `"${weakCats[0].name}" Zayıf`, text: `Bu kategoride ${weakCats[0].wrong} yanlışın var. Önce Kritik Bilgiler'den bu konuyu oku, sonra soruları tekrar çöz.` };
        if (uncoveredCats.length > 0) return { title: `"${uncoveredCats[0].name}" Eksik`, text: `Bu kategoriden henüz çok az soru çözmüşsün (${uncoveredCats[0].coverage}%). Dengeyi koru.` };
        if (accuracy < 60) return { title: 'Doğruluk Düşük', text: 'Konu Anlatımı ve Kritik Bilgiler\'i tekrar gözden geçir. Hızlı değil, doğru çözmeye odaklan.' };
        if (dyMastered < 20) return { title: 'D/Y Modunu Dene', text: `Doğru/Yanlış modunda ${45 - dyMastered} ifade kaldı. Kavram tuzaklarını öğren.` };
        return { title: 'Harika Gidiyorsun', text: 'Yanlışlarından tekrar çöz ve zayıf kategorilere odaklan.' };
    }, [categoryAnalysis, stats, accuracy, dyMastered]);

    const dangerColors = {
        critical: { bg: 'rgba(239,68,68,0.12)', border: 'rgba(239,68,68,0.3)', text: '#f87171', icon: '' },
        warning: { bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', text: '#fbbf24', icon: '' },
        mild: { bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.3)', text: '#60a5fa', icon: '' },
        safe: { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', text: '#34d399', icon: '' },
    };

    return (
        <div className="weak-topics-view">
            <header className="page-header">
                <div>
                    <h1><FiBarChart2 /> Performans Analizi</h1>
                    <p>Sınav hazırlığını takip et, zayıf noktalarını güçlendir</p>
                </div>
            </header>

            {/* Tab navigation */}
            <div className="pa-tabs">
                {[
                    { id: 'overview', label: 'Genel Bakış', icon: <FiActivity /> },
                    { id: 'categories', label: 'Kategoriler', icon: <FiTarget /> },
                    { id: 'history', label: 'Geçmiş', icon: <FiCalendar /> },
                ].map(tab => (
                    <button key={tab.id} className={`pa-tab ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}>
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            {/* ============ OVERVIEW TAB ============ */}
            {activeTab === 'overview' && (
                <div className="pa-tab-content">
                    {/* Readiness Score */}
                    <div className="pa-readiness glass-panel">
                        <div className="pa-readiness-ring">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                                <circle cx="50" cy="50" r="42" fill="none"
                                    stroke={readinessColor} strokeWidth="8" strokeLinecap="round"
                                    strokeDasharray={`${(readinessScore / 100) * 264} 264`}
                                    transform="rotate(-90 50 50)"
                                    style={{ transition: 'stroke-dasharray 1s ease' }} />
                            </svg>
                            <div className="pa-readiness-text">
                                <span className="pa-readiness-score" style={{ color: readinessColor }}>{readinessScore}</span>
                                <span className="pa-readiness-label">/ 100</span>
                            </div>
                        </div>
                        <div className="pa-readiness-info">
                            <h2>Sınav Hazırlık Puanı</h2>
                            <span className="pa-readiness-badge" style={{ color: readinessColor, borderColor: readinessColor + '40' }}>
                                {readinessLabel}
                            </span>
                            <div className="pa-readiness-breakdown">
                                <div className="pa-rb-item"><span>Kapsama</span><span>{Math.round(Math.min((stats.solved / totalQuestions) * 100, 100))}% / 100%</span></div>
                                <div className="pa-rb-item"><span>Doğruluk</span><span>{accuracy}% / 100%</span></div>
                                <div className="pa-rb-item"><span>D/Y Ustalık</span><span>{dyMastered}/45</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="pa-stats-grid">
                        <div className="pa-stat-card">
                            <div className="pa-stat-icon blue"><FiTarget /></div>
                            <span className="pa-stat-value">{stats.solved}</span>
                            <span className="pa-stat-label">Çözülen Soru</span>
                        </div>
                        <div className="pa-stat-card">
                            <div className="pa-stat-icon green"><FiCheckCircle /></div>
                            <span className="pa-stat-value">{stats.correct || 0}</span>
                            <span className="pa-stat-label">Doğru</span>
                        </div>
                        <div className="pa-stat-card">
                            <div className="pa-stat-icon red"><FiAlertTriangle /></div>
                            <span className="pa-stat-value">{mistakes.length}</span>
                            <span className="pa-stat-label">Yanlış</span>
                        </div>
                        <div className="pa-stat-card">
                            <div className="pa-stat-icon yellow"><FiTrendingUp /></div>
                            <span className="pa-stat-value">{accuracy}%</span>
                            <span className="pa-stat-label">Başarı Oranı</span>
                        </div>
                        <div className="pa-stat-card">
                            <div className="pa-stat-icon cyan"><FiStar /></div>
                            <span className="pa-stat-value">{stats.bestStreak || 0}</span>
                            <span className="pa-stat-label">En İyi Seri</span>
                        </div>
                        <div className="pa-stat-card">
                            <div className="pa-stat-icon orange"><FiCalendar /></div>
                            <span className="pa-stat-value">{studyStreak}</span>
                            <span className="pa-stat-label">Gün Serisi</span>
                        </div>
                    </div>

                    {/* Smart Recommendation */}
                    <div className="pa-rec glass-panel">
                        <div className="pa-rec-body">
                            <h3>{recommendation.title}</h3>
                            <p>{recommendation.text}</p>
                        </div>
                    </div>

                    {/* Progress bars */}
                    <div className="pa-progress-section glass-panel">
                        <h3><FiBarChart2 /> İlerleme Durumu</h3>
                        <div className="pa-progress-item">
                            <div className="pa-progress-head"><span>Soru Havuzu</span><span>{stats.solved}/{totalQuestions}</span></div>
                            <div className="pa-bar-track"><div className="pa-bar-fill blue" style={{ width: `${Math.min((stats.solved / totalQuestions) * 100, 100)}%` }}></div></div>
                        </div>
                        <div className="pa-progress-item">
                            <div className="pa-progress-head"><span>D/Y Öğrenilen</span><span>{dyMastered}/45</span></div>
                            <div className="pa-bar-track"><div className="pa-bar-fill green" style={{ width: `${(dyMastered / 45) * 100}%` }}></div></div>
                        </div>
                        <div className="pa-progress-item">
                            <div className="pa-progress-head"><span>Yanlış Çözümü</span><span>{mistakes.length > 0 ? `${mistakes.length} kaldı` : 'Temiz'}</span></div>
                            <div className="pa-bar-track"><div className="pa-bar-fill red" style={{ width: `${Math.min((mistakes.length / Math.max(stats.solved, 1)) * 100, 100)}%` }}></div></div>
                        </div>
                    </div>
                </div>
            )}

            {/* ============ CATEGORIES TAB ============ */}
            {activeTab === 'categories' && (
                <div className="pa-tab-content">
                    <h2 className="pa-section-title"><FiTarget /> Kategori Bazlı Analiz</h2>
                    <p className="pa-section-desc">Her kategorideki çözüm, doğruluk ve hata durumun</p>

                    <div className="pa-categories">
                        {categoryAnalysis.map((cat, i) => {
                            const dc = dangerColors[cat.dangerLevel];
                            return (
                                <motion.div key={cat.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    className="pa-cat-card" style={{ borderColor: dc.border, background: dc.bg }}>
                                    <div className="pa-cat-header">
                                        <span className="pa-cat-icon">{dc.icon}</span>
                                        <span className="pa-cat-name">{cat.name}</span>
                                    </div>
                                    <div className="pa-cat-stats">
                                        <div className="pa-cat-stat"><span className="pa-cat-stat-val">{cat.solved}</span><span className="pa-cat-stat-lbl">Çözülen</span></div>
                                        <div className="pa-cat-stat"><span className="pa-cat-stat-val" style={{ color: cat.accuracy >= 70 ? '#34d399' : cat.accuracy >= 50 ? '#fbbf24' : cat.accuracy >= 0 ? '#f87171' : '#64748b' }}>
                                            {cat.accuracy >= 0 ? `${cat.accuracy}%` : '—'}
                                        </span><span className="pa-cat-stat-lbl">Doğruluk</span></div>
                                        <div className="pa-cat-stat"><span className="pa-cat-stat-val" style={{ color: dc.text }}>{cat.wrong}</span><span className="pa-cat-stat-lbl">Yanlış</span></div>
                                        <div className="pa-cat-stat"><span className="pa-cat-stat-val">{cat.total}</span><span className="pa-cat-stat-lbl">Toplam</span></div>
                                    </div>
                                    <div className="pa-cat-bars">
                                        <div className="pa-cat-bar-group">
                                            <span className="pa-cat-bar-label">Kapsama</span>
                                            <div className="pa-bar-track"><div className="pa-bar-fill blue" style={{ width: `${cat.coverage}%` }}></div></div>
                                            <span className="pa-cat-bar-pct">{cat.coverage}%</span>
                                        </div>
                                        {cat.accuracy >= 0 && (
                                            <div className="pa-cat-bar-group">
                                                <span className="pa-cat-bar-label">Başarı</span>
                                                <div className="pa-bar-track"><div className={`pa-bar-fill ${cat.accuracy >= 70 ? 'green' : cat.accuracy >= 50 ? 'yellow' : 'red'}`} style={{ width: `${cat.accuracy}%` }}></div></div>
                                                <span className="pa-cat-bar-pct">{cat.accuracy}%</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* ============ HISTORY TAB ============ */}
            {activeTab === 'history' && (
                <div className="pa-tab-content">
                    <h2 className="pa-section-title"><FiCalendar /> Çalışma Geçmişi</h2>

                    {/* 7-day activity chart */}
                    <div className="pa-chart glass-panel">
                        <h3>Son 7 Gün</h3>
                        <div className="pa-chart-bars">
                            {last7Days.map((day, i) => (
                                <div key={i} className="pa-chart-col">
                                    <div className="pa-chart-bar-wrap">
                                        <div className="pa-chart-bar" style={{ height: `${(day.solved / maxDailySolved) * 100}%` }}>
                                            {day.solved > 0 && <span className="pa-chart-bar-val">{day.solved}</span>}
                                        </div>
                                    </div>
                                    <span className="pa-chart-day">{day.label}</span>
                                    {day.solved > 0 && <span className="pa-chart-acc">{day.accuracy}%</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Streak info */}
                    <div className="pa-streak glass-panel">
                        <div className="pa-streak-fire" style={{ fontSize: '1.25rem', color: studyStreak > 0 ? '#f59e0b' : '#64748b' }}>{studyStreak > 0 ? studyStreak : '—'}</div>
                        <div className="pa-streak-info">
                            <h3>{studyStreak > 0 ? `${studyStreak} Gün Çalışma Serisi!` : 'Seri Yok'}</h3>
                            <p>{studyStreak > 0 ? 'Seriyi kırma! Her gün en az 10 soru çöz.' : 'Bugün çalışmaya başla ve seri oluştur!'}</p>
                        </div>
                    </div>

                    {/* All-time stats */}
                    <div className="pa-alltime glass-panel">
                        <h3><FiClock /> Tüm Zamanlar</h3>
                        <div className="pa-alltime-grid">
                            <div className="pa-alltime-item"><span>Toplam Çözülen</span><strong>{stats.solved}</strong></div>
                            <div className="pa-alltime-item"><span>Doğru Cevap</span><strong>{stats.correct || 0}</strong></div>
                            <div className="pa-alltime-item"><span>Kaydedilen Yanlış</span><strong>{mistakes.length}</strong></div>
                            <div className="pa-alltime-item"><span>En İyi Seri</span><strong>{stats.bestStreak || 0}</strong></div>
                            <div className="pa-alltime-item"><span>Çalışılan Gün</span><strong>{stats.dailyLog ? Object.keys(stats.dailyLog).length : 0}</strong></div>
                            <div className="pa-alltime-item"><span>D/Y Öğrenilen</span><strong>{dyMastered}/45</strong></div>
                        </div>
                    </div>

                    {stats.lastStudy && (
                        <p className="pa-last-study">Son çalışma: {new Date(stats.lastStudy).toLocaleString('tr-TR')}</p>
                    )}
                </div>
            )}

            <button className="pa-reset-btn" onClick={() => {
                if (confirm('Tüm istatistikler sıfırlansın mı?')) {
                    localStorage.removeItem('ebeas_stats');
                    localStorage.removeItem('ebeas_mistakes');
                    setMistakes([]);
                    setStats({ solved: 0, correct: 0 });
                }
            }}><FiRefreshCw /> İstatistikleri Sıfırla</button>

            <style>{paStyles}</style>
        </div>
    );
}

const paStyles = `
    .weak-topics-view { max-width: 850px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.25rem; padding-bottom: 3rem; }

    /* Tabs */
    .pa-tabs { display: flex; gap: 0.4rem; background: rgba(255,255,255,0.03); border-radius: 12px; padding: 0.3rem; border: 1px solid rgba(255,255,255,0.06); }
    .pa-tab { flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.65rem 0.75rem; border-radius: 10px; border: none; background: transparent; color: var(--text-tertiary); font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .pa-tab:hover { color: var(--text-primary); background: rgba(255,255,255,0.04); }
    .pa-tab.active { background: rgba(59,130,246,0.15); color: #60a5fa; }
    .pa-tab-content { display: flex; flex-direction: column; gap: 1.25rem; }

    /* Readiness */
    .pa-readiness { display: flex; align-items: center; gap: 2rem; padding: 1.5rem; }
    .pa-readiness-ring { position: relative; width: 130px; height: 130px; flex-shrink: 0; }
    .pa-readiness-ring svg { width: 100%; height: 100%; }
    .pa-readiness-text { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .pa-readiness-score { font-size: 2.2rem; font-weight: 800; }
    .pa-readiness-label { font-size: 0.75rem; color: var(--text-tertiary); }
    .pa-readiness-info { flex: 1; }
    .pa-readiness-info h2 { margin: 0 0 0.5rem; font-size: 1.15rem; }
    .pa-readiness-badge { display: inline-block; padding: 0.3rem 0.8rem; border-radius: 8px; border: 1px solid; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.75rem; }
    .pa-readiness-breakdown { display: flex; flex-direction: column; gap: 0.35rem; }
    .pa-rb-item { display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-secondary); }

    /* Stats Grid */
    .pa-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; }
    .pa-stat-card { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; padding: 1rem 0.5rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; text-align: center; }
    .pa-stat-icon { font-size: 1.3rem; width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
    .pa-stat-icon.blue { color: #60a5fa; background: rgba(59,130,246,0.12); }
    .pa-stat-icon.green { color: #34d399; background: rgba(16,185,129,0.12); }
    .pa-stat-icon.red { color: #f87171; background: rgba(239,68,68,0.12); }
    .pa-stat-icon.yellow { color: #fbbf24; background: rgba(245,158,11,0.12); }
    .pa-stat-icon.cyan { color: #06b6d4; background: rgba(6,182,212,0.12); }
    .pa-stat-icon.orange { color: #fb923c; background: rgba(251,146,60,0.12); }
    .pa-stat-value { font-size: 1.4rem; font-weight: 700; color: var(--text-primary); }
    .pa-stat-label { font-size: 0.7rem; color: var(--text-tertiary); }

    /* Recommendation */
    .pa-rec { display: flex; align-items: center; gap: 1rem; padding: 1.25rem; border: 1px solid rgba(245,158,11,0.2); background: rgba(245,158,11,0.05); }
    .pa-rec-icon { font-size: 2rem; }
    .pa-rec-body h3 { margin: 0 0 0.3rem; font-size: 0.95rem; color: #fbbf24; }
    .pa-rec-body p { margin: 0; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; }

    /* Progress bars shared */
    .pa-bar-track { flex: 1; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }
    .pa-bar-fill { height: 100%; border-radius: 3px; transition: width 0.6s ease; }
    .pa-bar-fill.blue { background: linear-gradient(90deg, #3b82f6, #06b6d4); }
    .pa-bar-fill.green { background: #10b981; }
    .pa-bar-fill.red { background: #ef4444; }
    .pa-bar-fill.yellow { background: #f59e0b; }

    /* Progress section */
    .pa-progress-section { padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem; }
    .pa-progress-section h3 { margin: 0; font-size: 1rem; display: flex; align-items: center; gap: 0.4rem; }
    .pa-progress-item { display: flex; flex-direction: column; gap: 0.4rem; }
    .pa-progress-head { display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-secondary); }

    /* Categories tab */
    .pa-section-title { display: flex; align-items: center; gap: 0.5rem; margin: 0; font-size: 1.1rem; }
    .pa-section-desc { margin: -0.5rem 0 0; font-size: 0.8rem; color: var(--text-tertiary); }
    .pa-categories { display: flex; flex-direction: column; gap: 0.6rem; }
    .pa-cat-card { border: 1px solid; border-radius: 12px; padding: 1rem; transition: transform 0.15s; }
    .pa-cat-card:hover { transform: translateX(3px); }
    .pa-cat-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.6rem; }
    .pa-cat-icon { font-size: 0.9rem; }
    .pa-cat-name { font-weight: 700; font-size: 0.85rem; color: var(--text-primary); flex: 1; }
    .pa-cat-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; margin-bottom: 0.6rem; }
    .pa-cat-stat { display: flex; flex-direction: column; align-items: center; }
    .pa-cat-stat-val { font-size: 1.1rem; font-weight: 700; }
    .pa-cat-stat-lbl { font-size: 0.65rem; color: var(--text-tertiary); }
    .pa-cat-bars { display: flex; flex-direction: column; gap: 0.4rem; }
    .pa-cat-bar-group { display: flex; align-items: center; gap: 0.5rem; }
    .pa-cat-bar-label { font-size: 0.7rem; color: var(--text-tertiary); min-width: 55px; }
    .pa-cat-bar-pct { font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); min-width: 32px; text-align: right; }

    /* History chart */
    .pa-chart { padding: 1.25rem; }
    .pa-chart h3 { margin: 0 0 1rem; font-size: 1rem; }
    .pa-chart-bars { display: flex; gap: 0.5rem; height: 140px; align-items: flex-end; }
    .pa-chart-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
    .pa-chart-bar-wrap { flex: 1; width: 100%; display: flex; align-items: flex-end; justify-content: center; }
    .pa-chart-bar { width: 70%; min-height: 4px; background: linear-gradient(180deg, #3b82f6, #06b6d4); border-radius: 4px 4px 0 0; display: flex; align-items: flex-start; justify-content: center; transition: height 0.5s; position: relative; }
    .pa-chart-bar-val { font-size: 0.65rem; font-weight: 700; color: white; position: absolute; top: -16px; }
    .pa-chart-day { font-size: 0.7rem; color: var(--text-tertiary); font-weight: 600; }
    .pa-chart-acc { font-size: 0.6rem; color: var(--text-secondary); }

    /* Streak */
    .pa-streak { display: flex; align-items: center; gap: 1.25rem; padding: 1.25rem; }
    .pa-streak-fire { font-size: 2.5rem; }
    .pa-streak-info h3 { margin: 0 0 0.25rem; font-size: 1rem; }
    .pa-streak-info p { margin: 0; font-size: 0.85rem; color: var(--text-secondary); }

    /* All-time */
    .pa-alltime { padding: 1.25rem; }
    .pa-alltime h3 { margin: 0 0 0.75rem; display: flex; align-items: center; gap: 0.4rem; font-size: 1rem; }
    .pa-alltime-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; }
    .pa-alltime-item { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; padding: 0.75rem 0.5rem; background: rgba(255,255,255,0.03); border-radius: 8px; text-align: center; }
    .pa-alltime-item span { font-size: 0.7rem; color: var(--text-tertiary); }
    .pa-alltime-item strong { font-size: 1.1rem; color: var(--text-primary); }
    .pa-last-study { text-align: center; font-size: 0.8rem; color: var(--text-tertiary); margin: 0; }

    /* Reset */
    .pa-reset-btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.7rem; border-radius: 10px; border: 1px solid rgba(239,68,68,0.2); background: rgba(239,68,68,0.05); color: #f87171; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .pa-reset-btn:hover { background: rgba(239,68,68,0.15); }

    @media (max-width: 640px) {
        .pa-readiness { flex-direction: column; text-align: center; }
        .pa-readiness-ring { width: 100px; height: 100px; }
        .pa-readiness-score { font-size: 1.8rem; }
        .pa-stats-grid { grid-template-columns: repeat(2, 1fr); }
        .pa-alltime-grid { grid-template-columns: repeat(2, 1fr); }
        .pa-cat-stats { grid-template-columns: repeat(2, 1fr); }
        .pa-tab { font-size: 0.75rem; padding: 0.5rem 0.25rem; }
    }
`;
