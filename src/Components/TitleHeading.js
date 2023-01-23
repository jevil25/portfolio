import React from 'react'
import "./css/TitleHeading.css"

function TitleHeading({ title }) {
  return (
    <div class="projectHeading">
      <h1>{ title }</h1>
        <div class="line"></div>
    </div>
  )
}

export default TitleHeading
