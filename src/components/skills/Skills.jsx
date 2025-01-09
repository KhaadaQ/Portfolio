import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import '../../App.css'
import '../../index.css'
const Skills = () => {
    return (
        <section id="skills">
            <h2>Habilidades</h2>
            <div className="skills-container">
                <div className="skill">
                    <FaHtml5 className="icon" style={{ color: '#E34F26' }} title="HTML5" />
                </div>
                <div className="skill">
                    <FaCss3Alt className="icon" style={{ color: '#264DE4' }} title="CSS3" />
                </div>
                <div className="skill">
                    <FaJsSquare className="icon" style={{ color: '#F7DF1E' }} title="JavaScript" />
                </div>
                <div className="skill">
                    <FaReact className="icon" style={{ color: '#61DAFB' }} title="React" />
                </div>
                <div className="skill">
                    <FaNodeJs className="icon" style={{ color: '#68A063' }} title="Node.js" />
                </div>
                <div className="skill">
                    <FaGithub className="icon" style={{ color: '#181717' }} title="GitHub" />
                </div>
            </div>
        </section>
    )
}

export default Skills