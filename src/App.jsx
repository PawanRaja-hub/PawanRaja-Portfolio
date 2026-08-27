import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaBars } from 'react-icons/fa';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on link click
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    const links = document.querySelectorAll('#nav-menu a');
    links.forEach((link) => link.addEventListener('click', closeMenu));
    return () => links.forEach((link) => link.removeEventListener('click', closeMenu));
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Progress bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          background: 'var(--accent-color)',
          width: `${scrollProgress}%`,
          zIndex: 10002,
          transition: 'width 0.1s ease',
        }}
      />

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          position: 'fixed',
          top: '15px',
          left: '15px',
          zIndex: 10001,
          background: 'var(--accent-color)',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          padding: '10px 12px',
          cursor: 'pointer',
          fontSize: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <span style={{ fontSize: '20px', lineHeight: 1 }}>✕</span>
        ) : (
          <>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#fff' }} />
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#fff' }} />
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#fff' }} />
          </>
        )}
      </button>

      {/* Overlay for mobile */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 9996,
          }}
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: menuOpen ? 0 : '-300px',
          bottom: 0,
          width: '300px',
          zIndex: 9997,
          transition: 'left 0.3s ease',
        }}
        id="nav-menu"
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <main
        style={{
          marginLeft: '300px',
          minHeight: '100vh',
          transition: 'margin-left 0.3s ease',
        }}
      >
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Resume />
        <Projects />
        <Services />
        <Certifications />
        <Contact />
        <Footer />
      </main>

      <style>{`
        @media (max-width: 1199px) {
          main {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;