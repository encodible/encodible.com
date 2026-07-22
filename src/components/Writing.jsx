import React from 'react';

const articles = [
  {
    category: 'KERI operations',
    title: 'Configuring KERIpy Controllers, Witnesses, and KERIA Agents',
    href: 'https://www.kentbull.com/posts/configuring-keripy-keria-controllers-witnesses/'
  },
  {
    category: 'Key management',
    title: 'Hierarchical Deterministic Key Derivation in KERI',
    href: 'https://www.kentbull.com/posts/keri-hd-key-derivation-deep-dive/'
  },
  {
    category: 'Protocol fundamentals',
    title: 'Understanding Self-Addressing Identifiers (SAIDs)',
    href: 'https://www.kentbull.com/posts/keri-said-explained/'
  }
];

const Writing = () => (
  <section className="section writing" id="writing" aria-labelledby="writing-title">
    <div className="writing-heading">
      <div>
        <p className="eyebrow">Writing & research</p>
        <h2 id="writing-title">See how Kent approaches the hard parts.</h2>
      </div>
      <a className="text-link dark" href="https://www.kentbull.com" target="_blank" rel="noreferrer noopener">
        Visit kentbull.com <span aria-hidden="true">↗</span>
      </a>
    </div>
    <div className="article-list">
      {articles.map((article, index) => (
        <a href={article.href} target="_blank" rel="noreferrer noopener" key={article.title}>
          <span className="article-index">0{index + 1}</span>
          <span>
            <small>{article.category}</small>
            <strong>{article.title}</strong>
          </span>
          <span className="article-arrow" aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  </section>
);

export default Writing;
