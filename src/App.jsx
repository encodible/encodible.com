import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import AgendaTimeline from './components/AgendaTimeline.jsx';
import Highlights from './components/Highlights.jsx';
import Showcase from './components/Showcase.jsx';
import FAQ from './components/FAQ.jsx';
import FooterCTA from './components/FooterCTA.jsx';

const App = () => (
  <div className="page">
    <div className="page-inner">
      <Nav />
      <Hero />
      <Highlights />
      <AgendaTimeline />
      <Showcase />
      <FAQ />
    </div>
    <FooterCTA />
  </div>
);

export default App;
