import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import LiveEditor from './components/LiveEditor';
import { usePortfolio } from './context/PortfolioContext';

function App() {
  const [headerShow, setHeaderShow] = useState(false);
  const { setIsEditorOpen } = usePortfolio();

  return (
    <div className="portfolio-app">
      {/* Header / Sidebar */}
      <Sidebar headerShow={headerShow} setHeaderShow={setHeaderShow} />

      {/* Main Content Area */}
      <main className="main">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Resume />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollTop />

      {/* Floating Quick Edit Trigger Button (Bottom Left) */}
      <button
        onClick={() => setIsEditorOpen(true)}
        style={{
          position: 'fixed',
          left: '15px',
          bottom: '15px',
          zIndex: 9999,
          background: '#040b14',
          color: '#ffffff',
          border: '1px solid #149ddd',
          borderRadius: '50px',
          padding: '8px 16px',
          fontSize: '12px',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.3s',
        }}
        title="Open Live Portfolio Details Editor"
      >
        <i className="bi bi-gear-fill" style={{ color: '#149ddd', fontSize: '14px' }}></i>
        <span>Edit Portfolio Data</span>
      </button>

      {/* Live Data Editor Drawer */}
      <LiveEditor />
    </div>
  );
}

export default App;