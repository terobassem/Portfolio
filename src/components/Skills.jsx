import React, { useState } from 'react';
import { Layout, Server, Database, Layers, Cpu, Users, Check } from './Icons';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map(c => c.name)];

  const displayedCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.name === selectedCategory);

  const getCategoryIcon = (name) => {
    switch (name) {
      case 'Front-End': return <Layout size={18} color="#06b6d4" />;
      case 'Back-End & APIs': return <Server size={18} color="#3b82f6" />;
      case 'Databases & Data Engineering': return <Database size={18} color="#10b981" />;
      case 'CS Fundamentals & Infrastructure': return <Cpu size={18} color="#818cf8" />;
      case 'Professional Soft Skills': return <Users size={18} color="#ec4899" />;
      default: return <Layout size={18} color="#06b6d4" />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill">Technical Stack & Expertise</span>
          <h2 className="section-title">Comprehensive Skills Matrix</h2>
          <p className="section-subtitle">
            Core technologies, developer toolkits, enterprise frameworks, and analytical capabilities.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cat-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {displayedCategories.map((category, idx) => (
            <div key={idx} className="card-glass skill-card" style={{ padding: '24px' }}>
              <div>
                {/* Category Header */}
                <div className="skill-card-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {getCategoryIcon(category.name)}
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                      {category.name}
                    </h3>
                  </div>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-cyan)', background: 'rgba(6,182,212,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skill Chips / Badges Grid */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        borderRadius: '10px',
                        fontSize: '13px',
                        fontFamily: 'var(--font-sans)',
                        transition: 'all 0.2s ease',
                        background: skill.highlighted
                          ? 'rgba(6, 182, 212, 0.08)'
                          : 'rgba(255, 255, 255, 0.03)',
                        color: skill.highlighted ? '#ffffff' : 'var(--text-gray)',
                        border: skill.highlighted
                          ? '1px solid rgba(6, 182, 212, 0.35)'
                          : '1px solid var(--border-subtle)',
                        boxShadow: skill.highlighted ? '0 2px 8px rgba(6,182,212,0.1)' : 'none',
                        fontWeight: skill.highlighted ? 600 : 400
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: skill.highlighted ? 'var(--color-cyan)' : '#64748b',
                          flexShrink: 0
                        }}
                      ></span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
