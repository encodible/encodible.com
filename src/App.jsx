import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Work from './components/Work.jsx';
import About from './components/About.jsx';
import Writing from './components/Writing.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <div className="site-shell" id="top">
    <div className="site-inner">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Writing />
        <Process />
        <Contact />
      </main>
    </div>
    <Footer />
  </div>
);

export default App;
