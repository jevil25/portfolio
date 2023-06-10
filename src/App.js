import './App.css';
import Description from './Components/Description.js';
import Header from './Components/Header.js'
import Projects from './Components/Projects'
import projectdata from './Components/Data/Projectdata'
import Skills from './Components/Skills'
import Contact from './Components/Contact';
import TitleHeading from './Components/TitleHeading';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import './Components/css/normalize.css'
import { useState,useEffect } from 'react';
import Education from './Components/Education';
import education from './Components/Data/education';
import Experience from './Components/Experience';
import experience from './Components/Data/experience';
// ..

function App() {
  const [loading,setLoading] = useState(true);
  const [projectType, setProjectType] = useState('web');

	useEffect(() => {
		const timeout = setTimeout(() => {
		setLoading(false);
		},3000)

		return () => clearTimeout(timeout);
	})
  return (
    <>
    <div>
      {loading?
      (<Loader />)
    :(
    <div>
      <Header />
        <Description />
        <TitleHeading 
            title="Projects"
          />
          <div className="projectType">
            <button onClick={() => setProjectType('web')} className={projectType === 'web' ? 'active projectButton' : 'projectButton'}>Web</button>
            <button onClick={() => setProjectType('mobile')} className={projectType === 'mobile' ? 'active projectButton' : 'projectButton'}>Mobile</button>
            <button onClick={() => setProjectType('Machine Learning')} className={projectType === 'machineLearning' ? 'active projectButton' : 'projectButton'}>machine Learning</button>
            <button onClick={() => setProjectType('Graphics')} className={projectType === 'dataScience' ? 'active projectButton' : 'projectButton'}>Graphics</button>
          </div>
              {Array(projectdata.length).fill().map((_,i)=>(
                <Projects
                  Key={projectdata[i].Key}
                  title={projectdata[i].title}
                  description={projectdata[i].description}
                  frameworks={projectdata[i].Technologies_Used}
                  github={projectdata[i].github}
                  live={projectdata[i].live}
                  pic={projectdata[i].pic}
                  />
              ))}
              <h3 class="apph3">For more projects visit my github repo's here: <p><a href="https://github.com/jevil25"><i class="fa-brands fa-github"></i>jevil25</a></p></h3>
          <TitleHeading 
            title="Experience"
          />
        {Array(experience.length).fill().map((_,i)=>(
                <Experience
                  Key={experience[i].Key}
                  company={experience[i].company}
                  designation={experience[i].designation}
                  duration={experience[i].duration}
                  description={experience[i].description}
                  certificate={experience[i].certificate}
                  />
          ))} 
        <TitleHeading 
            title="Education"
          />
        {Array(education.length).fill().map((_,i)=>(
                <Education
                  Key={education[i].Key}
                  college={education[i].college}
                  year={education[i].year}
                  course={education[i].course}
                  marking_scheme={education[i].marking_scheme}
                  />
              ))}
                <TitleHeading 
                  title="Skills"
                />
              <Skills />
            <TitleHeading 
              title="Contact"
            />
          <Contact />
        <Footer />
      </div>
    )
      }
      </div>
   </>
  );
}

export default App;
