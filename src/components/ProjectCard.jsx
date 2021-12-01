const ProjectCard = ({title, description, photo, link, technologies}) => {

    return (
        <div>
            <a href={link} target="_blank" rel="noreferrer">
                <div>
                    <img src={photo} alt="projects you cant see" />
                    <div>
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