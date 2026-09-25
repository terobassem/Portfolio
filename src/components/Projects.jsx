import React, { useState } from 'react';
import { ExternalLink, Check, ArrowRight, Layers, Sparkles } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [showDetails, setShowDetails] = useState(false);
  const project = projects[0]; // Khedma 5&6 Web Application

  if (!project) return null;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill">Featured Project</span>
          <h2 className="section-title">Production Web Application</h2>
          <p className="section-subtitle">
            MERN Stack web application developed for educational and church youth activity management.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Featured Project Presentation */}
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div
            className="card-glass"
            style={{
              padding: '40px',
              border: '1px solid rgba(6,182,212,0.35)',
              boxShadow: '0 20px 45px rgba(6,182,212,0.12)'
            }}
          >
            {/* Top Bar with Badge & Live Status */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
              <span className="section-pill" style={{ margin: 0, padding: '4px 12px', fontSize: '11px' }}>
                {project.tag}
              </span>
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
                  color: 'var(--color-emerald)',
                  textDecoration: 'none',
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  padding: '4px 12px',
                  borderRadius: '9999px'
                }}
              >
                <span className="status-dot"></span>
                <span>Live on Railway</span>
              </a>
            </div>

            {/* Title & Subtitle */}
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              {project.title}
            </h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--color-cyan)', marginBottom: '20px' }}>
              {project.subtitle}
            </p>

            {/* Description */}
            <p style={{ color: 'var(--text-gray)', fontSize: '15px', lineHeight: '1.8', marginBottom: '24px' }}>
              {project.description}
            </p>

            {/* Highlights List */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '14px', border: '1px solid var(--border-subtle)', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '14px' }}>
                Key Capabilities & Features:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {project.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--text-gray)' }}>
                    <Check size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '10px' }}>
                TECH STACK:
              </div>
              <div className="tags-row" style={{ marginTop: 0, paddingTop: 0, border: 'none' }}>
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="tag-badge"
                    style={{ fontSize: '12px', padding: '5px 12px', color: 'var(--color-cyan)', background: 'rgba(6,182,212,0.1)', borderColor: 'rgba(6,182,212,0.25)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid var(--border-subtle)', paddingTop: '24px' }}>
              <button
                onClick={() => setShowDetails(!showDetails)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-cyan)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer'
                }}
              >
                <span>{showDetails ? 'Hide Architecture' : 'View System Architecture'}</span>
                <ArrowRight size={14} />
              </button>

              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ fontSize: '14px', padding: '12px 24px' }}
              >
                <span>Open Live Application</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Expandable Architecture View */}
            {showDetails && (
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px dashed rgba(6,182,212,0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-cyan)', fontWeight: 700, fontSize: '13px', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                  <Layers size={16} />
                  <span>SYSTEM ARCHITECTURE & DESIGN</span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: '1.7' }}>
                  {project.architecture}
                </p>
                <div style={{ marginTop: '12px', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  Production Deployment: <a href={project.demoLink} target="_blank" rel="noreferrer" style={{ color: 'var(--color-cyan)' }}>{project.demoLink}</a>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
