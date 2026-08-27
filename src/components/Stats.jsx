import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { FaSmile, FaServer, FaAward, FaCheckCircle } from 'react-icons/fa';

const iconComponents = {
  smile: <FaSmile className="text-3xl text-sky-500" />,
  server: <FaServer className="text-3xl text-sky-500" />,
  award: <FaAward className="text-3xl text-sky-500" />,
  check: <FaCheckCircle className="text-3xl text-sky-500" />,
};

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1800;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white font-['Raleway']">
      {count}
      <span className="text-sky-500">{suffix}</span>
    </span>
  );
};

const Stats = () => {
  const { stats } = usePortfolio();
  return (
    <section id="stats" className="section section-bg">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="section-title">
          <h2>Facts &amp; Metrics</h2>
          <p>Key impact indicators and milestones delivered across enterprise backend and freelance projects.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-700/80 text-center flex flex-col items-center justify-center group hover:shadow-md hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="mb-3 p-3 rounded-full bg-sky-50 dark:bg-slate-700/60 group-hover:scale-110 transition-transform duration-300">
                {iconComponents[stat.icon] || <FaSmile className="text-3xl text-sky-500" />}
              </div>

              <Counter target={stat.value} suffix={stat.suffix} />

              <p className="mt-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-['Poppins']">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;