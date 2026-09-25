import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight } from './Icons';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredExperiences = activeFilter === 'All'
    ? experiences
    : experiences.filter(e => e.id !== 'orange');

  return (
    <section id="experience" className="exp-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill">Career Journey</span>
          <h2 className="section-title">Work & Practical Experience</h2>
          <p className="section-subtitle">
            Proven track record in data engineering, full-stack web development, and client communications.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Filter Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '12px', border: '1px solid var(--border-subtle)', display: 'flex', gap: '4px' }}>
            <button
              onClick={() => setActiveFilter('All')}
              className={`cat-tab-btn ${activeFilter === 'All' ? 'active' : ''}`}
            >
              All Experiences ({experiences.length})
            </button>
            <button
              onClick={() => setActiveFilter('Tech')}
              className={`cat-tab-btn ${activeFilter === 'Tech' ? 'active' : ''}`}
            >
              Tech & Engineering Focus
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>

              <div className="card-glass exp-card">
                <div className="exp-header">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <h3 className="exp-title">{exp.title}</h3>
                      <span className="section-pill" style={{ margin: 0, padding: '2px 8px', fontSize: '10px' }}>
                        {exp.badge}
                      </span>
                    </div>
                    <div className="exp-company">{exp.company}</div>
                  </div>

                  <div className="exp-dates">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={13} color="#06b6d4" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                        <MapPin size={13} color="#64748b" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div style={{ marginBottom: '16px' }}>
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="exp-bullet">
                      <span style={{ color: 'var(--color-cyan)', fontWeight: 'bold' }}>•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="tags-row" style={{ marginTop: '12px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', alignSelf: 'center', marginRight: '4px' }}>
                    Skills:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tag-badge">
                      {skill}
                    </span>
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
