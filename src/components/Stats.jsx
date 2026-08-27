import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Stats = () => {
  const { data } = usePortfolio();
  const [counts, setCounts] = useState({});

  useEffect(() => {
    if (!data.stats) return;

    data.stats.forEach((item) => {
      let current = 0;
      const target = item.count;
      const step = Math.ceil(target / 40) || 1;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts((prev) => ({ ...prev, [item.id]: current }));
      }, 30);
    });
  }, [data.stats]);

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {data.stats?.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className={`bi ${item.icon}`}></i>
                <span className="purecounter">{counts[item.id] ?? item.count}</span>
                <p>
                  <strong>{item.label}</strong> <span>{item.sublabel}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;