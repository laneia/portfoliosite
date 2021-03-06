import { ProjectData } from "../data"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {

    return (
        <div id="projects">
            <h1>check me out</h1>
            <div>
                {
                    ProjectData.map((project) => (
                        <ProjectCard key={project.id} title={project.title} description={project.description} photo={project.photo} link={project.link} technologies={project.technologies} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects