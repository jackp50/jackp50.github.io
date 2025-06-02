import About from "./About"
import ProjectList from "./ProjectList"
import Resume from "./Resume"

export default function Content( {activeSection} ) {
    if (!activeSection) return <></>
    
    
     return (
    <div className="content">
      {activeSection === "About" && <About />}
      {activeSection === "Projects" && <ProjectList />}
      {activeSection === "Resume" && <Resume />}
    </div>
  )
}