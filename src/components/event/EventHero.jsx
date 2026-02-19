import React from 'react';

const EventHero = () => {
  const rsvpUrl = import.meta.env.VITE_RSVP_URL || '#rsvp';
  const linkProps = rsvpUrl === '#rsvp' ? {} : { target: '_blank', rel: 'noreferrer noopener' };

  return (
    <section className="event-hero">
      <p className="hero-kicker">OpenClaw · Codex · Claude</p>
      <h1>AI workshop & technique sharing</h1>
      <p>
        Bring the apps you’ve built, show the automations you monitor, and swap prompts & models that
        keep your projects moving faster.
      </p>
      <div className="hero-cta">
        <a className="cta primary" href={rsvpUrl} {...linkProps}>
          RSVP now
        </a>
        <a className="cta secondary" href="/">
          Back to Encodible
        </a>
      </div>
      <div className="hero-meta">
        <article>
          <p className="hero-meta-label">When</p>
          <p className="hero-meta-detail">Wednesday, February 25 · 3:30 PM</p>
        </article>
        <article>
          <p className="hero-meta-label">Where</p>
          <p className="hero-meta-detail">Appaloosa conference room</p>
        </article>
        <article>
          <p className="hero-meta-label">Bring</p>
          <p className="hero-meta-detail">OpenClaw watches, Codex builds, Claude flows</p>
        </article>
      </div>
    </section>
  );
};

export default EventHero;
