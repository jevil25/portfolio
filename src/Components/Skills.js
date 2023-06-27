import React from 'react';
import SkillsData from '../Data/SkillsData';
import '../css/Skills.css';

function Skills() {
  return (
    <div data-aos="fade-left" data-aos-duration="1000" className='skills'>
      <h3 className='skills_title'>Languages</h3>
      <div className="skills_list">
        {
          SkillsData.map((skill) => (
            skill.type === "language" ? <li className='each_skill' style={{backgroundColor: skill.color}}>{ skill.title }</li> : null
            ))  
        }
      </div>
      <h3 className='skills_title'>FrameWorks and Libraries</h3>
      <div className="skills_list">
        {
          SkillsData.map((skill) => (
            skill.type === "framework" || skill.type==="library" ? <li className='each_skill' style={{backgroundColor: skill.color}}>{ skill.title }</li> : null
            ))  
        }
      </div>
      <h3 className='skills_title'>Tools</h3>
      <div className="skills_list">
        {
          SkillsData.map((skill) => (
            skill.type === "tools" ? <li className='each_skill' style={{backgroundColor: skill.color}}>{ skill.title }</li> : null
            ))  
        }
      </div>
    </div>
  )
}

export default Skills
