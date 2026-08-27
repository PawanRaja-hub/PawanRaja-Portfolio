import React, { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '../constants';
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaImages,
  FaServer,
  FaQuoteRight,
  FaAward,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaBriefcase,
  FaTwitter,
  FaMoon,
  FaSun,
  FaDownload,
} from 'react-icons/fa';

const iconMap = {
  house: <FaHome />,
  person: <FaUser />,
  'file-earmark-text': <FaFileAlt />,
  images: <FaImages />,
  'hdd-stack': <FaServer />,
  'chat-quote': <FaQuoteRight />,
  award: <FaAward />,
  envelope: <FaEnvelope />,
};

const Sidebar = ({ onClose }) => {
  const [active, setActive] = useState('hero');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  // Scrollspy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.id);
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const top = target.offsetTop;
      window.scrollTo({ top, behavior: 'smooth' });
      if (onClose) onClose();
    }
  };

  return (
    <header className="iportfolio-sidebar" id="header">
      <div>
        {/* Profile Image */}
        <div className="profile-img">
          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              if (e.target.parentElement) {
                e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;background:linear-gradient(135deg,#149ddd,#0563bb);display:flex;align-items:center;justify-content:center;color:white;font-size:36px;font-weight:700;font-family:Raleway">${personalInfo.initials}</div>`;
              }
            }}
          />
        </div>

        {/* Sitename */}
        <h1 className="sitename">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>
            {personalInfo.shortName}
          </a>
        </h1>

        {/* Social Links */}
        <div className="social-links text-center mb-4">
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.socialLinks.naukri}
            target="_blank"
            rel="noreferrer"
            aria-label="Naukri"
            title="Naukri Profile"
          >
            <FaBriefcase />
          </a>
          <a
            href={personalInfo.socialLinks.email}
            aria-label="Email"
            title="Send Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Navmenu */}
        <nav id="navmenu" className="navmenu">
          <ul>
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={isActive ? 'active' : ''}
                  >
                    <span>{iconMap[link.icon] || <FaHome />}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Sidebar Footer Controls */}
      <div className="mt-8 pt-4 border-t border-slate-800 text-center">
        <div className="flex gap-2 mb-3">
          <button
            onClick={toggleTheme}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-all"
            title="Toggle theme"
          >
            {theme === 'light' ? (
              <>
                <FaMoon className="text-sky-400" /> <span>Dark</span>
              </>
            ) : (
              <>
                <FaSun className="text-amber-400" /> <span>Light</span>
              </>
            )}
          </button>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-all shadow-md shadow-sky-600/30"
          >
            <FaDownload /> <span>Resume</span>
          </a>
        </div>

        <p className="text-[11px] text-slate-400 m-0">
          © {new Date().getFullYear()} <strong className="text-slate-200">{personalInfo.shortName}</strong>
        </p>
      </div>
    </header>
  );
};

export default Sidebar;