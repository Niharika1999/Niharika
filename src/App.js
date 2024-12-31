import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Project1 from './pages/projects/project-1';
import Project2 from './pages/projects/project-2';
import Projects from './pages/projects/project-home';
import LandingPage from './pages/home/LandingPage';
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
          <Route path="/ui-companion-tool" element={<Project1 />} />
        <Route path="/explore-gagugk" element={<Project2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;