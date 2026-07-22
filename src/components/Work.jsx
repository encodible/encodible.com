import React from 'react';

const projects = [
  {
    organization: 'TetraVeda',
    status: 'R&D concept',
    title: 'White Raven',
    body: 'An exploration of digital rights for central bank digital currencies, expressed through an EUTxO reference architecture and open technical materials.',
    tags: ['Digital rights', 'CBDC research', 'EUTxO'],
    href: 'https://github.com/TetraVeda/white-raven',
    link: 'View the repository'
  },
  {
    organization: 'Encodible',
    status: 'Archive',
    title: 'Parlerian Vintage',
    body: 'Historical source from an earlier organization-management application, preserved as an honest record of Encodible’s enterprise application work.',
    tags: ['Enterprise software', 'Organization management', 'Web application'],
    href: 'https://github.com/encodible/parlerian-vintage',
    link: 'View the archive'
  },
  {
    organization: 'Kent Bull',
    status: 'Current writing',
    title: 'KERI implementation notes',
    body: 'Source-grounded explanations of KERI, KERIA, ACDC, key management, and the operational details that determine whether trust infrastructure works.',
    tags: ['KERI', 'ACDC', 'Technical practice'],
    href: 'https://www.kentbull.com',
    link: 'Explore the writing'
  }
];

const Work = () => (
  <section className="section work" id="work" aria-labelledby="work-title">
    <div className="section-intro compact">
      <div>
        <p className="eyebrow">Selected work</p>
        <h2 id="work-title">Public work, labeled by what it is today.</h2>
      </div>
      <p>
        Research, archived systems, and current technical writing each tell a different part
        of the story. None are presented as products they are not.
      </p>
    </div>
    <div className="work-grid">
      {projects.map((project) => (
        <article className="work-card" key={project.title}>
          <div className="work-meta">
            <span>{project.organization}</span>
            <span className="status">{project.status}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.body}</p>
          <ul className="tag-list" aria-label={`${project.title} topics`}>
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
          <a className="card-link" href={project.href} target="_blank" rel="noreferrer noopener">
            {project.link} <span aria-hidden="true">↗</span>
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default Work;
