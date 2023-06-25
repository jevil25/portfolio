import React, { useEffect } from 'react';
import './css/Projects.css';
import { useState } from 'react';
import { motion } from "framer-motion";

function Projects({ Key,title,description,frameworks,github,live,pic,colors }) {
  return (
      <motion.div 
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}  
        className={`projects `}
      >
        <motion.div  className="project_body">
          <div class="project1">
            <h2 className="projecttitle">
              {title}
            </h2>
            <p className={`projectDes`}>{description}</p>
            <div className="projectList">
              {Array(frameworks.length).fill().map((_,i)=>(
                  <li className='each_skill2'>{frameworks[i]}</li>
              ))}
            </div>
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
          </div>
          {pic.map((pic)=>
          ( <div className='project_image'>
            <a href={live}><img src={pic} alt={title} /></a>
          </div>)
          )}
        </motion.div>
    </motion.div>
  )
}

export default Projects;