import React from 'react';
import { ArrowUp, Linkedin, Mail, Github } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content" style={{ flexWrap: 'wrap', gap: '20px' }}>
          
          {/* Logo & Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="logo-badge" style={{ width: '36px', height: '36px', fontSize: '14px' }}>
              PB
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '15px' }}>
                Phelobater Bassem Basha
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Software Engineer • FCI Helwan University
              </div>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 12px' }}
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-secondary"
              style={{ padding: '8px 12px' }}
              title="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 12px' }}
              title="GitHub"
            >
              <Github size={16} />
            </a>
            
            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{ padding: '8px 12px', color: 'var(--color-cyan)', borderColor: 'rgba(6,182,212,0.3)' }}
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
          <div>
            © {new Date().getFullYear()} Phelobater Bassem Basha. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
