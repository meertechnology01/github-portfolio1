import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CV from './pages/CV';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cv" element={<CV />} />
        <Route path="/" element={
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;