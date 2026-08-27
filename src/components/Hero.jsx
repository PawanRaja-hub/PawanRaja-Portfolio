import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Java Backend Engineer',
  'Spring Boot Developer',
  'AI Integrator',
  'REST API Architect',
  'Microservices Builder',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 500);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayed((prev) => current.slice(0, prev.length + 1));
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: 'linear-gradient(135deg, #f5f8fc 0%, #e8eef7 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            style={{
              fontFamily: 'Raleway, sans-serif',
              color: 'var(--heading-color)',
              lineHeight: 1.2,
            }}
          >
            Venkata Raja Pavan
            <br />
            <span style={{ color: 'var(--accent-color)' }}>Kumar Reddy Valila</span>
          </h1>

          <p
            className="text-xl md:text-2xl mt-4 font-medium"
            style={{
              fontFamily: 'Raleway, sans-serif',
              color: 'var(--heading-color)',
            }}
          >
            I'm a <span style={{ color: 'var(--accent-color)' }}>{displayed}</span>
            <span className="typed-cursor"></span>
          </p>

          <p
            className="text-base md:text-lg mt-6 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Building scalable Java backend systems with Spring Boot while integrating AI into real-world applications.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold transition-all"
              style={{
                background: 'var(--accent-color)',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '15px',
                boxShadow: '0 4px 15px rgba(5, 99, 187, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--accent-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all"
              style={{
                background: 'transparent',
                color: 'var(--heading-color)',
                border: '2px solid var(--accent-color)',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '15px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-color)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--heading-color)';
              }}
            >
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div
        className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </section>
  );
};

export default Hero;