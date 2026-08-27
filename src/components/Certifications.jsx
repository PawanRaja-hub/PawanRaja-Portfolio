import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { FaAward, FaFileAlt, FaShieldAlt, FaExternalLinkAlt } from 'react-icons/fa';

const iconMap = {
  award: <FaAward />,
  'file-text': <FaFileAlt />,
  shield: <FaShieldAlt />,
};

const Certifications = () => {
  const { certifications = [] } = usePortfolio();
  return (
    <section id="certifications" className="certifications section section-bg">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="section-title">
          <h2>Certifications</h2>
          <p>
            Industry-recognized credentials validating expertise in AI Architecture, Java SE, and Cloud Security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-700/80 text-center flex flex-col justify-between hover:border-sky-500/50 hover:shadow-md transition-all group"
            >
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-sky-50 dark:bg-slate-700/60 text-sky-500 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  {iconMap[cert.icon] || <FaAward />}
                </div>

                <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60">
                  {cert.badge}
                </span>

                <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white font-['Raleway']">
                  {cert.name}
                </h3>

                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mb-1 font-['Poppins']">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Issued {cert.year}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 group-hover:text-sky-500 transition-colors">
                  <span>Verified Credential</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;