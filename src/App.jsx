import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import ValueGrid from './components/ValueGrid.jsx';
import Platform from './components/Platform.jsx';
import EventSpotlight from './components/EventSpotlight.jsx';
import Resources from './components/Resources.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <div className="site-shell">
    <div className="site-inner">
      <Nav />
      <Hero />
      <ValueGrid />
      <Platform />
      <EventSpotlight />
      <Resources />
    </div>
    <Footer />
  </div>
);

export default App;
