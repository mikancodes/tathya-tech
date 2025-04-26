import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Tathya Technologies Pvt. Ltd. (OPC) | SaaS Company';
  }, []);

  return (
    <div className="font-body">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Team />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;