import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories } from '../constants';

const Skills = () => {
  const [active, setActive] = useState('backend');

  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto px-8">
        <div className="section-title">
          <h2>Skills</h2>
          <p>Technologies and tools I work with on a daily basis.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: active === cat.key ? 'var(--accent-color)' : 'var(--bg-secondary)',
                color: active === cat.key ? '#fff' : 'var(--heading-color)',
                fontFamily: 'Raleway, sans-serif',
                border: '1px solid var(--border-color)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {skills[active]?.map((skill, idx) => (
            <motion.div
              key={`${active}-${skill.name}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="flex justify-between mb-2">
                <span
                  className="font-semibold text-sm"
                  style={{ color: 'var(--heading-color)', fontFamily: 'Raleway, sans-serif' }}
                >
                  {skill.icon && <span className="mr-2">{skill.icon}</span>}
                  {skill.name}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {skill.level}%
                </span>
              </div>
              <div className="skill-progress">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.05 + 0.2, ease: 'easeOut' }}
                  className="skill-progress-bar"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;