import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../constants';

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="max-w-6xl mx-auto px-8">
        <div className="section-title">
          <h2>Certifications</h2>
          <p>Industry-recognized certifications validating my expertise.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="premium-card text-center"
            >
              <div
                className="mx-auto mb-4 flex items-center justify-center"
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  fontSize: '44px',
                }}
              >
                {cert.icon}
              </div>
              <h4
                className="text-lg font-bold mb-2"
                style={{ color: 'var(--heading-color)', fontFamily: 'Raleway, sans-serif' }}
              >
                {cert.name}
              </h4>
              <p
                className="text-sm font-medium"
                style={{ color: 'var(--accent-color)' }}
              >
                {cert.issuer}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: 'var(--text-secondary)' }}
              >
                Issued {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;