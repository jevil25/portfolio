import "./css/Description.css";
import React,{ useState,useEffect } from "react";
const profilepic = require("./Images/profilePic4.jpg")

function Description(){
    const [skill,setSkill] = useState(["CSE Engineer","Web Developer","Problem solver","Philomath","Gamer"]);
    const [index,setIndex] = useState(0);
    const [letterIndex,setLetterIndex] = useState(0);
    const [displaySkill,setDisplaySkill] = useState("");
    const letterDuration = 200;
    const [flag,setFlag] = useState(0);

    useEffect(() => {
        const letterInterval = setInterval(() => {
            if(letterIndex==skill[index].length-1){
                setFlag(1);
                // console.log("hii")
                setTimeout(() => {
                    setIndex((index + 1) % 5);
                    setLetterIndex(0);
                    setDisplaySkill("");
                    setFlag(0);
                  }, 1000); 
            }
            if(!flag){
                setLetterIndex(((letterIndex+1)%skill[index].length))
                setDisplaySkill(skill[index].slice(0, letterIndex + 1));
            }
        },letterDuration)
        return () => clearInterval(letterInterval)
    },[letterIndex, displaySkill, index, skill])

    return <>
    <div data-aos="fade-right" data-aos-duration="1000" id="Description">
        <div>
            <span>Aloha, My name is</span>
            <h1>Aaron Jevil Nazareth</h1>
            <div className="main-h1">
                <h1>I am a </h1>
                <h1><span className="mov-text">{displaySkill}</span></h1>
            </div>
            <p>I am Computer Science Engineering Student. My interests are web development, watching anime, movies, random things on Youtube. I am also a pianist and like to play during my free time. I am currently improving my skills in this field next I am going to start with Nextjs and typescript. I have also explored the field of cyber security in the past 2 years. I have built many different projects which are mentioned below. Do reach out to me for any advices and projects you want to collaborate with me in the below message box or using my socials.
            </p>
        </div>
        <div className="profile_img">
            <img src={profilepic} alt="" />
        </div>
    </div>
    </>
}

export default Description;