import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiBookmark, FiAlertTriangle, FiClock, FiDollarSign, FiPieChart, FiKey, FiShield } from 'react-icons/fi';
import { kritikBilgiler } from '../data/kritikBilgiler';

const sectionIcons = {
  "KRİTİK SÜRELER": <FiClock />,
  "DEVLET KATKISI HAK EDİŞ ORANLARI": <FiDollarSign />,
  "İŞVEREN HAK KAZANMA ORANLARI": <FiBookmark />,
  "FON TÜRLERİ ŞİFRELER": <FiPieChart />,
  "ALTIN KURALLAR": <FiKey />,
  "SINAV TUZAKLARI": <FiShield />,
};

const renkMap = {
  blue: { bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.25)', dot: '#3b82f6' },
  red: { bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.25)', dot: '#ef4444' },
  green: { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)', dot: '#10b981' },
  yellow: { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)', dot: '#f59e0b' },
  teal: { bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.25)', dot: '#06b6d4' },
};

export default function CheatSheetView() {
  const [search, setSearch] = useState('');
  const [openSection, setOpenSection] = useState(null);

  const filtered = kritikBilgiler.map(section => ({
    ...section,
    kartlar: section.kartlar.filter(k =>
      !search ||
      k.anahtar.toLowerCase().includes(search.toLowerCase()) ||
      k.deger.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(s => s.kartlar.length > 0);

  return (
    <div className="cheat-view">
      <header className="page-header">
        <div>
          <h1>Kritik Bilgiler</h1>
          <p>Sınavda en çok sorulan rakamlar, süreler ve ezber kuralları. Hızlı tekrar için kullan!</p>
        </div>
      </header>

      <div className="search-bar glass-panel">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Ara... (örn: 7 yıl, katılım fonu, maluliyet)"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="cheat-sections">
        {filtered.map((section, si) => (
          <motion.div
            key={si}
            className="cheat-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: si * 0.05 }}
          >
            <button
              className={`section-header glass-panel ${openSection === si ? 'open' : ''}`}
              onClick={() => setOpenSection(openSection === si ? null : si)}
            >
              <span className="section-icon">{sectionIcons[section.baslik] || <FiBookmark />}</span>
              <span className="section-title">{section.baslik}</span>
              <span className="section-count">{section.kartlar.length} kart</span>
              <span className={`chevron ${openSection === si ? 'open' : ''}`}>▾</span>
            </button>

            {(openSection === si || search) && (
              <motion.div
                className="cards-grid"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                {section.kartlar.map((kart, ki) => {
                  const r = renkMap[kart.renk] || renkMap.blue;
                  return (
                    <div key={ki} className="cheat-card" style={{ background: r.bg, borderColor: r.border }}>
                      <div className="card-dot" style={{ background: r.dot }}></div>
                      <div className="card-content">
                        <div className="card-key">{kart.anahtar}</div>
                        <div className="card-value">{kart.deger}</div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <style>{`
        .cheat-view {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 950px;
          margin: 0 auto;
          padding-bottom: 3rem;
        }

        .page-header h1 {
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
        }

        .search-icon { color: var(--text-tertiary); font-size: 1.25rem; flex-shrink: 0; }

        .search-bar input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 1rem;
          font-family: inherit;
        }

        .search-bar input::placeholder { color: var(--text-tertiary); }

        .cheat-sections { display: flex; flex-direction: column; gap: 0.75rem; }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          padding: 1.25rem;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
          border: 1px solid var(--glass-border);
        }

        .section-header:hover {
          border-color: rgba(59,130,246,0.3);
          background: rgba(59,130,246,0.05);
        }

        .section-header.open {
          border-color: rgba(59,130,246,0.4);
          background: rgba(59,130,246,0.08);
          border-radius: 16px 16px 0 0;
        }

        .section-icon { font-size: 1.4rem; color: var(--accent-secondary); }
        .section-title { font-weight: 700; font-size: 1.05rem; color: var(--text-primary); flex: 1; }
        .section-count {
          font-size: 0.8rem;
          background: rgba(255,255,255,0.08);
          padding: 0.2rem 0.75rem;
          border-radius: 999px;
          color: var(--text-tertiary);
        }

        .chevron {
          font-size: 1.25rem;
          color: var(--text-tertiary);
          transition: transform 0.2s;
        }
        .chevron.open { transform: rotate(180deg); }

        .cards-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0.5rem;
          background: rgba(15, 23, 42, 0.4);
          border-radius: 0 0 16px 16px;
          border: 1px solid var(--glass-border);
          border-top: none;
          overflow: hidden;
        }

        .cheat-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem 1.25rem;
          border-radius: 10px;
          border: 1px solid;
          transition: transform 0.15s;
        }

        .cheat-card:hover { transform: translateX(4px); }

        .card-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-top: 0.4rem;
          flex-shrink: 0;
        }

        .card-content { flex: 1; }

        .card-key {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .card-value {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 640px) {
          .section-header { padding: 1rem; }
          .cheat-card { padding: 0.875rem 1rem; }
        }
      `}</style>
    </div>
  );
}
