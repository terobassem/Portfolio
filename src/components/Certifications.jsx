import React, { useState } from 'react';
import { ShieldCheck, ExternalLink, X, ArrowUpRight } from './Icons';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const [activeModalCert, setActiveModalCert] = useState(null);

  return (
    <section id="certifications" className="certs-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill">Professional Qualifications & Internships</span>
          <h2 className="section-title">Certifications & Verified Credentials</h2>
          <p className="section-subtitle">
            Accredited credentials and corporate internships with verified photo documentation. Click any certificate to inspect in high resolution.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Certs Grid - 3-Column Responsive Layout */}
        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card-glass skill-card"
              style={{
                padding: '0',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setActiveModalCert(cert)}
            >
              <div>
                {/* Certificate Photo Thumbnail - Large, Crisp & Fully Legible */}
                {(cert.images && cert.images.length > 1) ? (
                  <div
                    style={{
                      width: '100%',
                      height: '220px',
                      position: 'relative',
                      overflow: 'hidden',
                      background: '#040812',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '8px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px'
                    }}
                  >
                    {cert.images.map((imgSrc, i) => (
                      <div
                        key={i}
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          borderRadius: '6px',
                          overflow: 'hidden',
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        <img
                          src={imgSrc}
                          alt={`${cert.title} ${i + 1}`}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain'
                          }}
                        />
                        <span
                          style={{
                            position: 'absolute',
                            top: '4px',
                            left: '4px',
                            fontSize: '9px',
                            fontFamily: 'var(--font-mono)',
                            padding: '2px 5px',
                            borderRadius: '4px',
                            background: 'rgba(4, 8, 18, 0.85)',
                            color: 'var(--color-cyan)',
                            border: '1px solid rgba(6, 182, 212, 0.3)'
                          }}
                        >
                          {i === 0 ? 'Document' : 'Dashboard'}
                        </span>
                      </div>
                    ))}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '6px',
                        right: '8px',
                        zIndex: 2
                      }}
                    >
                      <span
                        style={{
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          color: '#fff',
                          background: 'rgba(15, 23, 42, 0.92)',
                          padding: '3px 8px',
                          borderRadius: '9999px',
                          border: '1px solid rgba(6, 182, 212, 0.4)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>2 Photos</span>
                        <ArrowUpRight size={10} color="#06b6d4" />
                      </span>
                    </div>
                  </div>
                ) : cert.image ? (
                  <div
                    style={{
                      width: '100%',
                      height: '220px',
                      position: 'relative',
                      overflow: 'hidden',
                      background: '#040812',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px'
                    }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '6px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                        transition: 'transform 0.4s ease'
                      }}
                      className="cert-thumb-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '12px',
                        zIndex: 2
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                          color: '#fff',
                          background: 'rgba(9, 13, 22, 0.85)',
                          backdropFilter: 'blur(6px)',
                          border: '1px solid rgba(6,182,212,0.4)',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <span>Click to Enlarge</span>
                        <ArrowUpRight size={12} color="#06b6d4" />
                      </span>
                    </div>
                  </div>
                ) : null}

                <div style={{ padding: '24px' }}>
                  {/* Badge & Date */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span className="section-pill" style={{ margin: 0, padding: '2px 8px', fontSize: '10px' }}>
                      {cert.badge}
                    </span>
                    <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: '1.4' }}>
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-cyan)', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
                    <ShieldCheck size={15} color="#10b981" />
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '13px', color: 'var(--text-gray)', lineHeight: '1.6', marginBottom: '14px' }}>
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="tags-row" style={{ marginTop: 'auto', padding: '16px 24px', borderTop: '1px solid var(--border-subtle)' }}>
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

      {/* Certificate Lightbox Modal */}
      {activeModalCert && (
        <div
          className="modal-overlay"
          onClick={() => setActiveModalCert(null)}
          style={{ zIndex: 3000 }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '960px', width: '92%', padding: '28px' }}
          >
            <button
              onClick={() => setActiveModalCert(null)}
              className="modal-close-btn"
            >
              <X size={18} />
            </button>

            <div style={{ marginBottom: '16px' }}>
              <span className="section-pill" style={{ marginBottom: '6px' }}>
                {activeModalCert.badge}
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
                {activeModalCert.title}
              </h3>
              <div style={{ fontSize: '13px', color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)' }}>
                {activeModalCert.issuer} • {activeModalCert.date}
              </div>
            </div>

            {/* High-Resolution Certificate Image(s) */}
            {(activeModalCert.images && activeModalCert.images.length > 1) ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '16px',
                  marginBottom: '20px'
                }}
              >
                {activeModalCert.images.map((imgSrc, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      background: '#040812',
                      border: '1px solid rgba(6,182,212,0.3)',
                      maxHeight: '70vh',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '10px',
                      position: 'relative'
                    }}
                  >
                    <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 2 }}>
                      <span className="section-pill" style={{ margin: 0, padding: '3px 10px', fontSize: '11px', background: 'rgba(4,8,18,0.9)' }}>
                        {i === 0 ? 'Official Training Request Letter' : 'Oracle E-Business Suite Dashboard'}
                      </span>
                    </div>
                    <img
                      src={imgSrc}
                      alt={`${activeModalCert.title} Doc ${i + 1}`}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '62vh',
                        objectFit: 'contain',
                        display: 'block',
                        borderRadius: '8px',
                        marginTop: '28px'
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : activeModalCert.image ? (
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#040812',
                  border: '1px solid rgba(6,182,212,0.3)',
                  marginBottom: '20px',
                  maxHeight: '75vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px'
                }}
              >
                <img
                  src={activeModalCert.image}
                  alt={activeModalCert.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '72vh',
                    objectFit: 'contain',
                    display: 'block',
                    borderRadius: '8px'
                  }}
                />
              </div>
            ) : null}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-gray)', maxWidth: '650px' }}>
                {activeModalCert.description}
              </div>
              <button
                onClick={() => setActiveModalCert(null)}
                className="btn-primary"
                style={{ padding: '10px 24px', fontSize: '13px' }}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
