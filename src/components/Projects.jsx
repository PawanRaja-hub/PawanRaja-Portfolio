import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const filterButtons = [
  { key: 'all', label: 'All' },
  { key: 'backend', label: 'Backend' },
  { key: 'web', label: 'Web' },
  { key: 'ai', label: 'AI' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto px-8">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Showcasing my best work and projects.</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveFilter(btn.key)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: activeFilter === btn.key ? 'var(--accent-color)' : 'transparent',
                color: activeFilter === btn.key ? '#fff' : 'var(--text-secondary)',
                border: `1px solid ${activeFilter === btn.key ? 'var(--accent-color)' : 'var(--border-color)'}`,
                fontFamily: 'Raleway, sans-serif',
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="premium-card overflow-hidden group"
                style={{ padding: 0 }}
              >
                {/* Image area */}
                <div
                  className="relative overflow-hidden cursor-pointer"
                  style={{ height: '220px' }}
                  onClick={() => setLightbox(project)}
                >
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #0a192f 0%, #172a45 100%)',
                    }}
                  >
                    <div className="text-center text-white">
                      <span className="text-5xl block mb-2">
                        {project.category === 'backend' ? '⚙️' : project.category === 'web' ? '🌐' : '🤖'}
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-wider opacity-60">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-4 transition-all"
                    style={{
                      background: 'rgba(5, 99, 187, 0.9)',
                      opacity: 0,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-dark transition-all hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                      style={{ color: 'var(--accent-color)' }}
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-dark transition-all hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                      style={{ color: 'var(--accent-color)' }}
                    >
                      <FaGithub />
                    </a>
                  </div>

                  {project.featured && (
                    <div
                      className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-bold text-white"
                      style={{ background: 'var(--accent-color)' }}
                    >
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4
                    className="font-bold text-lg mb-2"
                    style={{ color: 'var(--heading-color)', fontFamily: 'Raleway, sans-serif' }}
                  >
                    {project.title}
                  </h4>
                  <p
                    className="text-sm mb-4 line-clamp-3"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{
                          background: 'var(--bg-secondary)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span
                        className="px-2 py-1 rounded text-xs"
                        style={{ color: 'var(--accent-color)' }}
                      >
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-color)' }}>✓</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox modal */}
      {lightbox && (
        <div
          className="portfolio-lightbox"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="rounded-lg max-w-3xl w-full p-8"
            style={{ background: 'var(--card-bg)', maxHeight: '85vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold" style={{ color: 'var(--heading-color)' }}>
                {lightbox.title}
              </h3>
              <button
                onClick={() => setLightbox(null)}
                className="text-2xl leading-none"
                style={{ color: 'var(--text-secondary)' }}
              >
                ×
              </button>
            </div>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              {lightbox.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {lightbox.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ background: 'var(--accent-color)', color: '#fff' }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={lightbox.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded text-white font-medium"
                style={{ background: 'var(--accent-color)' }}
              >
                <FaExternalLinkAlt /> View Live
              </a>
              <a
                href={lightbox.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded font-medium"
                style={{
                  background: 'var(--bg-secondary)',
                  color: 'var(--heading-color)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <FaGithub /> Source Code
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;