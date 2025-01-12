import React from 'react';
import './App.css';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYou from './components/thank/ThankYou';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <Router>

      <div className="app-container">
        <header>
          <h1>My Portfolio</h1>
          <nav>
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}>
              <About />
              <Skills />
              <Projects />
              <Contact />
            </motion.div>
          } />
          <Route path='/thank-you' element={
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.8 }}
            >
              <ThankYou />
            </motion.div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
