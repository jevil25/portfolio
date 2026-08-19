import React from 'react'
import "../css/TitleHeading.css"

function TitleHeading({ title, index, count }) {
  return (
    <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="60" className="section-head" id={title}>
      <div className="section-head-row">
        <span className="section-index">{index}</span>
        <h2 className="section-title">{title.toLowerCase()}</h2>
        {count != null && (
          <span className="section-count">{count} {count === 1 ? 'record' : 'records'}</span>
        )}
      </div>
      <div className="section-rule"></div>
    </div>
  )
}

export default TitleHeading
