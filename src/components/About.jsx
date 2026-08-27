import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const About = () => {
  const { data } = usePortfolio();

  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{data.about.title || 'About'}</h2>
        <p>{data.about.description}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
              src={data.about.image || data.personal.avatar || '/pawan-photo.jpg'}
              className="img-fluid"
              alt="About"
              onError={(e) => {
                e.target.src = 'https://themewagon.github.io/iPortfolio/assets/img/my-profile-img.jpg';
              }}
            />
          </div>

          <div className="col-lg-8 content">
            <h2>{data.about.heading || 'UI/UX Designer & Web Developer.'}</h2>
            <p className="fst-italic py-3">{data.about.italicText}</p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {data.about.detailsCol1?.map((item, idx) => (
                    <li key={idx}>
                      <i className="bi bi-chevron-right"></i>{' '}
                      <strong>{item.label}:</strong>{' '}
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-lg-6">
                <ul>
                  {data.about.detailsCol2?.map((item, idx) => (
                    <li key={idx}>
                      <i className="bi bi-chevron-right"></i>{' '}
                      <strong>{item.label}:</strong>{' '}
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="py-3">{data.about.footerText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;