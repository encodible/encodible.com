import React from 'react';

const FooterCTA = () => {
  const rsvpUrl = import.meta.env.VITE_RSVP_URL || '#rsvp';
  const hasLink = Boolean(import.meta.env.VITE_RSVP_URL);
  const linkProps = hasLink ? { target: '_blank', rel: 'noreferrer noopener' } : {};

  return (
    <section className="footer-cta">
      <p className="rsvp-pill">Wednesday, February 25 · 3:30 PM · Appaloosa</p>
      <p>Reserve your seat for the AI technique sharing workshop.</p>
      <a href={rsvpUrl} className="cta primary" {...linkProps}>
        RSVP and share your build
      </a>
    </section>
  );
};

export default FooterCTA;
