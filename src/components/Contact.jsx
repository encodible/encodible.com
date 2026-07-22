import React from 'react';

const Contact = () => (
  <section className="section contact" id="contact" aria-labelledby="contact-title">
    <div>
      <p className="eyebrow">Start a conversation</p>
      <h2 id="contact-title">Have a difficult system to make real?</h2>
      <p>
        Send a short note about what you are building, the constraint or risk you are facing,
        and the timing you have in mind. Kent will reply directly.
      </p>
    </div>
    <div className="contact-action">
      <a className="button button-light" href="mailto:kent@encodible.com?subject=Project%20inquiry">
        kent@encodible.com <span aria-hidden="true">→</span>
      </a>
      <p>No sales handoff. No generic discovery funnel.</p>
    </div>
  </section>
);

export default Contact;
