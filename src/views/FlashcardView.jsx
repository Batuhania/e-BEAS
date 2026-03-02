import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiRotateCw, FiChevronLeft, FiChevronRight, FiShuffle, FiCheck, FiX, FiAward, FiFilter } from 'react-icons/fi';
import { flashcardData } from '../data/flashcardData';

const allCategories = [...new Set(flashcardData.map(c => c.kategori))];

const importanceBg = {
    kritik: { bg: 'rgba(239, 68, 68, 0.15)', border: 'rgba(239, 68, 68, 0.3)', text: '#f87171', label: 'KRİTİK' },
    yuksek: { bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.3)', text: '#fbbf24', label: 'YÜKSEK' },
    orta: { bg: 'rgba(59, 130, 246, 0.15)', border: 'rgba(59, 130, 246, 0.3)', text: '#60a5fa', label: 'ORTA' },
};

export default function FlashcardView() {
    const [mastery, setMastery] = useState(() => {
        try { return JSON.parse(localStorage.getItem('ebeas_fc_mastery') || '{}'); } catch { return {}; }
    });
    const [sessionCards, setSessionCards] = useState([...flashcardData]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [knownCount, setKnownCount] = useState(0);
    const [unknownCount, setUnknownCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [filterCat, setFilterCat] = useState('all');
    const [filterOnem, setFilterOnem] = useState('all');
    const [onlyUnknown, setOnlyUnknown] = useState(false);

    const masteredCount = Object.values(mastery).filter(m => m === 'known').length;

    const applyFilters = useCallback((cat, onem, unknownOnly = false) => {
        let filtered = [...flashcardData];
        if (cat !== 'all') filtered = filtered.filter(c => c.kategori === cat);
        if (onem !== 'all' && onem !== 'shuffle') filtered = filtered.filter(c => c.onem === onem);
        if (unknownOnly) filtered = filtered.filter(c => mastery[c.on] !== 'known');
        if (filtered.length === 0) filtered = [...flashcardData];
        if (onem === 'shuffle') filtered = filtered.sort(() => Math.random() - 0.5);
        setSessionCards(filtered);
        setCurrentIndex(0);
        setIsFlipped(false);
        setKnownCount(0);
        setUnknownCount(0);
        setIsComplete(false);
    }, [mastery]);

    const shuffle = () => {
        let filtered = [...flashcardData];
        if (filterCat !== 'all') filtered = filtered.filter(c => c.kategori === filterCat);
        if (onlyUnknown) filtered = filtered.filter(c => mastery[c.on] !== 'known');
        const shuffled = filtered.sort(() => Math.random() - 0.5);
        setSessionCards(shuffled.length > 0 ? shuffled : [...flashcardData]);
        setCurrentIndex(0);
        setIsFlipped(false);
        setKnownCount(0);
        setUnknownCount(0);
        setIsComplete(false);
    };

    const currentCard = sessionCards[currentIndex];
    const handleFlip = () => setIsFlipped(!isFlipped);

    const saveMastery = (cardId, status) => {
        const updated = { ...mastery, [cardId]: status };
        setMastery(updated);
        localStorage.setItem('ebeas_fc_mastery', JSON.stringify(updated));
    };

    const handleKnown = () => {
        saveMastery(currentCard.on, 'known');
        setKnownCount(p => p + 1);
        goNext();
    };
    const handleUnknown = () => {
        saveMastery(currentCard.on, 'review');
        setUnknownCount(p => p + 1);
        setSessionCards(prev => [...prev, prev[currentIndex]]);
        goNext();
    };

    const goNext = () => {
        setIsFlipped(false);
        if (currentIndex + 1 >= sessionCards.length) setIsComplete(true);
        else setCurrentIndex(p => p + 1);
    };
    const goPrev = () => { if (currentIndex > 0) { setIsFlipped(false); setCurrentIndex(p => p - 1); } };

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); handleFlip(); }
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
            if (isFlipped && e.key === '1') handleKnown();
            if (isFlipped && e.key === '2') handleUnknown();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isFlipped, currentIndex, sessionCards.length]);

    if (isComplete) {
        const total = knownCount + unknownCount;
        const pct = total > 0 ? Math.round((knownCount / total) * 100) : 0;
        const remaining = flashcardData.length - masteredCount;
        return (
            <div className="flashcard-view">
                <div className="fc-complete glass-panel">
                    <FiAward className="fc-complete-icon" />
                    <h2>Tur Bitti</h2>
                    <div className="fc-mastery-summary">Toplam Öğrenilen: <strong>{masteredCount}/{flashcardData.length}</strong> | Kalan: <strong>{remaining}</strong></div>
                    <div className="fc-complete-stats">
                        <div className="fc-stat green"><span>{knownCount}</span><small>Biliyorum</small></div>
                        <div className="fc-stat red"><span>{unknownCount}</span><small>Tekrar Et</small></div>
                        <div className="fc-stat blue"><span>{pct}%</span><small>Başarı</small></div>
                    </div>
                    <div className="fc-complete-actions">
                        <button className="btn btn-primary" onClick={shuffle}><FiShuffle /> Karışık Tekrar</button>
                        <button className="btn btn-outline" onClick={() => { setFilterOnem('kritik'); applyFilters(filterCat, 'kritik'); }}>Sadece Kritik</button>
                    </div>
                </div>
                <style>{flashcardStyles}</style>
            </div>
        );
    }

    if (!currentCard) return <div>Kart bulunamadı.</div>;
    const imp = importanceBg[currentCard.onem] || importanceBg.orta;

    return (
        <div className="flashcard-view">
            <header className="page-header">
                <div>
                    <h1>Bilgi Kartları</h1>
                    <p>Kavramı oku, cevabını düşün, çevir ve kontrol et!</p>
                </div>
                <div className="fc-mastery-badge">{masteredCount}/{flashcardData.length}</div>
            </header>

            {/* Category filters */}
            <div className="fc-filters">
                <button className={`fc-filter-btn ${filterCat === 'all' ? 'active' : ''}`} onClick={() => { setFilterCat('all'); applyFilters('all', filterOnem); }}>Tümü ({flashcardData.length})</button>
                {allCategories.map(cat => {
                    const count = flashcardData.filter(c => c.kategori === cat).length;
                    return (
                        <button key={cat} className={`fc-filter-btn ${filterCat === cat ? 'active' : ''}`} onClick={() => { setFilterCat(cat); applyFilters(cat, filterOnem); }}>
                            {cat} ({count})
                        </button>
                    );
                })}
            </div>

            {/* Importance + mastery filters */}
            <div className="fc-filters fc-imp-filters">
                <button className={`fc-filter-btn ${filterOnem === 'all' ? 'active' : ''}`} onClick={() => { setFilterOnem('all'); applyFilters(filterCat, 'all', onlyUnknown); }}>Tüm Seviye</button>
                <button className={`fc-filter-btn kritik ${filterOnem === 'kritik' ? 'active' : ''}`} onClick={() => { setFilterOnem('kritik'); applyFilters(filterCat, 'kritik', onlyUnknown); }}>Kritik</button>
                <button className={`fc-filter-btn yuksek ${filterOnem === 'yuksek' ? 'active' : ''}`} onClick={() => { setFilterOnem('yuksek'); applyFilters(filterCat, 'yuksek', onlyUnknown); }}>Yüksek</button>
                <button className={`fc-filter-btn ${filterOnem === 'shuffle' ? 'active' : ''}`} onClick={() => { setFilterOnem('shuffle'); shuffle(); }}><FiShuffle /> Karışık</button>
                <button className={`fc-filter-btn ${onlyUnknown ? 'active' : ''}`} onClick={() => { const next = !onlyUnknown; setOnlyUnknown(next); applyFilters(filterCat, filterOnem, next); }}>
                    {onlyUnknown ? 'Bilinmeyenler' : 'Bilinmeyenler'} ({flashcardData.length - masteredCount})
                </button>
            </div>

            {/* Progress */}
            <div className="fc-progress">
                <div className="fc-progress-track"><div className="fc-progress-fill" style={{ width: `${((currentIndex + 1) / sessionCards.length) * 100}%` }}></div></div>
                <div className="fc-progress-info">
                    <span>{currentIndex + 1} / {sessionCards.length}</span>
                    <span className="fc-score">{knownCount} bilinen · {unknownCount} tekrar</span>
                </div>
            </div>

            {/* Card */}
            <div className="fc-card-wrapper" onClick={handleFlip}>
                <AnimatePresence mode="wait">
                    <motion.div key={`${currentIndex}-${isFlipped}`} initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} exit={{ rotateY: -90, opacity: 0 }} transition={{ duration: 0.3 }}
                        className={`fc-card glass-panel ${isFlipped ? 'flipped' : ''}`} style={{ borderColor: imp.border }}>
                        {!isFlipped ? (
                            <div className="fc-front">
                                <div className="fc-card-badge" style={{ background: imp.bg, color: imp.text, borderColor: imp.border }}>{imp.label}</div>
                                <span className="fc-card-category">{currentCard.kategori}</span>
                                <h3 className="fc-question">{currentCard.on}</h3>
                                <p className="fc-tap-hint">Cevabı görmek için tıkla</p>
                            </div>
                        ) : (
                            <div className="fc-back">
                                <div className="fc-card-badge" style={{ background: imp.bg, color: imp.text, borderColor: imp.border }}>{currentCard.kategori}</div>
                                <h4 className="fc-back-q">{currentCard.on}</h4>
                                <div className="fc-answer-box">
                                    <p className="fc-answer-text">{currentCard.arka}</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="fc-actions">
                <button className="fc-action-btn prev" onClick={goPrev} disabled={currentIndex === 0}><FiChevronLeft /></button>
                {isFlipped ? (<>
                    <button className="fc-action-btn unknown" onClick={handleUnknown}><FiX /> <span>Tekrar Et</span></button>
                    <button className="fc-action-btn known" onClick={handleKnown}><FiCheck /> <span>Biliyorum</span></button>
                </>) : (
                    <button className="fc-action-btn flip" onClick={handleFlip}><FiRotateCw /> <span>Çevir</span></button>
                )}
                <button className="fc-action-btn next" onClick={goNext} disabled={currentIndex >= sessionCards.length - 1}><FiChevronRight /></button>
            </div>

            <p className="fc-shortcuts">Space = Çevir | ← → = Gezin | 1 = Biliyorum | 2 = Tekrar Et</p>
            <style>{flashcardStyles}</style>
        </div>
    );
}

const flashcardStyles = `
    .flashcard-view { max-width: 750px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.25rem; padding-bottom: 3rem; }
    .fc-filters { display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .fc-imp-filters { margin-top: -0.5rem; }
    .fc-filter-btn { padding: 0.4rem 0.85rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); background: transparent; color: var(--text-secondary); font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 0.35rem; }
    .fc-filter-btn.active { background: rgba(59, 130, 246, 0.15); border-color: rgba(59, 130, 246, 0.3); color: #60a5fa; }
    .fc-filter-btn.kritik.active { background: rgba(239,68,68,0.15); border-color: rgba(239,68,68,0.3); color: #f87171; }
    .fc-filter-btn.yuksek.active { background: rgba(245,158,11,0.15); border-color: rgba(245,158,11,0.3); color: #fbbf24; }
    .fc-progress { display: flex; flex-direction: column; gap: 0.4rem; }
    .fc-progress-track { height: 5px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }
    .fc-progress-fill { height: 100%; background: linear-gradient(90deg, #3b82f6, #06b6d4); border-radius: 3px; transition: width 0.4s; }
    .fc-progress-info { display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-tertiary); }
    .fc-score { display: flex; gap: 0.75rem; }
    .fc-card-wrapper { perspective: 1000px; cursor: pointer; min-height: 260px; }
    .fc-card { padding: 2rem; border-radius: 16px; border: 1px solid; min-height: 260px; display: flex; flex-direction: column; position: relative; user-select: none; }
    .fc-front { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 1.25rem; flex: 1; }
    .fc-card-badge { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.35rem 0.85rem; border-radius: 8px; font-size: 0.8rem; font-weight: 700; border: 1px solid; }
    .fc-card-category { font-size: 0.75rem; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.04em; }
    .fc-question { font-size: 1.3rem; line-height: 1.6; font-weight: 600; color: var(--text-primary); max-width: 600px; }
    .fc-tap-hint { font-size: 0.8rem; color: var(--text-tertiary); margin-top: auto; animation: pulse-hint 2s ease-in-out infinite; }
    @keyframes pulse-hint { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
    .fc-back { display: flex; flex-direction: column; gap: 1rem; }
    .fc-back-q { color: var(--text-tertiary); font-size: 0.9rem; font-weight: 500; margin: 0; line-height: 1.4; }
    .fc-answer-box { background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px; padding: 1.25rem; }
    .fc-answer-text { color: var(--text-primary); font-size: 1.1rem; font-weight: 600; margin: 0; line-height: 1.7; }
    .fc-actions { display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap; }
    .fc-action-btn { display: flex; align-items: center; gap: 0.4rem; padding: 0.65rem 1.25rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: var(--text-secondary); font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .fc-action-btn:hover { background: rgba(255,255,255,0.08); }
    .fc-action-btn:disabled { opacity: 0.3; cursor: not-allowed; }
    .fc-action-btn.known { color: #34d399; border-color: rgba(16,185,129,0.3); }
    .fc-action-btn.known:hover { background: rgba(16,185,129,0.1); }
    .fc-action-btn.unknown { color: #f87171; border-color: rgba(239,68,68,0.3); }
    .fc-action-btn.unknown:hover { background: rgba(239,68,68,0.1); }
    .fc-action-btn.flip { color: #60a5fa; border-color: rgba(59,130,246,0.3); }
    .fc-action-btn.flip:hover { background: rgba(59,130,246,0.1); }
    .fc-shortcuts { text-align: center; font-size: 0.7rem; color: var(--text-tertiary); margin-top: 0.5rem; }
    .fc-mastery-badge { display: flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.8rem; border-radius: 8px; background: rgba(16,185,129,0.12); color: #34d399; font-weight: 700; font-size: 0.9rem; white-space: nowrap; }
    .fc-mastery-summary { font-size: 0.9rem; color: var(--text-secondary); }
    .fc-mastery-summary strong { color: var(--text-primary); }
    .fc-complete { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 3rem 2rem; gap: 1.5rem; }
    .fc-complete-icon { font-size: 4rem; color: #fbbf24; }
    .fc-complete h2 { margin: 0; }
    .fc-complete-stats { display: flex; gap: 2rem; }
    .fc-stat { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; }
    .fc-stat span { font-size: 2rem; font-weight: 700; }
    .fc-stat small { font-size: 0.8rem; color: var(--text-secondary); }
    .fc-stat.green span { color: #34d399; }
    .fc-stat.red span { color: #f87171; }
    .fc-stat.blue span { color: #60a5fa; }
    .fc-complete-actions { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
    @media (max-width: 640px) {
        .fc-card { padding: 1.5rem; min-height: 220px; }
        .fc-question { font-size: 1.1rem; }
        .fc-actions { gap: 0.5rem; }
        .fc-action-btn { padding: 0.5rem 1rem; font-size: 0.8rem; }
        .fc-action-btn span { display: none; }
        .fc-shortcuts { display: none; }
    }
`;
