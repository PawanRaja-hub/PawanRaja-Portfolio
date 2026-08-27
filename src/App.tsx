import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { useScrollProgress } from './hooks/useScrollProgress';

export const App: React.FC = () => {
  const { theme } = useTheme();
  const scrollProgress = useScrollProgress();

  return (
    <html
      lang="en"
      className={`${theme}-theme`}
    >
      <body className="min-h-screen">
        {/* Navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
          <div className="glass-card backdrop-blur-xl border-b border-white/5 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </span></span></svg>
                </div>
                <h1 className="text-xl font-bold text-white text-sm sm:text-2xl">
                  {personalInfo?.name || 'Portfolio'}
                </h1>
              </div>

              <nav className="hidden sm:flex items-center gap-8">
                <a href="#about" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">About</a>
                <a href="#skills" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Skills</a>
                <a href="#projects" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Projects</a>
                <a href="#experience" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Experience</a>
                <a href="#certifications" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Certifications</a>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Contact</a>
              </nav>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hidden sm:flex items-center gap-2 text-slate-300 text-sm hover:text-white transition-colors"
                  aria-label="Scroll to top"
                >
                  <MdArrowUpward className="w-4 h-4" />Top
                </button>

                <button
                  onClick={() => window.dispatchEvent(new Event('toggle-theme'))}
                  className="p-2 rounded-lg text-slate-300 hover:text-white transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12a8 8 0 10-16 0 8 8 0 0016 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12a8 8 0 10-16 0 8 8 0 0016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section id="about" className="relative py-20 px-4">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative py-20 px-4 bg-[--color-bg]">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-20 px-4">
          <Projects />
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative py-20 px-4">
          <Experience />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="relative py-20 px-4 bg-[--color-bg]">
          <Certifications />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-20 px-4">
          <Contact />
        </section>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
};