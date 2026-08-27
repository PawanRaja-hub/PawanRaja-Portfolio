import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Hero = () => {
  const { data } = usePortfolio();
  const roles = data.personal.typedItems || ['Designer', 'Developer', 'Freelancer', 'Photographer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[roleIndex] || '';
    const speed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const displayedText = roles[roleIndex]?.substring(0, charIndex) || '';

  return (
    <section id="hero" className="hero section dark-background">
      <img
        src="https://themewagon.github.io/iPortfolio/assets/img/hero-bg.jpg"
        alt="Hero Background"
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>{data.personal.sitename || 'Alex Smith'}</h2>
        <p>
          I'm{' '}
          <span className="typed" style={{ letterSpacing: '1px', borderBottom: '2px solid #149ddd' }}>
            {displayedText}
          </span>
          <span
            style={{
              display: 'inline-block',
              marginLeft: '2px',
              animation: 'blink 0.7s infinite',
              fontWeight: 300,
              color: '#149ddd',
            }}
          >
            |
          </span>
        </p>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;