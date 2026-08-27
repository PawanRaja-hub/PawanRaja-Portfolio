import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { FaServer, FaShieldAlt, FaBrain, FaDatabase, FaLayerGroup, FaCloud } from 'react-icons/fa';

const iconMap = {
  server: <FaServer />,
  shield: <FaShieldAlt />,
  cpu: <FaBrain />,
  database: <FaDatabase />,
  layers: <FaLayerGroup />,
  cloud: <FaCloud />,
};

const Services = () => {
  const { services = [] } = usePortfolio();
  return (
    <section id="services" className="services section section-bg">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Specialized engineering capabilities offered for product companies, enterprise systems,
            and scalable backend architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="service-card"
            >
              <div className="service-icon">
                {iconMap[service.icon] || <FaServer />}
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100 font-['Raleway']">
                {service.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0">
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