import React from 'react';

const specialties = [
  'KERI & ACDC',
  'Distributed systems',
  'Research to production'
];

const Hero = () => (
  <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">Specialist software consulting</p>
      <h1 id="hero-title">
        Digital identity and trust systems, <span>engineered for the real world.</span>
      </h1>
      <p className="hero-summary">
        Encodible is Kent Bull’s consulting practice. I help teams turn KERI, verifiable
        credentials, distributed protocols, and civic-technology ideas into tested,
        operable software.
      </p>
      <div className="button-row">
        <a className="button" href="mailto:kent@encodible.com?subject=Project%20inquiry">
          Discuss a project <span aria-hidden="true">→</span>
        </a>
        <a className="text-link" href="https://www.kentbull.com" target="_blank" rel="noreferrer noopener">
          Read Kent’s writing <span aria-hidden="true">↗</span>
        </a>
      </div>
      <ul className="specialty-list" aria-label="Areas of focus">
        {specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}
      </ul>
    </div>
    <figure className="portrait-card">
      <div className="portrait-frame">
        <img
          src="/kent-bull.jpg"
          alt="Kent Bull, principal consultant at Encodible"
          width="400"
          height="400"
          fetchPriority="high"
        />
      </div>
      <figcaption>
        <span>
          <strong>Kent Bull</strong>
          Principal consultant
        </span>
        <span className="portrait-role">Architecture · implementation · technical guidance</span>
      </figcaption>
    </figure>
  </section>
);

export default Hero;
