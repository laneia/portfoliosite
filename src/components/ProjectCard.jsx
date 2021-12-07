const ProjectCard = ({title, description, photo, link, technologies}) => {


    return (
        <div className="project-card">
                <div className="project-wrapper">
                    <img src={photo} alt="project screenshot" />

                    <a href={link} target="_blank" rel="noreferrer">
                        <div className="project-details">
                            <h1>{title}</h1>
                            <h2 className='technologies'>{technologies}</h2>
                            <p className='description'>{description}</p>
                        </div>            
                    </a>
                </div>
        </div>
    )
}
export default ProjectCard