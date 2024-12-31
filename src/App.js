import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Uicompanion from './pages/projects/individual-projects/Uicompanion';
import Projects from './pages/projects/project-home';
import LandingPage from './pages/home/LandingPage';
import ExploreGaguk from './pages/projects/individual-projects/explore-gaguk';
import './global.css'; 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ui-companion-tool" element={<Uicompanion />} />
        <Route path="/explore-gagugk" element={<ExploreGaguk />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;