import React from 'react';
import SkillsData from '../Data/SkillsData';
import '../css/Skills.css';

function Skills() {
  const categories = {
    languages: SkillsData.filter(skill => skill.type === "language"),
    frameworks: SkillsData.filter(skill => skill.type === "framework" || skill.type === "library"),
    tools: SkillsData.filter(skill => skill.type === "tools" || skill.type === "database")
  };

  return (
    <div data-aos="fade-left" data-aos-duration="600" data-aos-offset="80" className='skills'>
      <h3 className='skills_title'>Languages</h3>
      <div className="skills_list">
        {categories.languages.map((skill, index) => (
          <li key={index} className='each_skill'>{skill.title}</li>
        ))}
      </div>

      <h3 className='skills_title'>Frameworks and Libraries</h3>
      <div className="skills_list">
        {categories.frameworks.map((skill, index) => (
          <li key={index} className='each_skill'>{skill.title}</li>
        ))}
      </div>

      <h3 className='skills_title'>Tools & Databases</h3>
      <div className="skills_list">
        {categories.tools.map((skill, index) => (
          <li key={index} className='each_skill'>{skill.title}</li>
        ))}
      </div>
    </div>
  );
}

export default Skills;
