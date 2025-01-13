import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import '../../App.css'
import '../../index.css'
const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                <div className="skill">
                    <FaHtml5 className="icon html" title="HTML5" />
                    <p>HTML5</p>
                </div>
                <div className="skill">
                    <FaCss3Alt className="icon css" title="CSS3" />
                    <p>CSS3</p>
                </div>
                <div className="skill">
                    <FaJsSquare className="icon js" title="JavaScript" />
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <FaReact className="icon react" title="React" />
                    <p>React</p>
                </div>
                <div className="skill">
                    <FaNodeJs className="icon node" title="Node.js" />
                    <p>Node.js</p>
                </div>
                <div className="skill">
                    <FaGithub className="icon github" title="GitHub" />
                    <p>GitHub</p>
                </div>
            </div>
        </section>
    )
}

export default Skills