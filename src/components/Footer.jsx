import React from 'react';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-brand">
      <a className="brand" href="#top" aria-label="Encodible home">
        <span className="brand-symbol" aria-hidden="true">E</span>
        <span className="brand-copy">
          <span className="brand-name">Encodible</span>
          <span className="brand-tagline">Trust systems engineering</span>
        </span>
      </a>
      <p>Specialist software consulting by Kent Bull.</p>
    </div>
    <div className="footer-links">
      <a href="#services">Services</a>
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="https://www.kentbull.com" target="_blank" rel="noreferrer noopener">Writing ↗</a>
      <a href="mailto:hello@encodible.com">hello@encodible.com</a>
    </div>
    <p className="copyright">© {new Date().getFullYear()} Encodible</p>
  </footer>
);

export default Footer;
