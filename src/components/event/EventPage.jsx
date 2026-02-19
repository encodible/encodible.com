import React from 'react';
import EventHero from './EventHero.jsx';
import EventAgenda from './EventAgenda.jsx';
import EventHighlights from './EventHighlights.jsx';
import EventFAQ from './EventFAQ.jsx';
import Footer from '../Footer.jsx';

const EventPage = () => (
  <div className="site-shell">
    <div className="site-inner">
      <EventHero />
      <EventAgenda />
      <EventHighlights />
      <EventFAQ />
    </div>
    <Footer />
  </div>
);

export default EventPage;
