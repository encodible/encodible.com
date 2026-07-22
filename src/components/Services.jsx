import React from 'react';

const services = [
  {
    number: '01',
    title: 'Identity and trust architecture',
    body: 'Turn protocol, security, and compliance requirements into a system design your team can understand, test, and operate.',
    outcomes: ['Architecture decisions', 'Protocol and trust modeling', 'Delivery roadmap']
  },
  {
    number: '02',
    title: 'Protocol implementation and integration',
    body: 'Build the difficult connective tissue between KERI, credentials, distributed services, and the applications people actually use.',
    outcomes: ['Working implementations', 'Integration design', 'Tests and operational tooling']
  },
  {
    number: '03',
    title: 'Technical assessment and recovery',
    body: 'Find the real failure boundary in an existing system, reduce uncertainty, and leave the team with an executable path forward.',
    outcomes: ['Focused technical audit', 'Risk and failure analysis', 'Recovery plan or implementation']
  }
];

const Services = () => (
  <section className="section services" id="services" aria-labelledby="services-title">
    <div className="section-intro">
      <div>
        <p className="eyebrow">Services</p>
        <h2 id="services-title">Senior technical judgment where complexity is expensive.</h2>
      </div>
      <p>
        Encodible works best on protocol-heavy systems where correctness, interoperability,
        and a clear mental model matter as much as shipping code.
      </p>
    </div>
    <div className="service-list">
      {services.map((service) => (
        <article className="service-item" key={service.title}>
          <p className="item-number">{service.number}</p>
          <div>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
          </div>
          <ul>
            {service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Services;
