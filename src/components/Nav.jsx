import React from 'react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Writing', href: '#writing' }
];

const Nav = () => (
  <header className="site-header">
    <a className="brand" href="#top" aria-label="Encodible home">
      <span className="brand-symbol" aria-hidden="true">E</span>
      <span className="brand-copy">
        <span className="brand-name">Encodible</span>
        <span className="brand-tagline">Trust systems engineering</span>
      </span>
    </a>
    <nav className="site-nav desktop-nav" aria-label="Primary navigation">
      {links.map((link) => (
        <a key={link.label} href={link.href}>{link.label}</a>
      ))}
    </nav>
    <a className="button button-small header-cta" href="mailto:kent@encodible.com?subject=Project%20inquiry">
      Discuss a project
    </a>
    <details className="mobile-nav">
      <summary>Menu</summary>
      <nav aria-label="Mobile navigation">
        {links.map((link) => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
        <a href="mailto:kent@encodible.com?subject=Project%20inquiry">Discuss a project</a>
      </nav>
    </details>
  </header>
);

export default Nav;
