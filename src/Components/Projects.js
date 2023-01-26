import React from 'react';
import './css/Projects.css';

function Projects({ Key,title,description,frameworks,github,live,pic }) {
  
  return (
      <div className="projects">
        <h2 className="projecttitle">
          {title}
          <span>
            <a href={github}>
              <i class="fa-brands fa-github"></i>
            </a>
          </span>
          <span>
            <a href={live}>
              <i class="fa-solid fa-link"></i>
            </a>
          </span>
        </h2>
        <div className='project_image'>
          <img src={pic} alt={title} />
        </div>
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