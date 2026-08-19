import React from 'react';
import "../css/Education.css"

function Education({ college, year, course, marking_scheme }) {
  return (
    <article className="edu-row" data-aos="fade-up" data-aos-duration="500" data-aos-offset="60">
      <div className="edu-marker" aria-hidden="true">▸</div>
      <div className="edu-body">
        <header className="edu-head">
          <h3 className="edu-college">{college}</h3>
          <span className="edu-year">{year}</span>
        </header>
        <p className="edu-course">{course}</p>
        <p className="edu-mark">{marking_scheme}</p>
      </div>
    </article>
  )
}

export default Education
