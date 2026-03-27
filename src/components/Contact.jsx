import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Config ──────────────────────────────────────────────
// Replace these values with your own from https://emailjs.com
const EMAILJS_SERVICE_ID = 'service_y3s7t1h';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_dx2f37s';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = '1steuLpK55OFDh3J0';   // e.g. 'aBcDeFgH...'
// ─────────────────────────────────────────────────────────────────

const contactDetails = [
  { icon: '📧', label: 'Email', value: 'niteshkumarsinsinwar@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 96758 74842' },
  { icon: '📍', label: 'Location', value: 'India' },
];

const socialLinks = [
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/Nitesh190104' },
  { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/nitesh1901/' },

];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const btnLabel = {
    idle: '📬 Send Message',
    sending: '⏳ Sending...',
    success: '✅ Message Sent!',
    error: '❌ Failed — Try Again',
  };

  const btnClass = {
    idle: '',
    sending: '',
    success: 'success',
    error: 'error',
  };

  return (
    <section id="contact">
      <div className="container">
        <span className="section-tag">Contact</span>
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p className="section-subtitle">
          Have a project in mind? Let&apos;s work together to build something amazing.
          I&apos;m always open to discussing new opportunities.
        </p>

        <div className="contact-layout">
          {/* Left: Info */}
          <div>
            <h3 className="contact-info-title">Let&apos;s talk! 🚀</h3>
            <p className="contact-info-text">
              Whether you have a question, a project proposal, or just want to say hi —
              my inbox is always open. I&apos;ll do my best to reply promptly!
            </p>

            <div className="contact-details">
              {contactDetails.map((item) => (
                <div className="contact-detail-item" key={item.label}>
                  <div className="contact-detail-icon">{item.icon}</div>
                  <div>
                    <div className="contact-detail-label">{item.label}</div>
                    <div className="contact-detail-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px', fontWeight: 500 }}>
              FIND ME ON
            </p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="social-link"
                  title={link.label} target="_blank" rel="noreferrer">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-card">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    id="name" type="text" name="name"
                    className="form-input" placeholder="Your name"
                    value={form.name} onChange={handleChange} required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email" type="email" name="email"
                    className="form-input" placeholder="your@email.com"
                    value={form.email} onChange={handleChange} required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  id="subject" type="text" name="subject"
                  className="form-input" placeholder="What's this about?"
                  value={form.subject} onChange={handleChange} required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  className="form-textarea" placeholder="Tell me about your project..."
                  value={form.message} onChange={handleChange} required
                />
              </div>

              <button
                type="submit"
                className={`submit-btn ${btnClass[status]}`}
                disabled={status === 'sending'}
              >
                {btnLabel[status]}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
