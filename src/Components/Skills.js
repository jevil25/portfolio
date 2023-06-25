import React from 'react';
import SkillsData from '../Data/SkillsData';
import './css/Skills.css';

function Skills() {
  return (
    <div data-aos="fade-left" data-aos-duration="1000" className='skills'>
      <div className="skills_list">
        {Array(SkillsData.length).fill().map((_,i) => (
            <li className='each_skill' style={{backgroundColor: SkillsData[i].color}}>{ SkillsData[i].title }</li>
        ))}
      </div>
    </div>
  )
}

export default Skills
