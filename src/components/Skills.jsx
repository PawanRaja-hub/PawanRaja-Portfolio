import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import { useStaggeredReveal, useScrollReveal } from '../hooks/useScrollReveal';
import { skills, skillCategories } from '../constants';

const levelMap = {
  Beginner: 25,
  Intermediate: 60,
  Advanced: 90,
};

const IconRenderer = ({ iconName }) => {
  const Icon = FaIcons[iconName] || FaIcons.FaCode;
  return <Icon className="w-6 h-6" />;
};

const Skills = () => {
  const { ref, controls } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('backend');

  const currentSkills = skills[activeCategory] || [];

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="relative max-w-6xl mx-auto">
        <div ref={ref} className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive view of my technical expertise across backend development, AI integration, and modern software architecture.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.map((category) => {
              const Icon = FaIcons[category.icon] || FaIcons.FaCode;
              return (
                <motion.button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category.key
                    ? 'bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'glass-card text-slate-300 hover:text-white'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </motion.button>
              );
            })}
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            key={activeCategory}
          >
            {currentSkills.map((skill, index) => {
              const Icon = FaIcons[skill.icon] || FaIcons.FaCode;
              const level = levelMap[skill.level] || 50;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="glass-card p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${skill.color}25, ${skill.color}10)`,
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: skill.color }} />
                      </div>
                      <h3 className="font-semibold text-white">{skill.name}</h3>
                    </div>
                    <span
                      className="text-xs font-medium px-2 py-1 rounded-full"
                      style={{
                        background: `${skill.color}20`,
                        color: skill.color,
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${level}%` }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, #3b82f6)`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;