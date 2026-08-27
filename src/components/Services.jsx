import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Services = () => {
  const { data } = usePortfolio();

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{data.services?.title || 'Services'}</h2>
        <p>{data.services?.description}</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {data.services?.items?.map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon flex-shrink-0">
                <i className={`bi ${item.icon}`}></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#!" onClick={(e) => e.preventDefault()} className="stretched-link">
                    {item.title}
                  </a>
                </h4>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;