import React from 'react';

const faqs = [
  {
    question: 'Who should attend?',
    answer: 'AI builders and automators using OpenClaw, Codex, Claude, or similar agents in app stacks.'
  },
  {
    question: 'What do I bring?',
    answer: 'Laptop, demos or notebooks, and an appetite to swap prompts and automation scripts.'
  },
  {
    question: 'How to RSVP?',
    answer: 'Hit the RSVP button to open the external form tied to the event.'
  },
  {
    question: 'Where is the event?',
    answer: 'Appaloosa conference room, Wednesday, February 25, 2026 · 3:30 PM.'
  }
];

const EventFAQ = () => (
  <section className="section">
    <div className="section-header">
      <h2>Need answers?</h2>
      <p>We keep the logistics simple so you can focus on sharing techniques.</p>
    </div>
    <div className="faq-grid">
      {faqs.map((item) => (
        <article key={item.question} className="faq-card">
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </article>
      ))}
    </div>
  </section>
);

export default EventFAQ;
