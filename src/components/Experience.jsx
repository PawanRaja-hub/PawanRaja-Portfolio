import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Experience = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="relative max-w-4xl mx-auto">
        <div ref={ref} className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A timeline of my professional journey building scalable backend systems and solving complex engineering challenges.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent -translate-x-1/2" />

            <div className="space-y-12">
              {experience.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div
                      className={`flex flex-col ${isLeft ? 'items-end text-right' : 'items-start text-left'}`}
                    >
                      <div className="glass-card p-6 max-w-sm w-full">
                        <span className="text-blue-400 font-medium text-sm">{item.period}</span>
                        <h3 className="text-xl font-bold text-white mt-1">{item.role}</h3>
                        <p className="text-slate-300 font-medium">{item.company}</p>
                        {item.location && (
                          <p className="text-slate-400 text-sm mt-1">{item.location}</p>
                        )}
                      </div>
                    </div>

                    <div className={`flex flex-col ${isLeft ? 'items-start text-left' : 'items-end text-right'}`}>
                      <div className="glass-card p-6 max-w-sm w-full">
                        <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                          {item.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-blue-400">●</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;