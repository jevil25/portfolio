import './App.css';
import Description from './Components/Description.js';
import Header from './Components/Header.js'
import Projects from './Components/Projects'
import projectdata from './Components/Data/Projectdata'
import Skills from './Components/Skills'
import Contact from './Components/Data/Contact';
import ProjectHeading from './Components/ProjectHeading';
import Loader from './Components/Loader';
import { Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <Loader /> */}
        <Description />
        <ProjectHeading />
          {Array(projectdata.length).fill().map((_,i)=>(
            <Projects
              Key={projectdata[i].Key}
              title={projectdata[i].title}
              description={projectdata[i].description}
              frameworks={projectdata[i].Technologies_Used}
              />
          ))}
          <Skills />
          <Contact />
   </>
  );
}

export default App;
