import React from 'react'
import '../../App.css'
import '../../index.css'

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: 'E-Commerce Website',
            description: 'Un sitio web de compras con React y Node.js.',
            image: 'https://source.unsplash.com/random/300x200?technology',
            link: '#'
        },
        {
            id: 2,
            title: 'Aplicación de Clima',
            description: 'Aplicación interactiva que muestra el clima en tiempo real.',
            image: 'https://source.unsplash.com/random/300x200?weather',
            link: '#'
        },
        {
            id: 3,
            title: 'Gestor de Tareas',
            description: 'Una aplicación para gestionar tareas diarias con React.',
            image: 'https://source.unsplash.com/random/300x200?productivity',
            link: '#'
        }
    ];

    return (
        <section id="projects">
            <h2>Proyectos Destacados</h2>
            <div className="projects-container">
                {projectData.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects