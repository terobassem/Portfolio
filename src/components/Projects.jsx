import React, { useState } from 'react';
import { ExternalLink, Check, ArrowRight, Layers, Sparkles, BarChart, TrendingUp, X } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [expandedDetails, setExpandedDetails] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  const toggleDetails = (id) => {
    setExpandedDetails(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredProjects = activeTab === 'All'
    ? projects
    : activeTab === 'Data'
    ? projects.filter(p => p.tags.includes('Python') || p.tags.includes('EDA') || p.tags.includes('ETL') || p.tags.includes('Data Pipeline'))
    : projects.filter(p => p.tags.includes('React.js') || p.tags.includes('Node.js') || p.tags.includes('Next.js') || p.tags.includes('React') || p.tags.includes('Frontend'));

  return (
    <section id="projects" className="projects-section" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill">Featured Work</span>
          <h2 className="section-title">Production & Analytics Projects</h2>
          <p className="section-subtitle">
            Engineered software systems, brand web applications, and exploratory data analytics pipelines built for real-world impact.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '12px', border: '1px solid var(--border-subtle)', display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('All')}
              className={`cat-tab-btn ${activeTab === 'All' ? 'active' : ''}`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab('Data')}
              className={`cat-tab-btn ${activeTab === 'Data' ? 'active' : ''}`}
            >
              Python & Data Analytics
            </button>
            <button
              onClick={() => setActiveTab('Web')}
              className={`cat-tab-btn ${activeTab === 'Web' ? 'active' : ''}`}
            >
              Web Applications & Next.js
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '960px', margin: '0 auto' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-glass"
              style={{
                padding: '36px',
                border: '1px solid rgba(6,182,212,0.3)',
                boxShadow: '0 20px 45px rgba(6,182,212,0.08)'
              }}
            >
              {/* Header Bar: Badge & Status / Company */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="section-pill" style={{ margin: 0, padding: '4px 12px', fontSize: '11px' }}>
                    {project.tag}
                  </span>
                  {project.company && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        background: 'rgba(59,130,246,0.15)',
                        color: 'var(--color-blue)',
                        border: '1px solid rgba(59,130,246,0.3)',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        fontWeight: 600
                      }}
                    >
                      {project.company}
                    </span>
                  )}
                </div>

                {project.demoLink ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      textDecoration: 'none',
                      color: (project.demoLink?.includes('railway') || project.demoLink?.includes('whitelily')) ? 'var(--color-emerald)' : 'var(--color-cyan)',
                      background: (project.demoLink?.includes('railway') || project.demoLink?.includes('whitelily')) ? 'rgba(16,185,129,0.1)' : 'rgba(6,182,212,0.1)',
                      border: `1px solid ${(project.demoLink?.includes('railway') || project.demoLink?.includes('whitelily')) ? 'rgba(16,185,129,0.3)' : 'rgba(6,182,212,0.3)'}`,
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(6,182,212,0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span className="status-dot"></span>
                    <span>{project.metrics || 'Live Project'} ↗</span>
                  </a>
                ) : (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: 'var(--color-cyan)',
                      background: 'rgba(6,182,212,0.1)',
                      border: '1px solid rgba(6,182,212,0.3)',
                      padding: '4px 12px',
                      borderRadius: '9999px'
                    }}
                  >
                    <span className="status-dot"></span>
                    <span>{project.metrics || 'Verified Project'}</span>
                  </div>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                {project.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-cyan)', marginBottom: '18px' }}>
                {project.subtitle}
              </p>

              {/* Description */}
              <p style={{ color: 'var(--text-gray)', fontSize: '14.5px', lineHeight: '1.75', marginBottom: '22px' }}>
                {project.description}
              </p>

              {/* Visuals Showcase */}
              {project.visualizations && project.visualizations.length > 0 && (
                <div style={{ marginBottom: '26px' }}>
                  {project.visualizations.length === 1 ? (
                    /* Single Showcase Frame (Browser Mockup with proportional sizing) */
                    <div
                      style={{
                        background: '#040812',
                        borderRadius: '14px',
                        border: '1px solid rgba(6,182,212,0.25)',
                        overflow: 'hidden',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(6,182,212,0.5)';
                        e.currentTarget.style.boxShadow = '0 16px 40px rgba(6,182,212,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(6,182,212,0.25)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.4)';
                      }}
                    >
                      {/* Browser Top Bar */}
                      <div
                        style={{
                          background: 'rgba(15, 23, 42, 0.85)',
                          padding: '10px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderBottom: '1px solid rgba(255,255,255,0.06)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
                          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }}></span>
                          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                        </div>
                        <div
                          style={{
                            background: 'rgba(0,0,0,0.4)',
                            padding: '4px 14px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            maxWidth: '340px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <span style={{ color: 'var(--color-emerald)', fontSize: '11px' }}>🔒</span>
                          <span style={{ color: 'var(--text-gray)' }}>{project.demoLink || 'https://whitelily-artworks.com'}</span>
                        </div>
                        <button
                          onClick={() => setPreviewImage(project.visualizations[0])}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--color-cyan)',
                            fontSize: '11px',
                            fontFamily: 'var(--font-mono)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <span>Full View</span>
                          <ArrowRight size={12} />
                        </button>
                      </div>

                      {/* Image Container with balanced aspect ratio */}
                      <div
                        onClick={() => setPreviewImage(project.visualizations[0])}
                        style={{
                          cursor: 'pointer',
                          background: '#090d16',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                          maxHeight: '420px'
                        }}
                      >
                        <img
                          src={project.visualizations[0].image}
                          alt={project.visualizations[0].title}
                          style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '420px',
                            objectFit: 'contain',
                            display: 'block',
                            transition: 'transform 0.4s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.015)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        />
                      </div>

                      {/* Image Caption Footer */}
                      <div
                        style={{
                          padding: '10px 16px',
                          background: 'rgba(15, 23, 42, 0.6)',
                          borderTop: '1px solid rgba(255,255,255,0.06)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '8px'
                        }}
                      >
                        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-white)' }}>
                          {project.visualizations[0].title}
                        </span>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                          {project.visualizations[0].caption}
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Multi-Image Grid (For Data Analytics Projects) */
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                        <BarChart size={16} color="var(--color-cyan)" />
                        <span style={{ fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Visual Analysis & Notebook Charts (Click to inspect)
                        </span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                        {project.visualizations.map((viz, vIdx) => (
                          <div
                            key={vIdx}
                            onClick={() => setPreviewImage(viz)}
                            style={{
                              background: '#040812',
                              borderRadius: '12px',
                              border: '1px solid rgba(6,182,212,0.2)',
                              overflow: 'hidden',
                              cursor: 'pointer',
                              transition: 'all 0.25s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = 'var(--color-cyan)';
                              e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = 'rgba(6,182,212,0.2)';
                              e.currentTarget.style.transform = 'none';
                            }}
                          >
                            <div style={{ height: '170px', overflow: 'hidden', background: '#0b1120', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <img
                                src={viz.image}
                                alt={viz.title}
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                              />
                            </div>
                            <div style={{ padding: '12px' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                <span style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>{viz.title}</span>
                                <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--color-cyan)', background: 'rgba(6,182,212,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                                  {viz.type}
                                </span>
                              </div>
                              <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                                {viz.caption}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Highlights List */}
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-subtle)', marginBottom: '24px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                  Key Highlights & Technical Achievements:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '9px' }}>
                  {project.highlights.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: 'var(--text-gray)' }}>
                      <Check size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div style={{ marginBottom: '26px' }}>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  TECHNOLOGIES & TOOLS:
                </div>
                <div className="tags-row" style={{ marginTop: 0, paddingTop: 0, border: 'none', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="tag-badge"
                      style={{ fontSize: '11.5px', padding: '4px 10px', color: 'var(--color-cyan)', background: 'rgba(6,182,212,0.08)', borderColor: 'rgba(6,182,212,0.22)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action & Toggle Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
                <button
                  onClick={() => toggleDetails(project.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-cyan)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer'
                  }}
                >
                  <span>{expandedDetails[project.id] ? 'Hide Architecture & Methodology' : 'View Architecture & Methodology'}</span>
                  <ArrowRight size={13} />
                </button>

                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ fontSize: '13px', padding: '10px 20px' }}
                  >
                    <span>
                      {project.demoLink.includes('railway')
                        ? 'Open Live Application'
                        : project.demoLink.includes('whitelily')
                        ? 'Visit Website'
                        : 'View Source Code'}
                    </span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              {/* Expandable Architecture View */}
              {expandedDetails[project.id] && (
                <div style={{ marginTop: '20px', paddingTop: '18px', borderTop: '1px dashed rgba(6,182,212,0.3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-cyan)', fontWeight: 700, fontSize: '12.5px', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                    <Layers size={15} />
                    <span>SYSTEM ARCHITECTURE & METHODOLOGY</span>
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-gray)', lineHeight: '1.7' }}>
                    {project.architecture}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Lightbox / Image Preview Modal */}
        {previewImage && (
          <div
            onClick={() => setPreviewImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(4, 8, 18, 0.92)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              backdropFilter: 'blur(8px)'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '960px',
                width: '100%',
                background: '#090d16',
                borderRadius: '16px',
                border: '1px solid rgba(6,182,212,0.4)',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.02)' }}>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>{previewImage.title}</h4>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-cyan)' }}>{previewImage.type}</span>
                </div>
                <button
                  onClick={() => setPreviewImage(null)}
                  style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ padding: '16px', background: '#020611', textAlign: 'center', maxHeight: '75vh', overflow: 'auto' }}>
                <img
                  src={previewImage.image}
                  alt={previewImage.title}
                  style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: '8px' }}
                />
              </div>

              <div style={{ padding: '14px 20px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border-subtle)' }}>
                <p style={{ fontSize: '13px', color: 'var(--text-gray)' }}>{previewImage.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
