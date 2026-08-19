import React from 'react';
import '../css/Experience.css';

function Experience({ index, company, designation, duration, description, certificate }) {
  return (
    <article className="exp-row" data-aos="fade-up" data-aos-duration="500" data-aos-offset="60">
      <div className="exp-marker">
        <span className="exp-index">{index}</span>
      </div>
      <div className="exp-body">
        <header className="exp-head">
          <h3 className="exp-company">{company}</h3>
          <span className="exp-duration">{duration}</span>
        </header>
        <p className="exp-role">{designation}</p>
        <p className="exp-desc">{description}</p>
        {certificate && (
          <a className="exp-cert" href={certificate} target="_blank" rel="noopener noreferrer">
            certificate ↗
          </a>
        )}
      </div>
    </article>
  )
}

export default Experience
