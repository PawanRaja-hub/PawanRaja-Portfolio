import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaBriefcase, FaCode, FaCalendarAlt } from 'react-icons/fa';
import { personalInfo } from '../constants';
import { Button } from './ui/Button';

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            A passionate backend engineer building the next generation of AI-integrated systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              I am a Java Backend Engineer with 2+ years of experience building secure, scalable backend systems using Java, Spring Boot, Spring Security, REST APIs, SQL, and AI-integrated backend development.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              I enjoy solving backend problems, designing APIs, and building production-quality systems.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My goal is to transition into a high-paying product-based Java Backend Engineering role.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="text-white font-medium">{personalInfo.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <FaBriefcase className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Current Role</p>
                <p className="text-white font-medium">Systems Engineer at TCS</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <FaCode className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Focus</p>
                <p className="text-white font-medium">Java Backend + AI Integration</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <FaCalendarAlt className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Experience</p>
                <p className="text-white font-medium">2+ Years</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <FaEnvelope className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-white font-medium hover:text-blue-300 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;