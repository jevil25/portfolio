function Project(props){
    return <>
    <div className="projects">
        <h2 className="projecttitle">{props.title}</h2>
        <p className="projectdes">{props.description}</p>
    </div>
    </>
}

export default Project;