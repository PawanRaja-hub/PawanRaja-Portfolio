import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaBars, FaTimes, FaArrowUp } from 'react-icons/fa';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      {/* Top scroll progress indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-sky-500 z-[10002] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Hamburger Toggle Button (iPortfolio style) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="xl:hidden fixed top-4 right-4 z-[10001] w-11 h-11 rounded-full bg-sky-500 text-white flex items-center justify-center text-xl shadow-lg shadow-sky-500/30 cursor-pointer border-none transition-transform hover:scale-105"
        aria-label="Toggle Navigation"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Backdrop overlay on mobile */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[9996] xl:hidden"
        />
      )}

      {/* Sidebar Navigation */}
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main Content Area */}
      <main className="main-content min-h-screen">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Resume />
        <Projects />
        <Services />
        <Testimonials />
        <Certifications />
        <Contact />
        <Footer />
      </main>

      {/* Back to top floating button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'active' : ''}`}
        aria-label="Back to Top"
        title="Back to Top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;