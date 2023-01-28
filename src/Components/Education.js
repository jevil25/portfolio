import React from 'react';
import "./css/Education.css"

function Education({ key,college,year,course,marking_scheme }) {
  return (
    <div id="education">
      <h1>{ college }</h1><span>({year})</span>
      <h3>{ course }</h3>
      <h5>{ marking_scheme }</h5>
    </div>
  )
}

export default Education
