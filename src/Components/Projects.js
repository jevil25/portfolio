import React, { useEffect } from 'react';
import './css/Projects.css';
import { useState } from 'react';
import { motion } from "framer-motion";

function Projects({ Key,title,description,frameworks,github,live,pic,colors }) {
  // console.log(title)
  const [desClass, setDesClass] = useState('hideDes')
  const [width, setWidth] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleHover = (e) => {
    if(screenWidth < 600) return;
    console.log('hover')
    setWidth("width")
    setDesClass('showDes')
  }

  const handleLeave = (e) => {
    if(screenWidth < 600) return;
    console.log('leave')
    setDesClass('hideDes')
    setWidth("")
  }

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if(screenWidth < 600) setDesClass("showDes");
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}  
        className={`projects `}
        onMouseEnter={e => handleHover(e)}
        onMouseLeave={e => handleLeave(e)}
      >
        <motion.div  className="project_body">
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
            <p className={`projectDes ${desClass}`}>{description}</p>
            <h3 class="projectStack">Tech Stack</h3>
            <div className="projectList">
              {Array(frameworks.length).fill().map((_,i)=>(
                  <li className='each_skill2' style={{backgroundColor: "#213b61"}}>{frameworks[i]}</li>
              ))}
            </div>
          </div>
        </motion.div>
    </motion.div>
  )
}

export default Projects;