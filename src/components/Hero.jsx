import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const roles = [
  'Java Backend Engineer',
  'Spring Boot Developer',
  'AI-Native Architect',
  'REST API Specialist',
  'Microservices Builder',
];

const Hero = () => {
  const { personalInfo } = usePortfolio();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 400);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayed((prev) => current.slice(0, prev.length + 1));
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/60 mb-4 uppercase">
            {personalInfo.title}
          </span>

          <h2>{personalInfo.name}</h2>

          <p>
            I'm <span className="typed-text">{displayed}</span>
            <span className="typed-cursor" />
          </p>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl mt-4 font-normal leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold transition-all bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 text-sm"
            >
              <span>Learn More</span>
              <FaArrowRight className="text-xs" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold transition-all border-2 border-sky-400/80 text-sky-300 hover:bg-sky-500 hover:text-white hover:border-sky-500 text-sm hover:-translate-y-0.5"
            >
              <span>Get In Touch</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold transition-all bg-slate-800/80 text-slate-200 hover:bg-slate-700 text-sm hover:-translate-y-0.5 border border-slate-700"
            >
              <FaDownload className="text-xs text-sky-400" />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glow Elements */}
      <div
        className="absolute top-1/4 right-10 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #149ddd 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </section>
  );
};

export default Hero;