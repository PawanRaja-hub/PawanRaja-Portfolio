import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Sidebar = ({ headerShow, setHeaderShow }) => {
  const { data, setIsEditorOpen } = usePortfolio();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'resume', 'portfolio', 'services', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: 'bi-house' },
    { id: 'about', label: 'About', icon: 'bi-person' },
    { id: 'resume', label: 'Resume', icon: 'bi-file-earmark-text' },
    { id: 'portfolio', label: 'Portfolio', icon: 'bi-images' },
    { id: 'services', label: 'Services', icon: 'bi-hdd-stack' },
    { id: 'testimonials', label: 'Testimonials', icon: 'bi-chat-quote' },
    { id: 'contact', label: 'Contact', icon: 'bi-envelope' },
  ];

  return (
    <header
      id="header"
      className={`header dark-background d-flex flex-column ${headerShow ? 'header-show' : ''}`}
    >
      <i
        className={`header-toggle d-xl-none bi ${headerShow ? 'bi-x' : 'bi-list'}`}
        onClick={() => setHeaderShow(!headerShow)}
        style={{ cursor: 'pointer' }}
      ></i>

      <div className="profile-img">
        <img
          src={data.personal.avatar || '/pawan-photo.jpg'}
          alt={data.personal.sitename || 'Profile'}
          className="img-fluid rounded-circle"
          onError={(e) => {
            e.target.src = 'https://themewagon.github.io/iPortfolio/assets/img/my-profile-img.jpg';
          }}
        />
      </div>

      <a href="#hero" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">{data.personal.sitename || 'Alex Smith'}</h1>
      </a>

      <div className="social-links text-center">
        {data.personal.socialLinks?.twitter && (
          <a href={data.personal.socialLinks.twitter} target="_blank" rel="noreferrer" className="twitter" aria-label="Twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
        )}
        {data.personal.socialLinks?.facebook && (
          <a href={data.personal.socialLinks.facebook} target="_blank" rel="noreferrer" className="facebook" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
        )}
        {data.personal.socialLinks?.instagram && (
          <a href={data.personal.socialLinks.instagram} target="_blank" rel="noreferrer" className="instagram" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
        )}
        {data.personal.socialLinks?.linkedin && (
          <a href={data.personal.socialLinks.linkedin} target="_blank" rel="noreferrer" className="linkedin" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        )}
        {data.personal.socialLinks?.github && (
          <a href={data.personal.socialLinks.github} target="_blank" rel="noreferrer" className="github" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
        )}
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => setHeaderShow(false)}
              >
                <i className={`bi ${item.icon} navicon`}></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Live edit button inside sidebar */}
      <div className="mt-auto pb-3 text-center">
        <button
          onClick={() => setIsEditorOpen(true)}
          className="btn btn-sm btn-outline-info text-white w-100 py-2 d-flex align-items-center justify-content-center gap-2"
          style={{
            fontSize: '13px',
            borderRadius: '50px',
            borderColor: '#149ddd',
            background: 'rgba(20, 157, 221, 0.15)',
          }}
        >
          <i className="bi bi-pencil-square"></i>
          <span>Edit Portfolio Details</span>
        </button>
      </div>
    </header>
  );
};

export default Sidebar;