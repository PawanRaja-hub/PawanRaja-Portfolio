import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  const { personalInfo, experience, education, certifications } = usePortfolio();
  return (
    <section id="resume" className="resume section section-bg">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            Summary of professional background, enterprise work experience at TCS, academic credentials,
            and industry-standard certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-12 mt-6">
          {/* Left Column: Summary & Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Summary */}
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-4">
              <h4>{personalInfo.name}</h4>
              <p className="italic text-slate-600 dark:text-slate-400 mb-3">
                {personalInfo.bio}
              </p>
              <ul>
                <li><strong>Location:</strong> {personalInfo.location}</li>
                <li><strong>Phone:</strong> {personalInfo.phone}</li>
                <li><strong>Email:</strong> {personalInfo.email}</li>
                <li><strong>Focus:</strong> Java, Spring Boot, Spring Security, AI Integration</li>
              </ul>
            </div>

            {/* Education */}
            <h3 className="resume-title">Education</h3>
            {education.map((edu) => (
              <div key={edu.id} className="resume-item">
                <h4>{edu.degree}</h4>
                <h5>{edu.period}</h5>
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  <em>{edu.institution}</em>
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  {edu.description}
                </p>
              </div>
            ))}

            {/* Certifications Overview */}
            <h3 className="resume-title">Credentials</h3>
            {certifications.map((cert) => (
              <div key={cert.id} className="resume-item">
                <h4>{cert.name}</h4>
                <h5>{cert.year}</h5>
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  <em>{cert.issuer}</em>
                </p>
                <span className="inline-block mt-2 px-2.5 py-0.5 rounded text-xs font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                  {cert.badge}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="resume-title">Professional Experience</h3>
            {experience.map((exp) => (
              <div key={exp.id} className="resume-item">
                <h4>{exp.role}</h4>
                <h5>{exp.period}</h5>
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  <em>{exp.company} — {exp.location}</em>
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-2 mb-3">
                  {exp.description}
                </p>
                <ul>
                  {exp.achievements.map((achieve, i) => (
                    <li key={i}>{achieve}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-8 pt-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold transition-all bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 text-sm"
              >
                <FaDownload /> <span>Download Complete Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;