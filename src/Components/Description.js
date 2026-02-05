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
        <div data-aos="fade-right" data-aos-duration="600" data-aos-offset="80" id="Description">
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
                    I build scalable data systems and full-stack applications using Python, PySpark, AWS, and React. I love solving complex problems, optimizing performance, and turning data into actionable insights.
                </p>
                <p>
                    Currently working on large-scale data pipelines and recommendation engines that process millions of records and power intelligent applications.
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