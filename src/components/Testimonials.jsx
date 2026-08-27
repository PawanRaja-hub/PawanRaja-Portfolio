import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Testimonials = () => {
  const { data } = usePortfolio();
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = data.testimonials?.items || [];

  return (
    <section id="testimonials" className="testimonials section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{data.testimonials?.title || 'Testimonials'}</h2>
        <p>{data.testimonials?.description}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {items.map((item, idx) => (
            <div key={item.id || idx} className="col-lg-4 col-md-6">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{item.quote}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img
                  src={item.image}
                  className="testimonial-img"
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = 'https://themewagon.github.io/iPortfolio/assets/img/testimonials/testimonials-1.jpg';
                  }}
                />
                <h3>{item.name}</h3>
                <h4>{item.role}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
