import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../constants';
import { FaChevronRight } from 'react-icons/fa';

const About = () => {
  const col1Facts = [
    { label: 'Experience', value: '2+ Years in Backend & Java' },
    { label: 'Website', value: personalInfo.website, isLink: true },
    { label: 'Phone', value: personalInfo.phone, link: `tel:${personalInfo.phone}` },
    { label: 'City', value: personalInfo.location },
  ];

  const col2Facts = [
    { label: 'Role', value: personalInfo.title },
    { label: 'Degree', value: personalInfo.degree },
    { label: 'Email', value: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { label: 'Freelance', value: personalInfo.freelance },
  ];

  return (
    <section id="about" className="about section">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Title */}
        <div className="section-title">
          <h2>About</h2>
          <p>
            Passionate software engineer specializing in scalable Java backend architectures,
            Spring Boot microservices, high-throughput REST APIs, and generative AI integration.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start mt-6">
          {/* Profile Photo Col */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative group rounded-xl overflow-hidden shadow-xl border-4 border-sky-500/20 bg-slate-900 max-w-sm w-full">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.parentElement) {
                    e.target.parentElement.innerHTML = `<div style="aspect-ratio:1;background:linear-gradient(135deg,#040b14,#149ddd);display:flex;align-items:center;justify-content:center;color:white;font-size:4rem;font-weight:bold;font-family:Raleway">${personalInfo.initials}</div>`;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-semibold tracking-wider uppercase">
                  {personalInfo.title}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content Col */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--heading-color)' }}>
              AI-Native Java Backend Engineer &amp; Systems Developer.
            </h3>
            
            <p className="italic text-base mb-6 text-sky-600 dark:text-sky-400 font-medium">
              "{personalInfo.tagline}"
            </p>

            {/* 2-Column Facts Grid */}
            <div className="grid sm:grid-cols-2 gap-y-3.5 gap-x-6 my-6 py-4 border-y border-slate-200 dark:border-slate-800">
              <ul className="space-y-3 list-none p-0 m-0">
                {col1Facts.map((fact, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <FaChevronRight className="text-sky-500 mr-2.5 text-xs flex-shrink-0" />
                    <strong className="mr-2 text-slate-800 dark:text-slate-200 font-semibold min-w-[90px]">
                      {fact.label}:
                    </strong>
                    {fact.isLink ? (
                      <a
                        href={fact.value}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-600 dark:text-sky-400 hover:underline truncate"
                      >
                        {fact.value.replace('https://', '')}
                      </a>
                    ) : fact.link ? (
                      <a href={fact.link} className="text-sky-600 dark:text-sky-400 hover:underline">
                        {fact.value}
                      </a>
                    ) : (
                      <span className="text-slate-600 dark:text-slate-400">{fact.value}</span>
                    )}
                  </li>
                ))}
              </ul>

              <ul className="space-y-3 list-none p-0 m-0">
                {col2Facts.map((fact, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <FaChevronRight className="text-sky-500 mr-2.5 text-xs flex-shrink-0" />
                    <strong className="mr-2 text-slate-800 dark:text-slate-200 font-semibold min-w-[90px]">
                      {fact.label}:
                    </strong>
                    {fact.link ? (
                      <a href={fact.link} className="text-sky-600 dark:text-sky-400 hover:underline">
                        {fact.value}
                      </a>
                    ) : (
                      <span className="text-slate-600 dark:text-slate-400">{fact.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-400 mt-4">
              {personalInfo.bio}
            </p>

            <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-400 mt-3">
              {personalInfo.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;