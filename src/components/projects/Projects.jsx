import React from 'react'
import '../../App.css'
import '../../index.css'
import screenshot from '../../assets/filmaxScreen.png'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Film API',
            description: 'Search for films, their synopsis and more using filters',
            image: screenshot,
            githubLink: 'https://github.com/KhaadaQ/Movie-API.git'
        },
        {
            id: 2,
            title: 'Newcoming Project',
            description: 'Coming soon! Some new amazing code is on the way, stay tuned!',
            image: "https://picsum.photos/700",
            githubLink: '#'
        },
        {
            id: 3,
            title: 'Upcoming Surprise',
            description: 'Another amazing app will be revealed soon, watch out!',
            image: 'https://picsum.photos/701',
            githubLink: '#'
        }
    ];

    return (
        <section id="projects">
            <h2>Featured Projects</h2>
            <div className="projects-container">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.title} className="project-image" />
                        </a>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {project.githubLink !== "#" ? (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    View
                                </a>
                            ) : (
                                <p className="coming-soon">Coming soon!</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects