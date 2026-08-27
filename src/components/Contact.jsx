import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaCopy,
  FaCheck,
  FaPaperPlane,
} from 'react-icons/fa';

const Contact = () => {
  const { personalInfo } = usePortfolio();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', msg: 'Please complete all required fields.' });
      return;
    }

    setStatus({ state: 'loading', msg: 'Sending message...' });

    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus({ state: 'success', msg: 'Email client opened! Thank you for reaching out.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 500);
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
    <section id="contact" className="contact section">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Get in touch for Java Backend Engineer opportunities, contract projects, or AI integration consulting.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mt-6">
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Location Card */}
              <div className="contact-info-box">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 font-['Raleway'] mb-1">
                    Location
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="contact-info-box">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 font-['Raleway'] mb-1">
                    Email
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sky-600 dark:text-sky-400 hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </p>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 text-xs py-1 px-2.5 rounded-md font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 hover:bg-sky-500 hover:text-white transition-all border border-sky-300 dark:border-sky-800"
                  >
                    {copied ? (
                      <>
                        <FaCheck className="text-green-500" /> <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy /> <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="contact-info-box">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 font-['Raleway'] mb-1">
                    Call
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sky-600 dark:text-sky-400 hover:underline"
                    >
                      {personalInfo.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="contact-info-box">
                <div className="contact-icon">
                  <FaLinkedinIn />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100 font-['Raleway'] mb-1">
                    LinkedIn
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
                    <a
                      href={personalInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-600 dark:text-sky-400 hover:underline"
                    >
                      Connect on LinkedIn →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800/90 p-8 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-700/80"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white font-['Raleway']">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5 font-['Poppins']">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5 font-['Poppins']">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5 font-['Poppins']">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Java Backend Engineer Opportunity"
                    className="w-full px-4 py-3 rounded-lg text-sm bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5 font-['Poppins']">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message or project requirements here..."
                    required
                    className="w-full px-4 py-3 rounded-lg text-sm bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-white font-semibold transition-all bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 text-sm cursor-pointer"
                  >
                    <FaPaperPlane className="text-xs" />
                    <span>Send Message</span>
                  </button>
                </div>

                {status.state !== 'idle' && (
                  <div
                    className={`mt-4 p-3 rounded-lg text-xs font-medium text-center ${
                      status.state === 'success'
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                        : status.state === 'error'
                        ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800'
                        : 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300'
                    }`}
                  >
                    {status.msg}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;