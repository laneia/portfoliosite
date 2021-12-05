const ProjectCard = ({title, description, photo, link, technologies}) => {

    return (
        <div className="project-card">
            <a href={link} target="_blank" rel="noreferrer">
                <div className="project-container">
                    <img src={photo} alt="projects you cant see" />
                    <div className="project-info">
                        <h1>{title}</h1>
                        <h2>{technologies}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default ProjectCard