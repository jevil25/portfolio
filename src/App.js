import './App.css';
import Description from './Components/Description.js';
import Header from './Components/Header.js'
import Projects from './Components/Projects'
import projectdata from './Projectdata'
import { Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
        <Description />
          {Array(projectdata.length).fill().map((_,i)=>(
            <Projects
              Key={projectdata[i].Key}
              title={projectdata[i].title}
              description={projectdata[i].description}
              frameworks={projectdata[i].Technologies_Used}
              />
          ))}
   </>
  );
}

export default App;
