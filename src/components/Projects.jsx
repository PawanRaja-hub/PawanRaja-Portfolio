import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { FaEye, FaGithub, FaExternalLinkAlt, FaTimes, FaLayerGroup, FaCheck } from 'react-icons/fa';

const filterTabs = [
  { key: 'all', label: 'All' },
  { key: 'backend', label: 'Backend & APIs' },
  { key: 'web', label: 'Web & Full Stack' },
];

const Projects = () => {
  const { projects = [] } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModal, setActiveModal] = useState(null);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Featured projects demonstrating secure RESTful APIs, Spring Boot architectures,
            Spring AI integration, and production-ready implementations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="portfolio-filters mt-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`portfolio-filter-btn ${activeFilter === tab.key ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="portfolio-card flex flex-col justify-between"
              >
                {/* Image Container with Hover Overlay */}
                <div className="portfolio-img-wrap">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-2xl text-sky-400">
                      <FaLayerGroup />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                      {project.categoryLabel || project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="portfolio-overlay">
                    <button
                      onClick={() => setActiveModal(project)}
                      className="portfolio-action-btn"
                      title="View Details"
                    >
                      <FaEye />
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="portfolio-action-btn"
                      title="GitHub Source"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="portfolio-action-btn"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>

                  {project.featured && (
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500 text-white shadow-md">
                      Featured
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-100 font-['Raleway']">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Quick Button */}
                    <button
                      onClick={() => setActiveModal(project)}
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white transition-all text-center border border-sky-200 dark:border-sky-800/60"
                    >
                      Explore Project Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox / Details Modal */}
      <AnimatePresence>
        {activeModal && (
          <div
            className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-500">
                    {activeModal.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white font-['Raleway'] mt-1">
                    {activeModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {activeModal.description}
              </p>

              {/* Highlights */}
              <div className="mb-6 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 mb-3">
                  Key Technical Highlights
                </h4>
                <ul className="space-y-2 list-none p-0 m-0">
                  {activeModal.highlights.map((h, i) => (
                    <li key={i} className="flex items-center text-xs md:text-sm text-slate-600 dark:text-slate-300">
                      <FaCheck className="text-sky-500 mr-2 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModal.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={activeModal.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 transition-all shadow-md shadow-sky-500/20"
                >
                  <FaExternalLinkAlt /> <span>Live Preview</span>
                </a>
                <a
                  href={activeModal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-300 dark:border-slate-700"
                >
                  <FaGithub /> <span>Source Code</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;