import skills from "./Data/SkillsData";
import "./css/Description.css";

function Description(){
    return <>
    <div className="Description">
        <span>Aloha, My name is</span>
        <h1>Aaron Jevil Nazareth</h1>
        <h1>I build pages in 
            <span className="mov-text">{Array(skills.length).fill().map( (_,i) =>(
            <li className="moving-text">{ skills[i].title }</li>
        ))}</span></h1>
        <p>I am Computer Science Engineering Student. My interests are web development, watching anime, movies, random things on Youtube. I am also a pianist and like to play during my free time.</p>
    </div>
    </>
}

export default Description;