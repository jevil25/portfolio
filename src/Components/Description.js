import "../css/Description.css";
import React, { useState, useEffect } from "react";
import coder from "../Images/result.svg";

function Description() {
    const [skills] = useState(["CSE Engineer", "Web Developer", "Problem Solver", "Gamer"]);
    const [currentSkill, setCurrentSkill] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentSkill === skills[index]) {
                setTimeout(() => {
                    setCurrentSkill("");
                    setIndex((prev) => (prev + 1) % skills.length);
                }, 1500);
            } else {
                setCurrentSkill(skills[index].slice(0, currentSkill.length + 1));
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [currentSkill, index, skills]);

    return (
        <div data-aos="fade-right" data-aos-duration="1000" id="Description">
            <div>
                <span>Aloha, My name is</span>
                <h1>Aaron Jevil Nazareth</h1>
                <div className="main-h1">
                    <h1>I am a</h1>
                    <h1 className="mov-text">
                        {currentSkill}<span className="cursor">|</span>
                    </h1>
                </div>
                <p>
                    I am Computer Science Engineering Student. My interests are web development, watching anime, movies, random things on Youtube. I am also a pianist and like to play during my free time. I am currently improving my skills in this field next I am going to start with Nextjs and typescript. I have also explored the field of cyber security in the past 2 years. I have built many different projects which are mentioned below. Do reach out to me for any advices and projects you want to collaborate with me in the below message box or using my socials.
                </p>
            </div>
            <div className="profile_img">
                <div className="background-pattern"></div>
                <img src={coder} alt="coder illustration" />
            </div>
        </div>
    );
}

export default Description;