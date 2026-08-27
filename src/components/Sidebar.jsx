import React, { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '../constants';
import { FaLinkedin, FaGithub, FaBriefcase, FaEnvelope, FaSun, FaMoon, FaDownload } from 'react-icons/fa';

const Sidebar = () => {
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.id);
      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className="nav-menu"
        id="nav-menu"
        style={{
          width: '300px',
          padding: '40px 30px',
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Profile photo */}
        <div className="text-center mb-8">
          <div
            className="mx-auto mb-4 overflow-hidden"
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              border: '8px solid #2c2f3f',
              boxShadow: '0 0 20px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;background:linear-gradient(135deg,#0563bb,#149ddd);display:flex;align-items:center;justify-content:center;color:white;font-size:48px;font-weight:700;font-family:Raleway">${personalInfo.initials}</div>`;
              }}
            />
          </div>
          <h1
            className="font-bold text-xl mb-1"
            style={{ color: 'var(--heading-color)', fontFamily: 'Raleway, sans-serif' }}
          >
            {personalInfo.shortName}
          </h1>
          <p
            className="text-sm italic"
            style={{ color: 'var(--text-secondary)', fontSize: '14px' }}
          >
            {personalInfo.title}
          </p>

          {/* Social icons */}
          <div className="flex justify-center gap-3 mt-5">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center transition-all hover:-translate-y-1"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--accent-color)',
                color: '#fff',
                fontSize: '14px',
              }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center transition-all hover:-translate-y-1"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--accent-color)',
                color: '#fff',
                fontSize: '14px',
              }}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.socialLinks.naukri}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center transition-all hover:-translate-y-1"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--accent-color)',
                color: '#fff',
                fontSize: '14px',
              }}
              aria-label="Naukri"
            >
              <FaBriefcase />
            </a>
            <a
              href={personalInfo.socialLinks.email}
              className="flex items-center justify-center transition-all hover:-translate-y-1"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--accent-color)',
                color: '#fff',
                fontSize: '14px',
              }}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="mt-8">
          <ul className="space-y-1 list-none p-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all"
                  style={{
                    color: active === link.id ? '#fff' : 'var(--text-secondary)',
                    background: active === link.id ? 'var(--accent-color)' : 'transparent',
                    fontFamily: 'Raleway, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    if (active !== link.id) {
                      e.currentTarget.style.color = 'var(--heading-color)';
                      e.currentTarget.style.background = 'var(--bg-secondary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (active !== link.id) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <span style={{ fontSize: '18px' }}>{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme toggle + Resume download */}
        <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-medium transition-all"
            style={{
              background: 'var(--bg-secondary)',
              color: 'var(--heading-color)',
              fontFamily: 'Raleway, sans-serif',
            }}
          >
            {theme === 'light' ? <><FaMoon /> Dark Mode</> : <><FaSun /> Light Mode</>}
          </button>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-medium transition-all"
            style={{
              background: 'var(--accent-color)',
              color: '#fff',
              fontFamily: 'Raleway, sans-serif',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent-color)')}
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs" style={{ color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} {personalInfo.shortName}
        </div>
      </header>

      <style>{`
        @media (max-width: 1199px) {
          .nav-menu {
            left: -300px !important;
          }
          .nav-menu.active {
            left: 0 !important;
          }
        }
        @media (min-width: 1200px) {
          .nav-menu {
            left: 0 !important;
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;