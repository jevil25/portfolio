import React, { useState, useEffect } from 'react';
import '../css/SideBar.css';

function SideBar() {
  const [rotation, setRotation] = useState(45);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate rotation based on scroll position
      // At 0px scroll: 45 degrees, At 1000px+ scroll: 90 degrees
      const scrollTop = window.scrollY;
      const maxScroll = 800;
      const newRotation = Math.min(45 + (scrollTop / maxScroll) * 45, 90);
      setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#Description', label: 'About', icon: 'fa-user' },
    { href: '#Experience', label: 'Experience', icon: 'fa-briefcase' },
    { href: '#Projects', label: 'Projects', icon: 'fa-code' },
    { href: '#Education', label: 'Education', icon: 'fa-graduation-cap' },
    { href: '#Skills', label: 'Skills', icon: 'fa-star' },
    { href: '#Contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  const socials = [
    { href: 'https://www.linkedin.com/in/aaron-nazareth-6580311b6/', icon: 'fa-linkedin', label: 'LinkedIn' },
    { href: 'https://github.com/jevil25', icon: 'fa-github', label: 'GitHub' },
    { href: 'https://www.instagram.com/aaron_naz25/', icon: 'fa-instagram', label: 'Instagram' },
    { href: 'mailto:jevil257@gmail.com', icon: 'fa-envelope', label: 'Email' },
  ];

  return (
    <div className="sidebar-container" style={{ transform: `rotate(${rotation}deg)` }}>
      <div className="sidebar-content">
        {/* Navigation Links */}
        <div className="sidebar-section nav-section">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="sidebar-link"
              title={link.label}
            >
              <i className={`fas ${link.icon}`}></i>
              <span className="link-label">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="sidebar-divider"></div>

        {/* Social Links */}
        <div className="sidebar-section social-section">
          {socials.map((social, index) => (
            <a 
              key={index}
              href={social.href}
              className="sidebar-social"
              title={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa-brands ${social.icon}`}></i>
            </a>
          ))}
          
          {/* Resume Link */}
          <a 
            href="https://drive.google.com/file/d/1uAZPGKKXcEjLqoFeKszPdDP2M1EDa63O/view?usp=sharing"
            className="sidebar-social resume-btn"
            title="Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-file"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
