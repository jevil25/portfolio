import React from 'react';
import './css/Header.css';
const logoImage = require("./Images/loader.png")

function Header(){
    return (<>
    <div className="header">
        <div className="navbar">
            <div className="navlist">
                <a href="projects" className='AJN'><img src={logoImage} alt="" /></a>
                <a href="Description">About</a>
                <a href="projects">Projects</a>
                <a href="skills">Skills</a>
                <a href="contact">Contact</a>
            </div>
            <div className="navResume">
                <a href="">Resume</a>
            </div>
        </div>
    </div>
    </>
        )
}

export default Header;