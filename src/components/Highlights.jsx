import React from 'react';

const highlights = [
  {
    title: 'Prompt to production',
    body: 'Map Codex prompts to reliable app flows, including guardrails and performance checks.'
  },
  {
    title: 'Automation + monitoring',
    body: 'See how OpenClaw coordinates triggers, logging, and alerts across workflows.'
  },
  {
    title: 'Claude collaboration',
    body: 'Share Claude agents for research, ideation, and documentation that keep teams aligned.'
  }
];

const Highlights = () => (
  <section className="section">
    <div>
      <h2>What you gain</h2>
      <p>Futuristic workflows, practical automation, and a forum to test your AI hypotheses.</p>
    </div>
    <div className="grid-3">
      {highlights.map((item) => (
        <article key={item.title} className="card">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Highlights;
