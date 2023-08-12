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
        <div className={`navbar ${!isOpen ? '':"navbar-padding"}`}>
            <div data-aos="fade-left" data-aos-duration="1000" className="navlist">
                <a href="#Description" className='AJN'><img src={logoImage} alt="" /><span>Aaron Nazareth</span></a>
                <button onClick={toggle} class="navbar-toggle">
                    <i class="fas fa-bars"></i>
                </button>
                <div className={`mainnav ${!isOpen ? 'closeNav':""}`}>
                    <a href="#Description">About</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Experience">Experience</a>
                    <a href="#Education">Education</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Contact">Contact</a>
                </div>
            </div>
            <div ata-aos="fade-right" data-aos-duration="1000" className={`navResume ${!isOpen ? 'closeNav':""}`}>
                <a href="https://drive.google.com/file/d/1gP3OQjeuzfXRPV6eUh2sNuLWeYoMhiRL/view?usp=sharing">Resume</a>
            </div>
        </div>
    </div>
    </>
        )
}

export default Header;