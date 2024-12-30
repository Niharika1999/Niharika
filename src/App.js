import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Project1 from './pages/projects/project-1';
import './global.css'; 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects1" element={<Project1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;