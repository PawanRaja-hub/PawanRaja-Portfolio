import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import { certifications } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const IconRenderer = ({ iconName }) => {
  const Icon = FaIcons[iconName] || FaIcons.FaCode;
  return <Icon className="w-6 h-6" />;
};

const Certifications = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="certifications" className="relative py-20 px-4">
      <div className="relative max-w-6xl mx-auto">
        <div ref={ref} className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Certifications</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Industry-recognized certifications validating my expertise in Java, cloud security, and AI architecture.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => {
              const Icon = FaIcons[cert.icon] || FaIcons.FaCode;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 text-center cursor-pointer group hover:border-blue-500/50 transition-all duration-300"
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${cert.color}30, ${cert.color}10)`,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8" style={{ color: cert.color }} />
                  </motion.div>

                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                    {cert.name}
                  </h3>

                  <div className="flex justify-center items-center gap-2 mt-3 text-sm">
                    <span className="text-slate-400">Issued by</span>
                    <span className="font-medium text-white">{cert.issuer}</span>
                  </div>

                  <p className="text-blue-300 font-medium text-sm mt-2">{cert.year}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;