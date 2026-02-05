import React from 'react';
import '../css/Experience.css';

function Experience({company,designation,duration,description,certificate}) {
  return (
    <div className="experience" data-aos="fade-left" data-aos-duration="600" data-aos-offset="80">
      <div className='experienceHeading'>
        <h3>{company}</h3>
      </div>
        <div class="expdescription">
            <h4>{designation}</h4>
            <h5>{duration}</h5>
            <p>{description}</p>
        </div>
        <div className='certification'>
            <pre>For certificate click <a href={certificate}>here</a></pre>    
        </div>    
    </div>
  )
}

export default Experience
