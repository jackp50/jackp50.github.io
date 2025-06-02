import Content from "./components/Content"
import Menu from "./components/menu"
import { useState } from "react"

function App() {
  const [activeSection, setActiveSection] = useState(null)


  return (
    <>
        <div className = "container">
            <Menu setActiveSection = {setActiveSection} />
            <Content activeSection = {activeSection}/>

        </div>
    
    </>



  )
}

export default App
