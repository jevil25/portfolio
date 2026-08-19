import React from 'react';
import SkillsData from '../Data/SkillsData';
import '../css/Skills.css';

const GROUPS = [
  { key: 'languages', label: 'languages', match: (t) => t === 'language' },
  { key: 'frameworks', label: 'frameworks', match: (t) => t === 'framework' || t === 'library' },
  { key: 'infra', label: 'infra & data', match: (t) => t === 'tools' || t === 'database' },
];

function Skills() {
  return (
    <div className="manifest" data-aos="fade-up" data-aos-duration="500" data-aos-offset="60">
      {GROUPS.map((group) => {
        const items = SkillsData.filter((s) => group.match(s.type));
        return (
          <div className="manifest-col" key={group.key}>
            <div className="manifest-head">
              <span className="manifest-label">{group.label}</span>
              <span className="manifest-count">{items.length}</span>
            </div>
            <ul className="manifest-list">
              {items.map((s, i) => (
                <li key={i}>{s.title}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
