import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, ArrowUpRight, X } from './Icons';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [previewImg, setPreviewImg] = useState(null);

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
                <div className={`exp-card-grid ${(exp.image || (exp.images && exp.images.length > 0)) ? 'has-photo' : ''} ${(exp.images && exp.images.length > 1) ? 'has-multiple-photos' : ''}`}>
                  {/* Left Column: Role Details, Description, Highlights, Skills */}
                  <div className="exp-info-side">
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

                  {/* Right Column: Photos Embedded Directly in Card Div */}
                  {(exp.images && exp.images.length > 1) ? (
                    <div className="exp-photo-column">
                      <div className="exp-photo-gallery-grid">
                        {exp.images.map((imgSrc, imgIdx) => (
                          <div
                            key={imgIdx}
                            className="exp-photo-item"
                            onClick={() => setPreviewImg(imgSrc)}
                            title="Click to inspect photo in high resolution"
                          >
                            <div className="exp-photo-frame" style={{ height: '185px' }}>
                              <img
                                src={imgSrc}
                                alt={`${exp.title} Document ${imgIdx + 1}`}
                                className="exp-photo-img"
                              />
                              <div className="exp-photo-zoom-hint">
                                <ArrowUpRight size={11} />
                                <span>{imgIdx === 0 ? 'Training Letter' : 'System Live'}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="exp-photo-caption">
                        <span>2 Official Internship Photos (Letter & System)</span>
                      </div>
                    </div>
                  ) : exp.image ? (
                    <div className="exp-photo-column">
                      <div
                        className="exp-photo-single"
                        onClick={() => setPreviewImg(exp.image)}
                        title="Click to inspect photo in high resolution"
                      >
                        <div className="exp-photo-frame">
                          <img
                            src={exp.image}
                            alt={`${exp.title} Certificate`}
                            className="exp-photo-img"
                          />
                          <div className="exp-photo-zoom-hint">
                            <ArrowUpRight size={12} />
                            <span>Enlarge Photo</span>
                          </div>
                        </div>
                      </div>
                      <div className="exp-photo-caption">
                        <span>Official Credential / Certificate</span>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Experience Certificate Preview Modal */}
      {previewImg && (
        <div
          className="modal-overlay"
          onClick={() => setPreviewImg(null)}
          style={{ zIndex: 3000 }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '800px', padding: '24px' }}
          >
            <button
              onClick={() => setPreviewImg(null)}
              className="modal-close-btn"
            >
              <X size={18} />
            </button>

            <div style={{ borderRadius: '12px', overflow: 'hidden', background: '#040812', border: '1px solid rgba(6,182,212,0.3)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
              <img
                src={previewImg}
                alt="Certificate Document"
                style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }}
              />
            </div>

            <div style={{ textAlign: 'right' }}>
              <button
                onClick={() => setPreviewImg(null)}
                className="btn-primary"
                style={{ padding: '8px 20px', fontSize: '13px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
