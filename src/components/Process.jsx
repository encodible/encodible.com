import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Clarify the real constraint',
    body: 'Start with the system, evidence, stakeholders, and failure conditions—not a predetermined deliverable.'
  },
  {
    number: '02',
    title: 'Make the path executable',
    body: 'Turn ambiguity into concrete decisions, a bounded plan, and the smallest useful validation.'
  },
  {
    number: '03',
    title: 'Deliver and transfer',
    body: 'Implement the work, prove it in its real environment, and leave behind maintainable code and understanding.'
  }
];

const Process = () => (
  <section className="section process" aria-labelledby="process-title">
    <div className="section-intro compact">
      <div>
        <p className="eyebrow">How engagements work</p>
        <h2 id="process-title">From uncertainty to an operable result.</h2>
      </div>
      <p>
        Common engagement shapes include a focused assessment, a bounded implementation,
        or ongoing architecture and technical guidance.
      </p>
    </div>
    <div className="process-grid">
      {steps.map((step) => (
        <article key={step.title}>
          <span>{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Process;
