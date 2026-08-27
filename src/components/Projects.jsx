import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Projects = () => {
  const { data } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState('All');
  const [modalItem, setModalItem] = useState(null);

  const filters = data.portfolio?.filters || ['All', 'App', 'Card', 'Web'];
  const items = data.portfolio?.items || [];

  const filteredItems =
    activeFilter === 'All'
      ? items
      : items.filter(
          (item) =>
            item.category?.toLowerCase() === activeFilter.toLowerCase() ||
            item.filterKey?.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section id="portfolio" className="portfolio section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{data.portfolio?.title || 'Portfolio'}</h2>
        <p>{data.portfolio?.description}</p>
      </div>

      <div className="container">
        <div className="isotope-layout">
          {/* Portfolio Filter Tabs */}
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            {filters.map((filter) => (
              <li
                key={filter}
                className={activeFilter === filter ? 'filter-active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </li>
            ))}
          </ul>

          {/* Portfolio Items Grid */}
          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-content h-100">
                  <img
                    src={item.image}
                    className="img-fluid"
                    alt={item.title}
                    style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = 'https://themewagon.github.io/iPortfolio/assets/img/portfolio/app-1.jpg';
                    }}
                  />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault();
                        setModalItem(item);
                      }}
                      title="Preview Image"
                      className="preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault();
                        setModalItem(item);
                      }}
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Details Modal */}
      {modalItem && (
        <div
          onClick={() => setModalItem(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100000,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '8px',
              maxWidth: '650px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            }}
          >
            <img
              src={modalItem.image}
              alt={modalItem.title}
              style={{ width: '100%', maxHeight: '350px', objectFit: 'cover' }}
            />
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#050d18' }}>
                  {modalItem.title}
                </h3>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    background: '#149ddd',
                    color: '#fff',
                  }}
                >
                  {modalItem.category}
                </span>
              </div>
              <p style={{ margin: '16px 0', color: '#4b5563', fontSize: '15px', lineHeight: 1.6 }}>
                {modalItem.description}
              </p>
              <div style={{ textAlign: 'right' }}>
                <button
                  onClick={() => setModalItem(null)}
                  style={{
                    padding: '8px 24px',
                    background: '#040b14',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontSize: '13px',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;