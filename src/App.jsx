import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalInfo } from './constants';
import { FaSun, FaMoon, FaDownload } from 'react-icons/fa';
import { MdArrowUpward } from 'react-icons/md';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
  }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('theme', newTheme);
      } catch (e) {
        // Ignore
      }
      return newTheme;
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a20] text-white">
      <div
        className="fixed top-0 left-0 right-0 h-1 z-50 transition-all duration-150"
        style={{
          background: `linear-gradient(to right, #3b82f6 ${scrollProgress}%, rgba(255,255,255,0.05) ${scrollProgress}%)`,
        }}
      />

      <nav className="fixed top-1 left-0 right-0 z-40 backdrop-blur-xl bg-[#0a0a20]/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white hidden sm:block">Venkata Raja</span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">About</a>
              <a href="#skills" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Skills</a>
              <a href="#projects" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Projects</a>
              <a href="#experience" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Experience</a>
              <a href="#certifications" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Certifications</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Contact</a>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </button>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transition-all"
              >
                <FaDownload className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/40 hover:scale-110 transition-all duration-300 z-40 flex items-center justify-center"
          aria-label="Back to top"
        >
          <MdArrowUpward className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;