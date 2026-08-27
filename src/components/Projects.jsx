import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Button } from './ui/Button';

const Projects = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="relative max-w-6xl mx-auto">
        <div ref={ref} className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Selected projects showcasing my work with Java backend systems, AI integration, and modern cloud deployment.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const isFeatured = project.featured;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (project.id - 1) * 0.1, duration: 0.5 }}
                  className="glass-card p-6 hover:translate-y-[-4px] transition-all duration-300"
                >
                  <div className="relative h-64 mb-4 overflow-hidden rounded-xl">
                    {isFeatured && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-b from-[--color-bg]/50 to-transparent ${project.featured ? 'from-blue-500/20' : ''}`}
                        style={{
                          background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.2), transparent)',
                        }}
                      />
                    )}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ opacity: 0.7 }}
                      />
                    )}
                    {!project.image && (
                      <motion.div
                        className={`absolute inset-0 w-full h-full rounded-xl ${project.featured ? 'bg-gradient-to-br from-blue-500/30' : 'bg-blue-500/20'} animate-gradient`}
                        style={{
                          background: isFeatured ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(30, 58, 138, 0.3))' : 'rgba(0, 100, 200, 0.15)',
                        }}
                      />
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4 lines-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={tech}
                          className={`inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs text-blue-300 transition-all duration-300 ${isFeatured ? 'hover:bg-blue-500/20 hover:text-white' : 'hover:bg-blue-500/20'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {isFeatured && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <h4 className="font-medium text-white mb-1">Highlights:</h4>
                        <ul className="text-xs text-slate-300 space-y-1">
                          {project.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button
                      variant="secondary"
                      size="sm"
                      style={{ marginTop: '1rem', textTransform: 'none' }}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      View Project
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {projects.some((p) => p.featured) && (
            <div className="text-center mt-8">
              <Button
                variant="primary"
                size="lg"
                className="glow-button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;