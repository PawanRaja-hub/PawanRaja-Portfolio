import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Footer = () => {
  const { data } = usePortfolio();

  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span>{' '}
            <strong className="px-1 sitename">{data.personal.sitename || 'iPortfolio'}</strong>{' '}
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="credits">
          Designed by{' '}
          <a href="https://bootstrapmade.com/" target="_blank" rel="noreferrer">
            BootstrapMade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;