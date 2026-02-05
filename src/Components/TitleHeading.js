import React from 'react'
import "../css/TitleHeading.css"

function TitleHeading({ title }) {
  return (
    <div data-aos="fade-right" data-aos-duration="600" data-aos-offset="80" class="projectHeading" id={title}>
      <h1>{ title }</h1>
        <div class="line"></div>
    </div>
  )
}

export default TitleHeading
