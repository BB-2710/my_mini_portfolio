import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const [profile, setProfile] = useState({ name: "", bio: "" });
  const [projects, setProjects] = useState([]);

  return (
    <Router>
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home profile={profile} />} />
          <Route path="/about" element={<About setProfile={setProfile} />} />
          <Route path="/projects" element={<Projects projects={projects} setProjects={setProjects} />} />
        </Routes>
      </>
      <Footer />
    </Router>
  );
}

export default App;