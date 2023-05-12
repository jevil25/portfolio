import React from 'react';
import './css/Projects.css';
import { useState } from 'react';

function Projects({ Key,title,description,frameworks,github,live,pic }) {
  // console.log(title)
  return (
      <div data-aos="fade-right" data-aos-duration="1000" className="projects">
        <h2 className="projecttitle">
          {title}
          <span>
            {github.map((github)=>
            (<a href={github}>
              <i class="fa-brands fa-github spacing"></i>
            </a>)
            )}
          </span>
          <span>
            {live.map((live)=>
            (<a href={live}>
              <i class="fa-solid fa-link spacings"></i>
            </a>)
            )}
          </span>
        </h2>
        <div className="project_body">
          {pic.map((pic)=>
          ( <div className='project_image'>
            <a href={live}><img src={pic} alt={title} /></a>
          </div>)
          )}
          <div>
          <p className="projectdes">{description}</p>
          <div className="projectList">
            {Array(frameworks.length).fill().map((_,i)=>(
                <li>{frameworks[i]}</li>
            ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects;