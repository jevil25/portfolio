import React from 'react'
import "../css/TitleHeading.css"

function TitleHeading({ title }) {
  return (
    <div data-aos="fade-right" data-aos-duration="1000" class="projectHeading" id={title}>
      <h1>{ title }</h1>
        <div class="line"></div>
    </div>
  )
}

export default TitleHeading
