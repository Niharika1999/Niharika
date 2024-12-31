
import React from 'react';
import Home from './home';
import Projects from '../projects/project-home';

const LandingPage = () => {
  return (
    <div>
      <Home />
      <h2>Projects</h2>
      <Projects />
    </div>
  );
};

export default LandingPage;
