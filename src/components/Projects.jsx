export default function Projects( {title, description, link} ) {
    return(
        <div className = "projects">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

    )
}