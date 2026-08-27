import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../constants';

const About = () => {
  const facts = [
    { label: 'Name', value: personalInfo.name },
    { label: 'Role', value: personalInfo.title },
    { label: 'Email', value: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { label: 'Phone', value: personalInfo.phone },
    { label: 'City', value: personalInfo.location },
    { label: 'Degree', value: personalInfo.degree },
  ];

  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto px-8">
        <div className="section-title">
          <h2>About</h2>
          <p>Learn more about me and my professional background.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="rounded-lg w-full shadow-lg"
              style={{ maxWidth: '100%' }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: 'var(--heading-color)', fontFamily: 'Raleway, sans-serif' }}
            >
              AI-Native Java Backend Engineer
            </h3>
            <p
              className="italic mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              {personalInfo.tagline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {facts.map((fact, idx) => (
                <div key={idx} className="flex flex-col">
                  <span
                    className="text-xs uppercase font-semibold"
                    style={{ color: 'var(--heading-color)' }}
                  >
                    {fact.label}
                  </span>
                  {fact.link ? (
                    <a
                      href={fact.link}
                      className="text-sm hover:underline"
                      style={{ color: 'var(--accent-color)' }}
                    >
                      {fact.value}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {fact.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p
              className="mt-6 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {personalInfo.bio}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;