import React from 'react';
import { ShieldCheck } from './Icons';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="certs-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill">Professional Qualifications</span>
          <h2 className="section-title">Certifications & Industry Programs</h2>
          <p className="section-subtitle">
            Accredited coursework and specialized corporate training across full-stack engineering, artificial intelligence, and enterprise banking.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Certs Grid */}
        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="card-glass skill-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="section-pill" style={{ margin: 0, padding: '2px 8px', fontSize: '10px' }}>
                    {cert.badge}
                  </span>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    {cert.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  {cert.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-cyan)', marginBottom: '12px' }}>
                  <ShieldCheck size={14} color="#10b981" />
                  <span>{cert.issuer}</span>
                </div>

                <p style={{ fontSize: '12px', color: 'var(--text-gray)', lineHeight: '1.6', marginBottom: '16px' }}>
                  {cert.description}
                </p>
              </div>

              <div className="tags-row" style={{ marginTop: 'auto' }}>
                {cert.skills.map((s, idx) => (
                  <span key={idx} className="tag-badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
