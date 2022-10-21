import './App.css';
import Description from './Components/Description.js';
import Header from './Components/Header.js'
import Projects from './Components/Projects'
import projectdata from './Projectdata'

function App() {
  return (
    <><Header />
    <Description />
    <Projects 
      title={projectdata[0].title} 
      description={projectdata[0].description}
    />
    <Projects 
      title={projectdata[1].title} 
      description={projectdata[1].description}
    />
    <Projects 
      title={projectdata[2].title} 
      description={projectdata[2].description}
    />
          </>
  );
}

export default App;
