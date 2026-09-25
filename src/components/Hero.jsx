import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import CodeSnippet from './CodeSnippet';
import { ArrowRight, ArrowUpRight, Database, Download, Layers, Mail, MapPin, ShieldCheck } from './Icons';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        setFade(true);
      }, 300);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section bg-grid">
      <div className="glow-orb-cyan"></div>
      <div className="glow-orb-indigo"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          
          {/* Left Column: Bio Details */}
          <div>
            {/* Status Pill */}
            <div className="hero-badge">
              <span className="status-dot"></span>
              <span>Available for Software Engineering & Full-Stack Roles</span>
            </div>

            {/* Greeting & Name */}
            <div className="hero-title-greeting">Hello, I am</div>
            <h1 className="hero-main-title">
              Phelobater <span className="text-gradient">Bassem</span> Basha
            </h1>

            {/* Dynamic Roles */}
            <div className="hero-roles">
              <span style={{ color: 'var(--color-cyan)', marginRight: '8px' }}>&gt;</span>
              <span
                style={{
                  transition: 'opacity 0.3s ease',
                  opacity: fade ? 1 : 0,
                  color: '#e2e8f0'
                }}
              >
                {personalInfo.roles[roleIndex]}
              </span>
            </div>

            {/* Bio Description */}
            <p className="hero-desc">
              Computers and Artificial Intelligence student at <strong>Helwan University</strong>. 
              Passionate about building production-grade <span style={{ color: 'var(--color-cyan)' }}>MERN stack</span> applications, 
              scalable <span style={{ color: '#38bdf8' }}>data  pipelines</span> with Python,SQL and Spark,
            </p>

            {/* Metadata Chips */}
            <div className="hero-meta-chips">
              <div className="meta-chip">
                <MapPin size={14} color="#06b6d4" />
                <span>Cairo, Egypt (El Maadi)</span>
              </div>
              <div className="meta-chip">
                <Database size={14} color="#10b981" />
                <span>DEPI Data Engineering</span>
              </div>
              <div className="meta-chip">
                <Layers size={14} color="#818cf8" />
                <span>Mern Stack Developer</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-btn-row">
              <a
                href="/Phelobater_Bassem_Basha_CV.pdf"
                download="Phelobater_Bassem_Basha_CV.pdf"
                className="btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
                  boxShadow: '0 8px 24px rgba(6, 182, 212, 0.35)',
                  fontWeight: 700
                }}
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>

              <a href="#projects" className="btn-secondary">
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>

              <a href="#contact" className="btn-secondary">
                <Mail size={15} color="#06b6d4" />
                <span>Get in Touch</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="stats-grid">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Portrait Photo with Glowing Border */}
          <div className="portrait-container">
            <div className="portrait-glow-wrapper">
              <div className="portrait-glow-bg"></div>
              
              <div className="portrait-card">
                <img
                  src="/avatar.jpg"
                  alt="Phelobater Bassem Basha"
                  className="portrait-img"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                  }}
                />

                <div className="portrait-badge-overlay">
                  <div>
                    <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Phelobater Bassem</h3>
                    <p style={{ fontSize: '11px', color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)' }}>Software Engineer</p>
                  </div>
                  <div style={{ color: 'var(--color-cyan)' }}>
                    <ShieldCheck size={22} />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Specs Pill */}
            <div className="card-glass hero-specs-pill" style={{ padding: '10px 16px', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
              <span className="status-dot"></span>
              <span style={{ color: 'var(--text-muted)' }}>Specialties:</span>
              <span className="tag-badge">React</span>
              <span className="tag-badge">Node</span>
              <span className="tag-badge">SQL</span>
              <span className="tag-badge">Python</span>
              <span className="tag-badge">Spark</span>
              <span className="tag-badge">BigData</span>
            </div>
          </div>

        </div>

        {/* Code Terminal */}
        <div style={{ marginTop: '50px' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <span className="section-pill">Interactive Code Inspector</span>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Click "Run" to test compile profile modules or switch tabs to inspect database queries
            </p>
          </div>
          <CodeSnippet />
        </div>

      </div>
    </section>
  );
}
