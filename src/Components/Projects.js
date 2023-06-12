import React from 'react';
import './css/Projects.css';
import { useState } from 'react';

function Projects({ Key,title,description,frameworks,github,live,pic,colors }) {
  // console.log(title)
  const [desClass, setDesClass] = useState('hideDes')
  return (
      <div data-aos="fade-right" data-aos-duration="1000" className="projects">
        <div className="project_body">
          {pic.map((pic)=>
          ( <div className='project_image'>
            <a href={live}><img src={pic} alt={title} /></a>
          </div>)
          )}
          <div>
            <h2 className="projecttitle">
              {title}
              {github.map((github)=>
              (<a href={github}>
                <i class="fa-brands fa-github spacing"></i>
              </a>)
              )}
              {live.map((live)=>
              (<a href={live}>
                <i class="fa-solid fa-link spacings"></i>
              </a>)
              )}
            </h2>
            <h3 class="projectStack">Tech Stack</h3>
            <p className={`projectDes ${desClass}`}>{description}</p>
            <div className="projectList">
              {Array(frameworks.length).fill().map((_,i)=>(
                  <li className='each_skill2' style={{backgroundColor: "#213b61"}}>{frameworks[i]}</li>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects;