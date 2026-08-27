import React from 'react';
import { personalInfo } from '../constants';
import { FaLinkedin, FaGithub, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="py-8 text-center"
      style={{
        background: '#0a192f',
        color: 'rgba(255,255,255,0.6)',
      }}
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-center gap-4 mb-6">
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center transition-all hover:-translate-y-1"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.3)',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            <FaLinkedin />
          </a>
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center transition-all hover:-translate-y-1"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.3)',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.socialLinks.naukri}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center transition-all hover:-translate-y-1"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.3)',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            <FaBriefcase />
          </a>
          <a
            href={personalInfo.socialLinks.email}
            className="flex items-center justify-center transition-all hover:-translate-y-1"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.3)',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
          © {new Date().getFullYear()} <span style={{ color: 'rgba(255,255,255,0.8)' }}>{personalInfo.shortName}</span>. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Built with React, Tailwind CSS & Framer Motion • Deployed on Cloudflare Pages
        </p>
      </div>
    </footer>
  );
};

export default Footer;