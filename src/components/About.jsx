import React from 'react';
import { GraduationCap, MapPin, Calendar, Check, Code, Database, Server, Briefcase, Users, Cpu, Download, FileText, ExternalLink } from './Icons';
import { education, personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Code size={20} color="#06b6d4" />,
      title: "Full-Stack Web Engineering",
      desc: "Specializing in modern JavaScript/React and Node.js/Express architectures with clean REST APIs and intuitive UIs."
    },
    {
      icon: <Database size={20} color="#10b981" />,
      title: "Data Engineering & Big Data",
      desc: "Skilled in Python, PySpark, complex SQL schemas, and distributed data pipeline deployment with Azure Cloud."
    },
    {
      icon: <Server size={20} color="#818cf8" />,
      title: "Database Design & APIs",
      desc: "Designing optimized relational schemas (SQL, MySQL) and scalable NoSQL document models (MongoDB)."
    },
    {
      icon: <Users size={20} color="#f59e0b" />,
      title: "Analytical Problem Solving",
      desc: "Proven teamwork, fast adaptation under pressure, and effective technical communication forged across projects and internships."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill">About Phelobater</span>
          <h2 className="section-title">Engineering Rigor & Practical Problem Solving</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-grid">
          
          {/* Left: Story and Pillars */}
          <div>
            <div className="about-story-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '14px', color: '#fff' }}>
                Who I Am
              </h3>
              <p>
                I am a dedicated Software Engineer based in Cairo, Egypt, pursuing my degree in 
                <strong style={{ color: '#fff' }}> Computers and Artificial Intelligence</strong> at 
                <strong style={{ color: '#fff' }}> Helwan University</strong> within the Information Systems Department.
              </p>
              <p>
                My technical journey focuses on: 
                <span style={{ color: 'var(--color-cyan)', fontWeight: 600 }}> modern full-stack web applications</span> (crafting robust platforms with React, Node, and MongoDB) and 
                <span style={{ color: '#10b981', fontWeight: 600 }}> data engineering</span> (leveraging Python, Big Data, SQL, and Azure under DEPI).
              </p>
              <p>
                I thrive in environments where clean architecture, reliability, and measurable user impact converge. Whether orchestrating full-stack services like the 
                <em style={{ color: '#fff' }}> Khedma 5&6 Web Application</em> or building high-performance data processing workflows, I ensure every line of code meets strict professional standards.
              </p>

              {/* Download CV Action Banner */}
              <div style={{
                marginTop: '24px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(6, 182, 212, 0.12)',
                    color: 'var(--color-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(6, 182, 212, 0.25)'
                  }}>
                    <FileText size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: '#fff' }}>Curriculum Vitae (CV)</div>
                    <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Official PDF • Complete Work & Education</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a
                    href="/Phelobater_Bassem_Basha_CV.pdf"
                    download="Phelobater_Bassem_Basha_CV.pdf"
                    className="btn-primary"
                    style={{ padding: '10px 20px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <Download size={15} />
                    <span>Download CV</span>
                  </a>
                  <a
                    href="/Phelobater_Bassem_Basha_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ padding: '10px 16px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <ExternalLink size={13} />
                    <span>Preview</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="about-pillars-grid">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="pillar-icon">{pillar.icon}</div>
                  <div className="pillar-title">{pillar.title}</div>
                  <div className="pillar-desc">{pillar.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education Spotlight */}
          <div>
            <div className="edu-card">
              <div className="edu-header">
                <div className="edu-icon-wrap">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--color-cyan)', letterSpacing: '1px' }}>
                    Formal Education
                  </div>
                  <div className="edu-title">{education.institution}</div>
                </div>
              </div>

              <div className="edu-body">
                <div style={{ fontWeight: 600, fontSize: '14px', color: '#f1f5f9', marginBottom: '4px' }}>
                  {education.degree}
                </div>
                <div className="edu-sub" style={{ marginBottom: '14px' }}>
                  {education.department}
                </div>

                <div className="edu-meta">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} color="#64748b" />
                    <span>{education.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={14} color="#64748b" />
                    <span>{education.location}</span>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', marginTop: '16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
                    Key Academic Highlights:
                  </div>
                  {education.highlights.map((h, i) => (
                    <div key={i} className="edu-bullet">
                      <Check size={14} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="card-glass" style={{ padding: '24px', marginTop: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="status-dot"></span>
                <span>Contact & Residence</span>
              </div>
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-gray)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div><span style={{ color: 'var(--text-muted)' }}>Location:</span> 19 Eladawy st, El Maadi, Cairo, Egypt</div>
                <div><span style={{ color: 'var(--text-muted)' }}>Email:</span> terobassem.5@gmail.com</div>
                <div><span style={{ color: 'var(--text-muted)' }}>Phone:</span> +20 122 864 6329</div>
                <div><span style={{ color: 'var(--text-muted)' }}>Status:</span> Open to Software Engineering Opportunities</div>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                <a
                  href="/Phelobater_Bassem_Basha_CV.pdf"
                  download="Phelobater_Bassem_Basha_CV.pdf"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '13px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <Download size={14} />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
