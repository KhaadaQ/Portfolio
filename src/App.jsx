import React from 'react';
import './App.css';

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

      <section id="about">
        <h2>Sobre Mí</h2>
        <p>Hello world! As a passionate and results-driven web developer, I specialize in crafting dynamic and responsive digital experiences using JavaScript, React, HTML, and CSS. My expertise extends to both relational and non-relational databases, including MySQL and MongoDB, ensuring efficient data management and seamless application performance. With a solid foundation in Node.js for backend development, I build scalable, secure, and high-performance web applications. I am committed to staying ahead of industry trends, continuously refining my skills, and delivering code that not only works but truly impresses. I’m a self-driven web developer who found inspiration in my own journey to seek personal growth and fulfillment after feeling unsatisfied with my former field of work. My passion for both frontend and backend development allows me to create visually appealing websites while also handling data with precision and care. Though I haven’t settled on a specific path yet, my goal is to showcase my full range of skills and make an impact through my work.
        Beyond coding, I’m also a dedicated translator and interpreter, full of life and always eager to take on new challenges.</p>
      </section>

      <section id="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Vite, Node.js</li>
          <li>Git y GitHub</li>
          <li>Responsive Design</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Proyectos Destacados</h2>
        <p>Aquí irán algunos de mis proyectos destacados.</p>
      </section>

      <section id="contact">
        <h2>Contacto</h2>
        <p>Puedes contactarme en: <a href="mailto:tucorreo@example.com">tucorreo@example.com</a></p>
      </section>
    </div>
  );
};

export default App;
