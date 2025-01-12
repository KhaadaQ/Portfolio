import React from 'react';
import './App.css';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const App = () => {
  return (
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

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
