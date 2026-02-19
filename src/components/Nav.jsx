import React from 'react';

const rsvpUrl = import.meta.env.VITE_RSVP_URL || '#rsvp';
const hasRsvpLink = Boolean(import.meta.env.VITE_RSVP_URL);
const linkProps = hasRsvpLink
  ? { target: '_blank', rel: 'noreferrer noopener' }
  : {};

const Nav = () => (
  <header className="section" aria-label="site navigation">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontWeight: 700, letterSpacing: '0.3em' }}>KILN-AI</span>
      <a className="cta secondary" href={rsvpUrl} {...linkProps}>
        RSVP
      </a>
    </div>
  </header>
);

export default Nav;
