function Project({ Key,title,description,frameworks }){
    return <>
    <div className="projects">
        <h2 className="projecttitle">{title}</h2>
        <p className="projectdes">{description}</p>
        {Array(frameworks.length).fill().map((_,i)=>(
            <li>{frameworks[i]}</li>
        ))}
    </div>
    </>
}

export default Project;