import React from 'react';

const principles = [
  ['Trace claims to evidence', 'Architecture and delivery decisions should survive contact with the source, protocol, and runtime.'],
  ['Make protocols operable', 'A correct specification is only the beginning; teams also need usable integrations and operational clarity.'],
  ['Transfer understanding', 'Good consulting leaves the system and the people maintaining it more capable than before.']
];

const About = () => (
  <section className="section about" id="about" aria-labelledby="about-title">
    <div className="about-heading">
      <p className="eyebrow">About Kent</p>
      <h2 id="about-title">A technical partner for systems that need more than generic delivery.</h2>
    </div>
    <div className="about-copy">
      <p className="about-lead">
        Encodible is the independent consulting practice of Kent Bull, a software engineer
        working at the intersection of distributed systems, digital identity, developer tooling,
        and protocol implementation.
      </p>
      <p>
        Kent’s work emphasizes precise technical models, source-grounded decisions, and software
        that teams can test and operate. His public writing goes deep on KERI, KERIA, ACDC,
        key management, and the practical details behind trustworthy infrastructure.
      </p>
      <div className="profile-links" aria-label="Kent Bull profiles">
        <a href="https://www.kentbull.com" target="_blank" rel="noreferrer noopener">Blog ↗</a>
        <a href="https://github.com/kentbull" target="_blank" rel="noreferrer noopener">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/kobull/" target="_blank" rel="noreferrer noopener">LinkedIn ↗</a>
        <a href="https://x.com/kentbull" target="_blank" rel="noreferrer noopener">X ↗</a>
      </div>
    </div>
    <div className="principles">
      {principles.map(([title, body], index) => (
        <article key={title}>
          <span>0{index + 1}</span>
          <div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default About;
