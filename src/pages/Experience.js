import { Route, Routes, Link } from "react-router-dom"
import ExperienceCard from '../components/ExperienceCard'
import { ExperienceData } from '../data'

const Experience = () => {

    return (
        <div>
            <h1>Experience</h1>
            <div className='experience-container'>         
                <nav >
                    <div>
                        Software Engineering
                        <Link to={`/experience/1`}><p>Full time</p></Link>
                        <Link to={`/experience/2`}><p>Internship</p></Link>
                        <Link to={`/experience/3`}><p>Freelance</p></Link>
                    </div>
                    <div>
                        Research
                        <Link to={`/experience/4`}><p>USDA</p></Link>
                        <Link to={`/experience/5`}><p>Research Foundation in Tropical Diseases</p></Link> 
                    </div>
                    <div>
                        Leadership
                        <Link to={`/experience/6`}><p>Executive DEI Council</p></Link>
                        <Link to={`/experience/7`}><p>Represented and led gender+ and disability community ERGs</p></Link>  
                    </div>
                    <div>
                        Volunteer
                        <Link to={`/experience/8`}><p>Ada Developers Academy</p></Link>
                        <Link to={`/experience/9`}><p>Shelter in Code</p></Link>
                        <Link to={`/experience/10`}><p>Pacific Science Center</p></Link>
                    </div>
                </nav>
               
                <div className='exp-cards-container'>
                    <Routes>
                        {
                            ExperienceData && ExperienceData.map(job => (
                                <Route key={job.id} path={`/experience/${job.id}`} element={<ExperienceCard title={job.title} company={job.company} tenure={job.tenure} duties={job.duties}/>}/>
                            ))
                        }
                        
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Experience