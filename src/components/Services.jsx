import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';

const Services = () => {
  return (
    <section id="services" className="section section-bg">
      <div className="max-w-6xl mx-auto px-8">
        <div className="section-title">
          <h2>Services</h2>
          <p>What I can bring to your team or project.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="premium-card text-center"
            >
              <div className="mb-4 flex justify-center">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    fontSize: '36px',
                  }}
                >
                  {service.icon}
                </div>
              </div>
              <h4
                className="text-lg font-bold mb-3"
                style={{ color: 'var(--heading-color)', fontFamily: 'Raleway, sans-serif' }}
              >
                {service.title}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;