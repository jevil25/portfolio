import React from 'react';
import './css/Header.css';
const logoImage = require("./Images/loader.png")

function Header(){
    return (<>
    <div className="header">
        <div className="navbar">
            <div className="navlist">
                <a href="#Description" className='AJN'><img src={logoImage} alt="" /><span>Aaron Nazareth</span></a>
                <a href="#Description">About</a>
                <a href="#Projects">Projects</a>
                <a href="#Skills">Skills</a>
                <a href="#Contact">Contact</a>
            </div>
            <div className="navResume">
                <a href="https://drive.google.com/uc?id=12ZTuCrEgXhhmACwGBJGi_cpDKohIcfDR&export=download">Resume</a>
            </div>
        </div>
    </div>
    </>
        )
}

export default Header;