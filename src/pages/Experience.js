import { Route, Switch } from "react-router-dom"
import ExperienceCard from '../components/ExperienceCard'

const Experience = () => {

    return (
        <div>
            <h1>Experience</h1>
            <div>
                <div>
                    <nav>
                        <div>
                            Software Engineering
                            <ul>Full time</ul>
                            <ul>Internship</ul>
                            <ul>Freelance</ul>
                        </div>
                        <div>
                            Research
                            <ul>USDA</ul>
                            <ul>Research Foundation in Tropical Diseases</ul>
                        </div>
                        <div>
                            Leadership
                            <ul>Executive DEI Council</ul>
                            <ul>Represented and led gender+ and disability community ERGs</ul>
                        </div>
                        <div>
                            Volunteer
                            <ul>Ada Developers Academy</ul>
                            <ul>Shelter in Code</ul>
                            <ul>Pacific Science Center</ul>
                        </div>
                    </nav>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Experience