import React from 'react';

const agenda = [
  {
    title: 'Round‑robin AI story share',
    duration: '30 min',
    body: 'Go around the room and surface how you are using OpenClaw, Codex, Claude, or other AI helpers to scale projects.'
  },
  {
    title: 'Workshop · App building + automation',
    duration: '90 min',
    body: 'Live-building with Codex, wiring automation and monitoring via OpenClaw, plus Claude prompt chaining best practices.'
  },
  {
    title: 'Wrap-up discussion · technique swap',
    duration: '30 min',
    body: 'Share follow-up ideas, invite demos, and capture any techniques worth repeating.'
  }
];

const AgendaTimeline = () => (
  <section id="agenda" className="section">
    <div>
      <h2>Event agenda</h2>
      <p>Meetup-style workshop: stories, code, automation, and a final technique share.</p>
    </div>
    <div className="timeline">
      {agenda.map((item) => (
        <article key={item.title} className="timeline-card">
          <div>
            <p className="time-chip">{item.duration}</p>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default AgendaTimeline;
