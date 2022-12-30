import React from 'react';
import './css/Projects.css';

function Projects({ Key,title,description,frameworks }) {
  return (
      <div className="projects">
        <h2 className="projecttitle">{title}</h2>
        <p className="projectdes">{description}</p>
        <div className="projectList">
            {Array(frameworks.length).fill().map((_,i)=>(
                <li>{frameworks[i]}</li>
            ))}
        </div>
    </div>
  )
}

export default Projects;