const ExperienceCard = ({title, company, tenure, duties}) => {

    return (
        <div>
            <h1>{title} @ {company}</h1>
            <p>{tenure}</p>
            <ul>
                {
                    duties.map(duty => (
                        <li> {duty} </li>
                    ))  
                }  
            </ul>
        </div>
    )
}
export default ExperienceCard