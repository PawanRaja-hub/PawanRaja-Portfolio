import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { FaLinkedinIn, FaGithub, FaBriefcase, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const { personalInfo } = usePortfolio();
  return (
    <footer className="py-10 text-center bg-[#040b14] text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center gap-3 mb-6">
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.socialLinks.naukri}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            aria-label="Naukri"
          >
            <FaBriefcase />
          </a>
          <a
            href={personalInfo.socialLinks.email}
            className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm mb-2 text-slate-400 font-['Poppins']">
          © {new Date().getFullYear()} <strong className="text-slate-200">{personalInfo.name}</strong>. All Rights Reserved.
        </p>

        <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <span>Crafted with</span>
          <FaHeart className="text-rose-500 text-[10px]" />
          <span>using React, Tailwind CSS &amp; iPortfolio Design Aesthetics</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;