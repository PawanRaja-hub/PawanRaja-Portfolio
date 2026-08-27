import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../constants';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaBriefcase, FaCopy } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setStatus('Opening your email client...');
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy');
    }
  };

  return (
    <section id="contact" className="section section-bg">
      <div className="max-w-6xl mx-auto px-8">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Let's get in touch. I'm always open to discussing new opportunities.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="icon-circle" style={{ flexShrink: 0 }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: 'var(--heading-color)', fontFamily: 'Raleway, sans-serif' }}>
                    Location
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {personalInfo.location}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="icon-circle" style={{ flexShrink: 0 }}>
                  <FaEnvelope />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1" style={{ color: 'var(--heading-color)', fontFamily: 'Raleway, sans-serif' }}>
                    Email
                  </h4>
                  <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                    <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                      {personalInfo.email}
                    </a>
                  </p>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded transition-all"
                    style={{ background: 'var(--accent-color)', color: '#fff' }}
                  >
                    <FaCopy /> {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="icon-circle" style={{ flexShrink: 0 }}>
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: 'var(--heading-color)', fontFamily: 'Raleway, sans-serif' }}>
                    Call
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <a href={`tel:${personalInfo.phone}`} className="hover:underline">
                      {personalInfo.phone}
                    </a>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="icon-circle" style={{ flexShrink: 0 }}>
                  <FaLinkedin />
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: 'var(--heading-color)', fontFamily: 'Raleway, sans-serif' }}>
                    LinkedIn
                  </h4>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    View Profile
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--heading-color)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded text-sm"
                    style={{
                      background: 'var(--bg-color)',
                      color: 'var(--text-color)',
                      border: '1px solid var(--border-color)',
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--heading-color)' }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded text-sm"
                    style={{
                      background: 'var(--bg-color)',
                      color: 'var(--text-color)',
                      border: '1px solid var(--border-color)',
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--heading-color)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded text-sm"
                  style={{
                    background: 'var(--bg-color)',
                    color: 'var(--text-color)',
                    border: '1px solid var(--border-color)',
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--heading-color)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded text-sm resize-none"
                  style={{
                    background: 'var(--bg-color)',
                    color: 'var(--text-color)',
                    border: '1px solid var(--border-color)',
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full text-white font-semibold transition-all"
                style={{
                  background: 'var(--accent-color)',
                  fontFamily: 'Raleway, sans-serif',
                  boxShadow: '0 4px 15px rgba(5, 99, 187, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-hover)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--accent-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Send Message
              </button>
              {status && (
                <p className="text-sm text-center" style={{ color: 'var(--accent-color)' }}>
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;