import React from 'react';

const RSVP_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeHsdCEZf834RnPmBRsTj6u-lYuhgA-LrTslTOWZY975DcebQ/viewform?usp=dialog';

const eventDetails = [
  { label: 'When', value: 'Wednesday, February 25 · 3:30 PM' },
  { label: 'Where', value: 'Appaloosa conference room' },
  { label: 'Theme', value: 'OpenClaw + Codex + Claude technique sharing' }
];

const agendaHighlights = [
  '30 min: AI stories + rapid status round',
  '90 min: Codex-driven app build + OpenClaw automation',
  '30 min: Wrap up + technique swap'
];

const EventSpotlight = () => {
  return (
    <section className="section event-spotlight" id="events">
      <div className="section-header">
        <h2>Encodible AI Workshop · Technique sharing</h2>
        <p>
          Show off the builds you’ve made with OpenClaw, Codex, Claude, or other AI helpers. Swap prompt
          recipes and automation checks so the team ships faster together.
        </p>
      </div>
      <div className="event-card">
        <div className="event-details">
          {eventDetails.map((detail) => (
            <div key={detail.label}>
              <p className="time-chip">{detail.label}</p>
              <p className="event-detail">{detail.value}</p>
            </div>
          ))}
        </div>
        <ul className="event-agenda">
          {agendaHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a href={RSVP_URL} className="cta primary" target="_blank" rel="noreferrer noopener">
          RSVP and share your build
        </a>
      </div>
    </section>
  );
};

export default EventSpotlight;
