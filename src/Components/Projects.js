import React from 'react';
import '../css/Projects.css';

function Projects({ index, title, description, frameworks, github, live, pic, type }) {
  const liveLinks = (live || []).filter(Boolean);
  const repoLinks = (github || []).filter(Boolean);
  const thumb = pic && pic[0];

  return (
    <article className="proj-card" data-aos="fade-up" data-aos-duration="500" data-aos-offset="60">
      <div className="proj-main">
        <span className="proj-eyebrow">proj / {index}</span>
        <h3 className="proj-title">{title}</h3>
        <p className="proj-desc">{description}</p>
        <p className="proj-stack">
          <span className="proj-stack-label">stack:</span> {frameworks.join(' · ')}
        </p>
        <div className="proj-links">
          {repoLinks.map((link, i) => (
            <a key={`g${i}`} href={link} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i> source
            </a>
          ))}
          {liveLinks.map((link, i) => (
            <a key={`l${i}`} href={link} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> live
            </a>
          ))}
        </div>
      </div>
      {thumb && (
        <a
          className="proj-thumb"
          href={liveLinks[0] || repoLinks[0] || undefined}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={liveLinks[0] || repoLinks[0] ? 0 : -1}
        >
          <img
            src={thumb}
            alt={title}
            style={type === "mobile" ? { width: "55%" } : {}}
            onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
          />
        </a>
      )}
    </article>
  );
}

export default Projects;
