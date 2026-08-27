import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';

const Skills = () => {
  const { skills } = usePortfolio();
  const backendSkills = skills?.backend || [];
  const dbToolsSkills = skills?.databasesAndTools || [];

  return (
    <section id="skills" className="skills section">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Proficiency and hands-on technical competencies across Java enterprise backends,
            microservices, cloud technologies, databases, and AI pipelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mt-8">
          {/* Left Column: Backend & Architecture */}
          <div>
            {backendSkills.map((skill, idx) => (
              <div key={skill.name} className="progress-wrap">
                <div className="progress-title">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress-bar-bg">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                    className="progress-bar-fill"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Databases, Tools & Cloud */}
          <div>
            {dbToolsSkills.map((skill, idx) => (
              <div key={skill.name} className="progress-wrap">
                <div className="progress-title">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress-bar-bg">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                    className="progress-bar-fill"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;