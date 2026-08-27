import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, seoConfig } from '../constants';
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { MdArrowUpward } from 'react-icons/md';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 bg-[--color-bg]">
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
            aria-label="Back to top"
          >
            <MdArrowUpward className="w-6 h-6" />
          </motion.button>

          <div className="flex gap-6">
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>

            <motion.a
              href={personalInfo.naukri}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-white transition-all duration-300"
              aria-label="Naukri"
            >
              <FaBriefcase className="w-5 h-5" />
            </motion.a>

            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </motion.a>
          </div>

          <div className="border-t border-white/10 w-full" />

          <div className="text-center space-y-2">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Built with React, Tailwind CSS, and Framer Motion. Deployed on Cloudflare Pages.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;