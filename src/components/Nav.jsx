import React from 'react';

const events = [
  { label: 'AI Workshop · Feb 25', href: '/feb-2026-ai-event-01' },
  { label: 'Encodible ID Meetup', href: '#events' }
];

const Nav = () => (
  <header className="site-header">
    <div className="brand-mark">
      <span className="brand-name">Encodible</span>
      <span className="brand-tagline">Identity · Voting · Trust</span>
    </div>
    <nav className="site-nav">
      <a href="#platform">Platform</a>
      <a href="#solutions">Solutions</a>
      <details className="nav-dropdown">
        <summary>Events</summary>
        <div>
          {events.map((event) => (
            <a key={event.label} href={event.href}>
              {event.label}
            </a>
          ))}
        </div>
      </details>
    </nav>
    <a className="cta primary" href="/feb-2026-ai-event-01">
      RSVP AI Workshop
    </a>
  </header>
);

export default Nav;
