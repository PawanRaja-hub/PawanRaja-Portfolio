import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Skills = () => {
  const { data } = usePortfolio();

  return (
    <section id="skills" className="skills section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{data.skills?.title || 'Skills'}</h2>
        <p>{data.skills?.description}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          {/* Left Column */}
          <div className="col-lg-6">
            {data.skills?.itemsLeft?.map((skill, idx) => (
              <div className="progress" key={idx}>
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.level}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.level}%` }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            {data.skills?.itemsRight?.map((skill, idx) => (
              <div className="progress" key={idx}>
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.level}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.level}%` }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;