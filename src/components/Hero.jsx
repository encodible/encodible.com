import React from 'react';

const heroStats = [
  { label: 'Identity API', detail: 'Wallet SDK + attestations' },
  { label: 'Voting Reach', detail: 'Precinct network + audit trails' },
  { label: 'Ops Trust', detail: 'Immutable history + monitoring' }
];

const Hero = () => (
  <section className="hero" id="platform">
    <p className="hero-kicker">Identity · Voting · Trust</p>
    <h1>Encodible is the modern stack for confident civic systems.</h1>
    <p>
      Build identity, voting, and trust infra that scales globally. Encodible pairs resilient APIs
      with automated monitoring so you can ship precinct-grade experiences without vendor lock-in.
    </p>
    <div className="hero-cta">
      <a className="cta primary" href="/feb-2026-ai-event-01">
        RSVP · Feb 25 AI Workshop
      </a>
      <a className="cta secondary" href="#solutions">
        Explore Solutions
      </a>
    </div>
    <div className="hero-meta">
      {heroStats.map((stat) => (
        <article key={stat.label}>
          <p className="hero-meta-label">{stat.label}</p>
          <p className="hero-meta-detail">{stat.detail}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Hero;
