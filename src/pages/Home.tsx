import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import PortfolioPreview from '../components/PortfolioPreview';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <About />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;