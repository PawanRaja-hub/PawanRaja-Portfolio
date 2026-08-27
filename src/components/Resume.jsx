import React from 'react';
import { motion } from 'framer-motion';
import { experience, education } from '../constants';
import { FaDownload } from 'react-icons/fa';
import { personalInfo } from '../constants';

const Resume = () => {
  return (
    <section id="resume" className="section section-bg">
      <div className="max-w-6xl mx-auto px-8">
        <div className="section-title">
          <h2>Resume</h2>
          <p>My professional journey and educational background.</p>
        </div>

        <div className="text-center mb-12">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all"
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
            <FaDownload /> Download Full Resume
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ color: 'var(--heading-color)', fontFamily: 'Raleway, sans-serif' }}
            >
              <span style={{ color: 'var(--accent-color)' }}>💼</span> Professional Experience
            </h3>

            {experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="premium-card mb-6"
                style={{ position: 'relative', paddingLeft: '20px', borderLeft: '3px solid var(--accent-color)' }}
              >
                <h4
                  className="text-lg font-bold"
                  style={{ color: 'var(--heading-color)' }}
                >
                  {exp.role}
                </h4>
                <h5
                  className="font-semibold mt-1"
                  style={{ color: 'var(--accent-color)', fontFamily: 'Raleway, sans-serif' }}
                >
                  {exp.company}
                </h5>
                <p
                  className="text-xs uppercase tracking-wide mt-2 mb-3"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {exp.period} • {exp.location}
                </p>
                <p
                  className="text-sm mb-3"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {exp.description}
                </p>
                <ul className="space-y-1 list-none p-0">
                  {exp.achievements.map((a, i) => (
                    <li
                      key={i}
                      className="text-sm flex items-start gap-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span style={{ color: 'var(--accent-color)' }}>▸</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ color: 'var(--heading-color)', fontFamily: 'Raleway, sans-serif' }}
            >
              <span style={{ color: 'var(--accent-color)' }}>🎓</span> Education
            </h3>

            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="premium-card"
                style={{ position: 'relative', paddingLeft: '20px', borderLeft: '3px solid var(--accent-color)' }}
              >
                <h4
                  className="text-lg font-bold"
                  style={{ color: 'var(--heading-color)' }}
                >
                  {edu.degree}
                </h4>
                <h5
                  className="font-semibold mt-1"
                  style={{ color: 'var(--accent-color)' }}
                >
                  {edu.field}
                </h5>
                <p
                  className="text-xs uppercase tracking-wide mt-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {edu.institution} • {edu.period}
                </p>
                <p
                  className="text-sm mt-3"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {edu.description}
                </p>
              </motion.div>
            ))}

            {/* Certifications also in resume section */}
            <h3
              className="text-2xl font-bold mb-6 mt-8 flex items-center gap-3"
              style={{ color: 'var(--heading-color)', fontFamily: 'Raleway, sans-serif' }}
            >
              <span style={{ color: 'var(--accent-color)' }}>🏆</span> Certifications
            </h3>
            <div className="premium-card">
              <ul className="space-y-3 list-none p-0">
                <li>
                  <strong style={{ color: 'var(--heading-color)' }}>Claude Certified Architect</strong> – Foundations (Anthropic, 2024)
                </li>
                <li>
                  <strong style={{ color: 'var(--heading-color)' }}>Oracle Certified Professional Java SE 8</strong> (Oracle, 2024)
                </li>
                <li>
                  <strong style={{ color: 'var(--heading-color)' }}>Microsoft Azure Security Engineer Associate</strong> (Microsoft, 2024)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;