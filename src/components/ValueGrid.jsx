import React from 'react';

const values = [
  {
    title: 'Encodible ID Toolkit',
    body: 'Self-sovereign wallet SDK, attestation templates, and secure key management that respect privacy by default.'
  },
  {
    title: 'TetraVeda Precinct',
    body: 'Deployable voting precincts, audit trails, and governance rules tuned for public + private civic experiments.'
  },
  {
    title: 'Compliance & Traceability',
    body: 'Immutable event sourcing, reporting-ready exports, and automation hooks so every vote and identity change is verifiable.'
  }
];

const ValueGrid = () => (
  <section className="section" id="solutions">
    <div className="section-header">
      <h2>Platform pillars</h2>
      <p>Encodible packs developer-first APIs, observability, and community-ready tooling.</p>
    </div>
    <div className="grid-3">
      {values.map((value) => (
        <article key={value.title} className="feature-card">
          <h3>{value.title}</h3>
          <p>{value.body}</p>
        </article>
      ))}
    </div>
  </section>
);

export default ValueGrid;
