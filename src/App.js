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

function App() {
  return (
    <>
      <Header />
      {/* <Loader /> */}
        <Description />
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
          <TitleHeading 
            title="Skills"
          />
          <Skills />
          <TitleHeading 
            title="Contact"
          />
          <Contact />
          <Footer />
   </>
  );
}

export default App;
