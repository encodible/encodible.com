import React from 'react';

const resources = [
  {
    title: 'Encodible Identity API',
    body: 'Stand up an ID endpoint, issue verifiable credentials, and link them to real-world profiles in minutes.'
  },
  {
    title: 'Precinct automation',
    body: 'Use OpenClaw-like monitoring to watch for ballot drift, notify teams, and keep logs tamper-proof.'
  },
  {
    title: 'Audit & compliance',
    body: 'Immutable event sourcing and report exports keep regulators confident and stakeholders informed.'
  }
];

const Resources = () => (
  <section className="section">
    <div className="section-header">
      <h2>Where we start</h2>
      <p>Encodible ships with patterns for marketplaces, ballots, tokenized governance, and civic tech pilots.</p>
    </div>
    <div className="grid-3">
      {resources.map((resource) => (
        <article key={resource.title} className="resource-card">
          <h3>{resource.title}</h3>
          <p>{resource.body}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Resources;
