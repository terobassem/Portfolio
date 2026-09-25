import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Copy, Check, ArrowRight, ArrowUpRight, MessageSquare } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formStatus, setFormStatus] = useState({ state: 'idle', msg: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ state: 'error', msg: 'Please complete all required fields.' });
      return;
    }

    setFormStatus({ state: 'sending', msg: 'Transmitting message...' });

    setTimeout(() => {
      setFormStatus({
        state: 'success',
        msg: 'Thank you! Opening your email client with your pre-filled inquiry...'
      });

      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormStatus({ state: 'idle', msg: '' });
      }, 4000);
    }, 600);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill">Get In Touch</span>
          <h2 className="section-title">Let's Discuss New Opportunities</h2>
          <p className="section-subtitle">
            Interested in software engineering roles, or full-stack web projects? Reach out directly.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Direct Info Cards */}
          <div>
            {/* Email Card */}
            <div className="contact-card-item">
              <div className="contact-card-info">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Direct Email</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>{personalInfo.email}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="btn-secondary"
                style={{ padding: '8px 12px' }}
                title="Copy Email"
              >
                {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-card-item">
              <div className="contact-card-info">
                <div className="contact-icon-box" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Phone / WhatsApp</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)' }}>{personalInfo.phoneFormatted}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="btn-secondary"
                  style={{ padding: '8px 12px' }}
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                </button>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="btn-secondary"
                  style={{ padding: '8px 12px', color: '#10b981', borderColor: 'rgba(16,185,129,0.3)' }}
                  title="Call Directly"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-card-item">
              <div className="contact-card-info">
                <div className="contact-icon-box" style={{ background: 'rgba(99,102,241,0.1)', color: '#818cf8' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Residence & Base</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-card-item"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <div className="contact-card-info">
                <div className="contact-icon-box" style={{ background: 'rgba(59,130,246,0.1)', color: '#60a5fa' }}>
                  <Linkedin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>LinkedIn Network</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#60a5fa' }}>linkedin.com/in/phelobater-b-basha</div>
                </div>
              </div>
              <ArrowUpRight size={18} color="#60a5fa" />
            </a>
          </div>

          {/* Right Column: Contact Message Form */}
          <div>
            <div className="contact-form">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <MessageSquare size={18} color="#06b6d4" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Send a Direct Message</h3>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or role details here..."
                    className="form-textarea"
                    style={{ resize: 'none' }}
                  ></textarea>
                </div>

                {formStatus.msg && (
                  <div
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '16px',
                      background: formStatus.state === 'success' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
                      color: formStatus.state === 'success' ? '#86efac' : '#fca5a5',
                      border: `1px solid ${formStatus.state === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`
                    }}
                  >
                    {formStatus.msg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus.state === 'sending'}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>{formStatus.state === 'sending' ? 'Transmitting...' : 'Send Message'}</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
