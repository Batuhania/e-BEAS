import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiAward } from 'react-icons/fi';
import { studyGuideData } from '../data/studyGuide';

export default function StudyGuideView() {
    const [activeCategory, setActiveCategory] = useState(studyGuideData[0].id);
    const [expandedSection, setExpandedSection] = useState(0);

    const currentCategory = studyGuideData.find(c => c.id === activeCategory);

    return (
        <div className="study-guide">
            <header className="page-header">
                <div>
                    <h1>Çalışma Kılavuzu</h1>
                    <p>Sınav konularının kritik noktalarına göre hazırlanmış özet içerik.</p>
                </div>
                <div className="badge-glass">
                    <FiAward className="icon-success" /> Tam Kapsamlı
                </div>
            </header>

            {/* Category Tabs */}
            <div className="category-tabs-wrapper">
                <div className="category-tabs">
                    {studyGuideData.map((cat) => (
                        <button
                            key={cat.id}
                            className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => {
                                setActiveCategory(cat.id);
                                setExpandedSection(0);
                            }}
                        >
                            <span className="tab-icon">{cat.icon}</span>
                            <span className="tab-title">{cat.title}</span>
                            <span className="tab-weight">{cat.weight}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="content-area"
            >
                <div className="glass-panel cat-header">
                    <h2>
                        <span className="cat-icon">{currentCategory.icon}</span>
                        {currentCategory.title}
                    </h2>
                    <p>{currentCategory.description}</p>
                </div>

                <div className="accordion-list">
                    {currentCategory.sections.map((section, idx) => {
                        const isExpanded = expandedSection === idx;
                        return (
                            <div key={idx} className={`accordion-item glass-card ${isExpanded ? 'expanded' : ''}`}>
                                <button
                                    className="accordion-header"
                                    onClick={() => setExpandedSection(isExpanded ? -1 : idx)}
                                >
                                    <h3>{section.subtitle}</h3>
                                    <div className="accordion-icon">
                                        {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="accordion-content-wrapper"
                                        >
                                            <div className="accordion-content">
                                                <ul>
                                                    {section.items.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            <style>{`
        .study-guide {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding-bottom: 2rem;
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

        .badge-glass {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 999px;
          color: var(--success);
          font-weight: 600;
          font-size: 0.875rem;
          backdrop-filter: blur(8px);
        }

        .icon-success {
          font-size: 1.25rem;
        }

        .category-tabs-wrapper {
          overflow-x: auto;
          margin: 0 -1rem;
          padding: 0 1rem 1rem 1rem;
        }

        .category-tabs {
          display: flex;
          gap: 1rem;
          min-width: max-content;
        }

        .tab-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: var(--text-secondary);
          min-width: 140px;
        }

        .tab-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-2px);
        }

        .tab-btn.active {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05));
          border-color: rgba(59, 130, 246, 0.4);
          color: var(--text-primary);
          box-shadow: 0 8px 24px -4px rgba(59, 130, 246, 0.2);
        }

        .tab-icon {
          font-size: 2rem;
        }

        .tab-title {
          font-size: 0.875rem;
          font-weight: 600;
          text-align: center;
          max-width: 120px;
        }

        .tab-weight {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          backdrop-filter: blur(4px);
        }

        .tab-btn.active .tab-weight {
          background: var(--accent-primary);
          color: white;
        }

        .cat-header {
          padding: 2rem;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
        }

        .cat-header h2 {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          color: var(--accent-secondary);
        }

        .cat-icon {
          font-size: 2.5rem;
        }

        .accordion-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .accordion-item {
          overflow: hidden;
        }

        .accordion-item.expanded {
          border-color: rgba(96, 165, 250, 0.3);
          box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.5);
        }

        .accordion-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          text-align: left;
        }

        .accordion-header h3 {
          font-size: 1.125rem;
          margin: 0;
          font-weight: 600;
        }

        .accordion-icon {
          font-size: 1.5rem;
          color: var(--text-secondary);
          display: flex;
          transition: transform 0.3s ease;
        }

        .expanded .accordion-icon {
          color: var(--accent-secondary);
        }

        .accordion-content-wrapper {
          overflow: hidden;
        }

        .accordion-content {
          padding: 0 1.5rem 1.5rem 1.5rem;
        }

        .accordion-content ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .accordion-content li {
          position: relative;
          padding-left: 1.5rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .accordion-content li::before {
          content: '•';
          position: absolute;
          left: 0;
          top: 0;
          color: var(--accent-primary);
          font-size: 1.5rem;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .category-tabs-wrapper {
            padding-bottom: 0.5rem;
          }
          .cat-header {
            padding: 1.5rem;
          }
          .cat-header h2 {
            font-size: 1.5rem;
          }
          .accordion-header {
            padding: 1.25rem;
          }
          .accordion-header h3 {
            font-size: 1rem;
          }
        }
      `}</style>
        </div>
    );
}
