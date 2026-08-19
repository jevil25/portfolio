import './App.css';
import Description from './Components/Description.js';
import Header from './Components/Header.js'
import Projects from './Components/Projects'
import projectdata from './Data/Projectdata'
import Skills from './Components/Skills'
import Contact from './Components/Contact';
import TitleHeading from './Components/TitleHeading';
import Footer from './Components/Footer';

import './css/normalize.css'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Education from './Components/Education';
import education from './Data/education';
import Experience from './Components/Experience';
import experience from './Data/experience';

const PROJECT_TYPES = [
  { value: 'data', label: 'systems & data' },
  { value: 'web', label: 'web' },
  { value: 'archive', label: 'archive' },
];

function App() {
  const [projectType, setProjectType] = useState('data');

  useEffect(() => {
    AOS.init({ duration: 500, offset: 60, once: true, easing: 'ease-out' });
  }, []);

  const visibleProjects = projectdata.filter((p) => p.type === projectType);

  return (
    <div>
      <Header />
      <main>
        <Description />

        <TitleHeading title="Experience" index="02" count={experience.length} />
        {experience.map((e, i) => (
          <Experience
            key={e.id ?? i}
            index={String(i + 1).padStart(2, '0')}
            company={e.company}
            designation={e.designation}
            duration={e.duration}
            description={e.description}
            certificate={e.certificate}
          />
        ))}

        <TitleHeading title="Projects" index="03" count={visibleProjects.length} />
        <div className="proj-filter" role="tablist" aria-label="Project categories">
          {PROJECT_TYPES.map((t) => (
            <button
              key={t.value}
              role="tab"
              aria-selected={projectType === t.value}
              onClick={() => setProjectType(t.value)}
              className={projectType === t.value ? 'proj-tab active' : 'proj-tab'}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="projectDisplay">
          {visibleProjects.map((p, i) => (
            <Projects
              key={p.Key ?? p.key ?? i}
              index={String(i + 1).padStart(2, '0')}
              title={p.title}
              description={p.description}
              frameworks={p.Technologies_Used}
              github={p.github}
              live={p.live}
              pic={p.pic}
              type={p.type}
            />
          ))}
        </div>
        <p className="proj-more">
          more on github →{' '}
          <a href="https://github.com/jevil25" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i> jevil25
          </a>
        </p>

        <TitleHeading title="Education" index="04" count={education.length} />
        {education.map((e, i) => (
          <Education
            key={e.key ?? i}
            college={e.college}
            year={e.year}
            course={e.course}
            marking_scheme={e.marking_scheme}
          />
        ))}

        <TitleHeading title="Skills" index="05" />
        <Skills />

        <TitleHeading title="Contact" index="06" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
