import About from "./About"
import ProjectList from "./ProjectList"
import Resume from "./Resume"

export default function Content( {activeSection} ) {
    if (!activeSection) return <div className = "content"></div>
    
    
     return (
    <div className="content">
      <div className = "inner-content">
        {activeSection === "About" && <About />}
        {activeSection === "Projects" && <ProjectList activeSection={activeSection} />}
        {activeSection === "Resume" && <Resume />}
      </div>
      
    </div>
  )
}