import skills from "./Data/mainSkills";
import "./css/Description.css";
import React,{ useState,useEffect } from "react";

function Description(){
    const [skill,setSkill] = useState(["ReactJs","AngularJs","NodeJS","Handlebars"]);
    const [index,setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index+1)%4);
        },2000);
        return () => clearInterval(interval);
    },[index,skill])

    return <>
    <div className="Description">
        <span>Aloha, My name is</span>
        <h1>Aaron Jevil Nazareth</h1>
        <div>
            <h1>I build pages in </h1>
            <h1><span className="mov-text">{skill[index]}</span></h1>
        </div>
        <p>I am Computer Science Engineering Student. My interests are web development, watching anime, movies, random things on Youtube. I am also a pianist and like to play during my free time.</p>
    </div>
    </>
}

export default Description;