import React from 'react';
import '../css/TopBar.css';

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-content">
          <span className="topbar-text">Quick Access</span>
          <div className="topbar-socials">
            <a 
              href="https://www.linkedin.com/in/aaron-nazareth-6580311b6/" 
              className="social-link"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/jevil25" 
              className="social-link"
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a 
              href="https://www.instagram.com/aaron_naz25/" 
              className="social-link"
              title="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a 
              href="mailto:jevil257@gmail.com" 
              className="social-link"
              title="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a 
              href="https://drive.google.com/file/d/1iC2y5qJpMWXqDkR1SyVrYbFIOcjm8_nD/view?usp=sharing" 
              className="social-link resume-link"
              title="Resume"
            >
              <i className="fa-solid fa-file"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
