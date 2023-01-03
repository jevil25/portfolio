import React from 'react';
import SkillsData from './Data/SkillsData';
import './css/Skills.css';

function Skills() {
  return (
    <div className='skills'>
      <h2>Skills</h2>
      <div className="skills_list">
        {Array(SkillsData.length).fill().map((_,i) => (
            <li className='each_skill'>{ SkillsData[i].title }</li>
        ))}
      </div>
    </div>
  )
}

export default Skills
