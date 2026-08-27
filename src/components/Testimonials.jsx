import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../constants';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>
            Endorsements and feedback from team leads, managers, and project collaborators regarding technical delivery and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800/80 p-7 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-700/80 flex flex-col justify-between relative hover:border-sky-500/50 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex text-amber-400 mb-4 text-xs gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <div className="text-sky-500 text-2xl mb-3 opacity-40">
                  <FaQuoteLeft />
                </div>

                <p className="text-sm italic text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-sky-500/20 flex items-center justify-center font-bold text-sky-600 dark:text-sky-400 flex-shrink-0 border-2 border-sky-500/30">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    item.name.charAt(0)
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white font-['Raleway']">
                    {item.name}
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
