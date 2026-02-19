import React from 'react';

const highlights = [
  {
    title: 'Prompt to production',
    body: 'See how Codex macros turn into reliable flows with telemetry and guardrails.'
  },
  {
    title: 'Automation + monitoring',
    body: 'OpenClaw-style watchers keep your automations transparent, alerted, and auditable.'
  },
  {
    title: 'Claude collaboration',
    body: 'Share Claude agents for research, documentation, and chaining across deployments.'
  }
];

const EventHighlights = () => (
  <section className="section">
    <div className="section-header">
      <h2>Technique sharing</h2>
      <p>Bring what you’ve built, share the prompts, and show how AI gives you airflow.</p>
    </div>
    <div className="highlight-grid">
      {highlights.map((item) => (
        <article key={item.title} className="feature-card">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  </section>
);

export default EventHighlights;
