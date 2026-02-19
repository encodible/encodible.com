import React from 'react';

const rsvpUrl = import.meta.env.VITE_RSVP_URL || '#rsvp';
const hasRsvpLink = Boolean(import.meta.env.VITE_RSVP_URL);

const linkProps = hasRsvpLink
  ? { 'target': '_blank', 'rel': 'noreferrer noopener' }
  : {};

const Hero = () => (
  <section className="hero">
    <div className="badge">OpenClaw • Codex • Claude</div>
    <h1>AI Workshop & Technique Exchange · February 25, 2026</h1>
    <p>
      OpenClaw + Codex + Claude builders meet in the Appaloosa conference room to demo apps, compare
      automation patterns, and stack ways to ship faster.
    </p>
    <div className="cta-group">
      <a href={rsvpUrl} className="cta primary" {...linkProps}>
        RSVP Now
      </a>
      <a href="#agenda" className="cta secondary">
        View Agenda
      </a>
    </div>
    <div className="hero-grid">
      <article className="hero-card">
        <p className="time-chip">Wednesday · 3:30 PM</p>
        <h3>Appaloosa conference room</h3>
        <p>Bring the tools you use daily, whether it’s Codex macros, OpenClaw watches, or Claude flows.</p>
      </article>
      <article className="hero-card">
        <p className="time-chip">Technique focus</p>
        <h3>Build, automate, monitor</h3>
        <p>Show how you combine OpenClaw, Codex, Claude, or other AI agents to gain leverage quickly.</p>
      </article>
    </div>
  </section>
);

export default Hero;
