import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Download } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        {/* Brand Logo */}
        <a href="#home" className="nav-logo">
          <div className="logo-badge">PB</div>
          <div>
            <div className="logo-text-title">
              <span>Phelobater Bassem</span>
              <span className="status-dot"></span>
            </div>
            <div className="logo-text-sub">Software Engineer</div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Quick CTA Actions */}
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a
            href="/Phelobater_Bassem_Basha_CV.pdf"
            download="Phelobater_Bassem_Basha_CV.pdf"
            className="btn-secondary"
            style={{ padding: '7px 14px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-cyan)', borderColor: 'rgba(6,182,212,0.35)' }}
          >
            <Download size={13} />
            <span>Download CV</span>
          </a>
          <a href="#contact" className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>
            <span>Get in Touch</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Phelobater_Bassem_Basha_CV.pdf"
            download="Phelobater_Bassem_Basha_CV.pdf"
            onClick={() => setIsOpen(false)}
            className="btn-secondary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '12px', color: 'var(--color-cyan)', borderColor: 'rgba(6,182,212,0.4)', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Download size={14} />
            <span>Download CV (PDF)</span>
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
