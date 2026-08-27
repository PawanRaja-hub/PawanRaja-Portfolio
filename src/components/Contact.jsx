import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { personalInfo } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Button, CopyButton } from './ui/Button';

export const Contact = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Let's connect! I'm always open to discussing backend engineering opportunities, collaborations, or just chatting about technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-white font-semibold mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-slate-300">{personalInfo.email}</p>
                    </div>
                    <CopyButton email={personalInfo.email} className="ml-auto" />
                  </div>

                  <div className="flex items-center gap-3">
                    <FaLinkedin className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-medium text-white">LinkedIn</p>
                      <p className="text-slate-300">
                        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-300 transition-colors">
                          linkedin.com/in/yourprofile
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaBriefcase className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-medium text-white">Naukri</p>
                      <p className="text-slate-300">
                        <a href={personalInfo.naukri} target="_blank" rel="noreferrer" className="hover:text-blue-300 transition-colors">
                          naukri.com/yourprofile
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaGithub className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-medium text-white">GitHub</p>
                      <p className="text-slate-300">
                        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-blue-300 transition-colors">
                          github.com/yourusername
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-white font-semibold mb-4">Quick Connect</h3>
                <p className="text-slate-300 mb-6">
                  Prefer to connect via social or professional networks? Here are the quickest ways to reach me.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" size="lg" onClick={() => window.open(personalInfo.linkedin, '_blank')}>
                    LinkedIn
                  </Button>
                  <Button variant="secondary" size="lg" onClick={() => window.open(personalInfo.naukri, '_blank')}>
                    Naukri
                  </Button>
                  <Button variant="secondary" size="lg" onClick={() => window.open(personalInfo.github, '_blank')}>
                    GitHub
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => { window.location.href = `mailto:${personalInfo.email}`; }}>
                    Email Me
                  </Button>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4">Send a Message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = `mailto:${personalInfo.email}?subject=Portfolio%20Contact&body=${encodeURIComponent(e.target.message.value || '')}`;
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-transparent focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0a0a20] bg-white/5 text-white placeholder-slate-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-transparent focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0a0a20] bg-white/5 text-white placeholder-slate-400"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border border-transparent focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0a0a20] bg-white/5 text-white placeholder-slate-400 resize-none"
                />
                <Button variant="primary" size="lg" type="submit" className="glow-button w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
