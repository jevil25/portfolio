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
import { Router,Routes,Route } from "react-router-dom";
import './Components/css/normalize.css'
import { useState,useEffect } from 'react';
import Education from './Components/Education';
import education from './Components/Data/education';
// ..

function App() {
  const [loading,setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
		setLoading(false);
		},5000)

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
            title="Projects"
          />
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
