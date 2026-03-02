import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiBookOpen, FiTarget, FiZap, FiArrowLeft } from 'react-icons/fi';
import { konuAnlatimi } from '../data/konuAnlatimi';

const bolumColors = {
    "BES Mevzuatı": "#3b82f6",
    "Finans ve Yatırım": "#06b6d4",
    "Satış ve Pazarlama": "#f59e0b",
    "Katılım Esaslı BES": "#10b981",
    "İşletme ve İktisat": "#ef4444",
    "Sigortacılık": "#ec4899",
};

export default function KonuAnlatimiView() {
    const [selectedLesson, setSelectedLesson] = useState(null);

    // Group by bolum
    const grouped = {};
    konuAnlatimi.forEach(k => { if (!grouped[k.bolum]) grouped[k.bolum] = []; grouped[k.bolum].push(k); });

    if (selectedLesson) {
        const lesson = selectedLesson;
        const color = bolumColors[lesson.bolum] || '#60a5fa';
        return (
            <div className="konu-view">
                <button className="back-btn" onClick={() => setSelectedLesson(null)}><FiArrowLeft /> Konulara Dön</button>

                <header className="konu-lesson-header" style={{ borderColor: color }}>
                    <span className="konu-badge" style={{ background: `${color}20`, color, borderColor: `${color}50` }}>{lesson.bolum} • {lesson.agirlik}</span>
                    <h1>{lesson.baslik}</h1>
                    <p className="konu-ozet">{lesson.ozet}</p>
                </header>

                {/* Content sections */}
                {lesson.icerik.map((section, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                        className={`konu-section glass-panel ${section.onemli ? 'important' : ''}`}>
                        <h3>{section.onemli && <FiTarget className="important-icon" />} {section.altBaslik}</h3>
                        <p dangerouslySetInnerHTML={{ __html: section.metin.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </motion.div>
                ))}

                {/* Comparison table */}
                {lesson.karsilastirma && (
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="konu-compare glass-panel">
                        <h3><FiZap /> {lesson.karsilastirma.baslik}</h3>
                        <div className="table-scroll">
                            <table>
                                <thead><tr>{lesson.karsilastirma.sutunlar.map((s, i) => <th key={i}>{s}</th>)}</tr></thead>
                                <tbody>{lesson.karsilastirma.satirlar.map((row, ri) => (
                                    <tr key={ri}>{row.map((cell, ci) => <td key={ci} className={ci === 0 ? 'cell-label' : ''}>{cell}</td>)}</tr>
                                ))}</tbody>
                            </table>
                        </div>
                    </motion.div>
                )}

                {/* Worked example */}
                {lesson.hesaplamaOrnegi && (
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="konu-calc glass-panel">
                        <h3>{lesson.hesaplamaOrnegi.baslik}</h3>
                        <ol className="calc-steps">
                            {lesson.hesaplamaOrnegi.adimlar.map((step, i) => (
                                <li key={i} className={i === lesson.hesaplamaOrnegi.adimlar.length - 1 ? 'result-step' : ''}>{step}</li>
                            ))}
                        </ol>
                    </motion.div>
                )}

                <style>{konuStyles}</style>
            </div>
        );
    }

    return (
        <div className="konu-view">
            <header className="page-header">
                <div>
                    <h1><FiBookOpen /> Konu Anlatımı</h1>
                    <p>Tüm sınav konuları karşılaştırma tabloları ve hesaplama örnekleriyle</p>
                </div>
            </header>

            {Object.entries(grouped).map(([bolum, lessons]) => {
                const color = bolumColors[bolum] || '#60a5fa';
                return (
                    <div key={bolum} className="konu-bolum">
                        <div className="konu-bolum-header" style={{ borderLeftColor: color }}>
                            <h2>{bolum}</h2>
                            <span className="konu-bolum-agirlik" style={{ color }}>{lessons[0]?.agirlik}</span>
                        </div>
                        <div className="konu-cards">
                            {lessons.map((lesson, i) => (
                                <motion.button key={lesson.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                                    className="konu-card glass-panel" onClick={() => setSelectedLesson(lesson)} style={{ borderTopColor: color }}>
                                    <div className="konu-card-top">
                                        <span className="konu-card-emoji">{lesson.emoji}</span>
                                        <h3>{lesson.baslik}</h3>
                                    </div>
                                    <p className="konu-card-desc">{lesson.ozet}</p>
                                    <div className="konu-card-tags">
                                        <span className="konu-tag">{lesson.icerik.length} konu</span>
                                        {lesson.karsilastirma && <span className="konu-tag blue">Tablo</span>}
                                        {lesson.hesaplamaOrnegi && <span className="konu-tag green">Hesaplama</span>}
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                );
            })}
            <style>{konuStyles}</style>
        </div>
    );
}

const konuStyles = `
    .konu-view { max-width: 850px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; padding-bottom: 3rem; }

    .back-btn { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); background: transparent; color: var(--text-secondary); font-size: 0.85rem; cursor: pointer; width: fit-content; }
    .back-btn:hover { background: rgba(255,255,255,0.05); }

    .konu-lesson-header { border-left: 4px solid; padding: 1rem 1.5rem; background: rgba(255,255,255,0.02); border-radius: 0 12px 12px 0; }
    .konu-badge { display: inline-block; padding: 0.3rem 0.8rem; border-radius: 8px; font-size: 0.75rem; font-weight: 700; border: 1px solid; margin-bottom: 0.5rem; }
    .konu-lesson-header h1 { margin: 0.5rem 0 0; font-size: 1.4rem; }
    .konu-ozet { margin: 0.5rem 0 0; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5; }

    .konu-section { padding: 1.25rem 1.5rem; border-radius: 12px; }
    .konu-section.important { border-left: 3px solid #f59e0b; background: rgba(245,158,11,0.04); }
    .konu-section h3 { margin: 0 0 0.75rem; font-size: 1.05rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.4rem; }
    .important-icon { color: #f59e0b; flex-shrink: 0; }
    .konu-section p { margin: 0; font-size: 0.95rem; line-height: 1.8; color: var(--text-secondary); }
    .konu-section p strong { color: var(--text-primary); font-weight: 700; }

    .konu-compare { padding: 1.25rem 1.5rem; border-radius: 12px; overflow: hidden; }
    .konu-compare h3 { margin: 0 0 1rem; font-size: 1.05rem; display: flex; align-items: center; gap: 0.4rem; color: #60a5fa; }
    .table-scroll { overflow-x: auto; margin: 0 -0.5rem; padding: 0 0.5rem; }
    .konu-compare table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
    .konu-compare th { padding: 0.75rem 0.85rem; background: rgba(59,130,246,0.1); color: #60a5fa; font-weight: 700; text-align: left; border-bottom: 2px solid rgba(59,130,246,0.2); white-space: nowrap; }
    .konu-compare td { padding: 0.65rem 0.85rem; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); }
    .konu-compare tr:hover td { background: rgba(255,255,255,0.02); }
    .cell-label { font-weight: 600; color: var(--text-primary); }

    .konu-calc { padding: 1.5rem; border: 1px solid rgba(16,185,129,0.2); background: rgba(16,185,129,0.04); border-radius: 12px; }
    .konu-calc h3 { margin: 0 0 1rem; color: #34d399; font-size: 1.05rem; }
    .calc-steps { margin: 0; padding-left: 1.5rem; counter-reset: calc-step; list-style: none; }
    .calc-steps li { position: relative; padding: 0.5rem 0 0.5rem 0.5rem; font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); border-left: 2px solid rgba(16,185,129,0.15); margin-left: 0.5rem; }
    .calc-steps li:before { content: counter(calc-step); counter-increment: calc-step; position: absolute; left: -1.1rem; top: 0.45rem; width: 20px; height: 20px; border-radius: 50%; background: rgba(16,185,129,0.15); color: #34d399; font-size: 0.7rem; font-weight: 700; display: flex; align-items: center; justify-content: center; }
    .calc-steps li.result-step { background: rgba(16,185,129,0.1); border-radius: 8px; font-weight: 700; color: #34d399; border-left-color: #34d399; }

    .konu-bolum { display: flex; flex-direction: column; gap: 0.75rem; }
    .konu-bolum-header { display: flex; align-items: center; justify-content: space-between; border-left: 4px solid; padding-left: 0.75rem; }
    .konu-bolum-header h2 { margin: 0; font-size: 1.1rem; }
    .konu-bolum-agirlik { font-weight: 700; font-size: 0.9rem; }

    .konu-cards { display: flex; flex-direction: column; gap: 0.5rem; }
    .konu-card { width: 100%; text-align: left; border: 1px solid rgba(255,255,255,0.08); border-top: 3px solid; padding: 1rem 1.25rem; border-radius: 12px; cursor: pointer; transition: all 0.2s; background: rgba(255,255,255,0.02); }
    .konu-card:hover { background: rgba(255,255,255,0.05); transform: translateX(4px); }
    .konu-card-top { display: flex; align-items: center; gap: 0.75rem; }
    .konu-card-emoji { font-size: 1.5rem; }
    .konu-card-top h3 { margin: 0; font-size: 1rem; color: var(--text-primary); }
    .konu-card-desc { margin: 0.5rem 0 0; font-size: 0.85rem; color: var(--text-tertiary); line-height: 1.5; }
    .konu-card-tags { display: flex; gap: 0.4rem; margin-top: 0.75rem; flex-wrap: wrap; }
    .konu-tag { padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.7rem; font-weight: 600; background: rgba(255,255,255,0.05); color: var(--text-tertiary); }
    .konu-tag.blue { background: rgba(59,130,246,0.1); color: #60a5fa; }
    .konu-tag.green { background: rgba(16,185,129,0.1); color: #34d399; }

    @media (max-width: 640px) {
        .konu-lesson-header h1 { font-size: 1.15rem; }
        .konu-compare th, .konu-compare td { padding: 0.5rem 0.6rem; font-size: 0.78rem; }
    }
`;
