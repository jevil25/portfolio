import React from 'react';
import '../css/Header.css';
import { useState } from 'react';

const logoImage = require("../Images/loader.png")

function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (<>
    <div className="header">
        <div className="navbar-container">
            <div className="navbar-content">
                {/* Logo and Name */}
                <div className="logo-section" data-aos="fade-right" data-aos-duration="600" data-aos-offset="0">
                    <img src={logoImage} alt="Logo" className="logo" />
                    <span className="name">Aaron Nazareth</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="nav-links">
                    <a href="#Description">About</a>
                    <a href="#Experience">Experience</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Education">Education</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Contact">Contact</a>
                </nav>

                {/* Social Links and Resume */}
                <div className="header-actions" data-aos="fade-left" data-aos-duration="600" data-aos-offset="0">
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/aaron-nazareth-6580311b6/" className="social-icon" title="LinkedIn">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/jevil25" className="social-icon" title="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/aaron_naz25/" className="social-icon" title="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="mailto:jevil257@gmail.com" className="social-icon" title="Email">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                    <a href="https://drive.google.com/file/d/1uAZPGKKXcEjLqoFeKszPdDP2M1EDa63O/view?usp=sharing" className="resume-btn">Resume</a>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-toggle" onClick={toggle}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="mobile-nav">
                    <a href="#Description" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#Experience" onClick={() => setIsOpen(false)}>Experience</a>
                    <a href="#Projects" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#Education" onClick={() => setIsOpen(false)}>Education</a>
                    <a href="#Skills" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a>
                    <div className="mobile-socials">
                        <a href="https://www.linkedin.com/in/aaron-nazareth-6580311b6/">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/jevil25">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/aaron_naz25/">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="mailto:jevil257@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </nav>
            )}
        </div>
    </div>
    </>
  )
}

export default Header;