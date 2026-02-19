import React from 'react';

const faqs = [
  {
    question: 'Who should attend?',
    answer: 'Anyone building or orchestrating AI apps with Codex, OpenClaw, Claude, or similar tooling.'
  },
  {
    question: 'What should I bring?',
    answer: 'Your laptop, any demos or notebooks, and questions you’d like to bounce off the room.'
  },
  {
    question: 'How do I RSVP?',
    answer: 'Hit the RSVP button, which opens the external form linked to the event details.'
  },
  {
    question: 'Where is the meetup?',
    answer: 'Appaloosa conference room, on Wednesday, February 25, 2026 at 3:30 PM.'
  }
];

const FAQ = () => (
  <section className="section">
    <div>
      <h2>Need answers?</h2>
      <p>Logistics are simple—just bring yourself and your AI stories.</p>
    </div>
    <div className="faq-list">
      {faqs.map((item) => (
        <article key={item.question} className="faq">
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </article>
      ))}
    </div>
  </section>
);

export default FAQ;
