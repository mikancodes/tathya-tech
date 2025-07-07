import React from 'react';
import AboutComponent from '../components/About';
import Team from '../components/Team';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <AboutComponent />
      <Team />
    </div>
  );
};

export default About;