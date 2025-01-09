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
        <h1>Mi Portafolio</h1>
        <nav>
          <a href="#about">Sobre Mí</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
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
