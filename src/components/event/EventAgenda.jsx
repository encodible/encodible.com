import React from 'react';

const agenda = [
  {
    time: '30 min',
    title: 'AI story round',
    body: 'Go around the room and surface how you use OpenClaw, Codex, Claude, or other AI layers to accelerate work.'
  },
  {
    time: '90 min',
    title: 'Workshop · App building',
    body: 'Build with Codex, wire automation/monitoring via OpenClaw, and share Claude prompt chains for orchestration.'
  },
  {
    time: '30 min',
    title: 'Wrap-up + technique share',
    body: 'Discuss what worked, favorite automations, and how to keep sharing the learnings.'
  }
];

const EventAgenda = () => (
  <section className="section">
    <div className="section-header">
      <h2>Feb 25 agenda</h2>
      <p>Stories, building, and a closing technique swap.</p>
    </div>
    <div className="agenda-grid">
      {agenda.map((item) => (
        <article key={item.title} className="agenda-card">
          <p className="time-chip">{item.time}</p>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  </section>
);

export default EventAgenda;
