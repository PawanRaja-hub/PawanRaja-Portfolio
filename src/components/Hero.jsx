import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../constants';
import { FaDownload, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export const Hero = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const textArray = [
    'AI-Native Java Backend Engineer',
    'Backend Systems Architect',
    'Spring Boot Specialist',
    'AI Integrator',
  ];

  useEffect(() => {
    const current = textArray[typingIndex];
    let timeout;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayed === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTypingIndex((prev) => (prev + 1) % textArray.length);
      }, 400);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
      }, 60);
    } else {
      timeout = setTimeout(() => {
        setDisplayed((prev) => current.slice(0, prev.length + 1));
      }, 120);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, typingIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-600/10" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        }}
      />

      <motion.div
        className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-blue-700/10 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 font-medium tracking-wider text-sm mb-4 uppercase">
            Hello, I'm
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            {personalInfo.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-16 sm:h-20 flex items-center justify-center mb-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            <span className="gradient-text">{displayed}</span>
            <motion.span
              className="inline-block w-0.5 h-8 sm:h-10 bg-blue-400 ml-1 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-300 text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
          >
            View Projects
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 hover:border-blue-400 text-blue-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-500/10"
          >
            <FaDownload className="w-4 h-4" />
            Download Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300"
          >
            <FaEnvelope className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;