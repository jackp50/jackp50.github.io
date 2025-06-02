import { useState } from "react"

export default function Projects( {title, description, link} ) {
    const [isExpanded, setIsExpanded] = useState(false)
        return (
            <div className="projects">

                <h3 onClick={() => setIsExpanded(prev => !prev)} className="project-title">
                    {title}
                </h3>
            
            {isExpanded && (
                <div className="project-details">
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            )}
            </div>
  )
}