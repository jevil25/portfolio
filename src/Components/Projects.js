import React from 'react';
import '../css/Projects.css';
import { motion } from "framer-motion";

function Projects({ Key, title, description, frameworks, github, live, pic, colors, type }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="projects"
    >
      <div className="project_body">
        <div className="project1">
          <motion.h2 
            className="projecttitle"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 }}
          >
            {title}
          </motion.h2>
          <p className="projectDes">{description}</p>
          <div className='projectTech'>
            <motion.div 
              className="projectList"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {frameworks.map((framework, index) => (
                <motion.li 
                  key={index}
                  className='each_skill2'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index + 0.18 }}
                >
                  {framework}
                </motion.li>
              ))}
            </motion.div>
          </div>
          <motion.div 
            className='projectLinks'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            {github.map((link, index) => (
              <motion.a 
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fa-brands fa-github spacing"></i>
              </motion.a>
            ))}
            {live.map((link, index) => (
              <motion.a 
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fa-solid fa-link spacings"></i>
              </motion.a>
            ))}
          </motion.div>
        </div>
        <motion.div 
          className='project_image'
          style={type === "mobile" ? {textAlign: "center"} : {}}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          {pic.map((image, index) => (
            <a key={index} href={live[0]} target="_blank" rel="noopener noreferrer">
              <img 
                src={image} 
                alt={title} 
                style={type === "mobile" ? {width: "40%"} : {}}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Projects;