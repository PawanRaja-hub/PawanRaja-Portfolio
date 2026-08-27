import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Resume = () => {
  const { data } = usePortfolio();

  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{data.resume?.title || 'Resume'}</h2>
        <p>{data.resume?.description}</p>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column: Summary & Education */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>{data.resume?.summary?.name || 'Brandon Johnson'}</h4>
              <p>
                <em>{data.resume?.summary?.text}</em>
              </p>
              <ul>
                {data.resume?.summary?.items?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {data.resume?.education?.map((edu) => (
              <div className="resume-item" key={edu.id}>
                <h4>{edu.degree}</h4>
                <h5>{edu.period}</h5>
                <p>
                  <em>{edu.institution}</em>
                </p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Professional Experience */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            {data.resume?.experience?.map((exp) => (
              <div className="resume-item" key={exp.id}>
                <h4>{exp.role}</h4>
                <h5>{exp.period}</h5>
                <p>
                  <em>{exp.institution}</em>
                </p>
                <ul>
                  {exp.bullets?.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;