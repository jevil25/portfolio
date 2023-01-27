import React from 'react';
import './css/Projects.css';
import { useState } from 'react';

function Projects({ Key,title,description,frameworks,github,live,pic }) {
  const [hoverStyle,setHoverStyle] = useState({})

  const showTitle = () => {
    console.log("focus");
    setHoverStyle({
      visibility: "visible",
      display: "block"
    });
  }

  const removeTitle = function(){
    setHoverStyle({
      visibility: "hidden",
      display: "none"
    })
  }
  
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
          <a href={live} onMouseOver={showTitle} onMouseLeave={removeTitle}><span style={hoverStyle}>Go to {title}</span><img src={pic} alt={title} /></a>
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