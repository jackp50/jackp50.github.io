import Content from "./components/Content"
import Menu from "./components/menu"
import Intro from "./components/Intro"
import { useState, useEffect } from "react"

function App() {
  const [activeSection, setActiveSection] = useState(null)
  const [showIntro, setShowIntro] = useState(true)

     // Hide intro after 3 seconds
    useEffect(() => {
      setTimeout(() => {
        setShowIntro(false);
      }, 3000); // Adjust timing if needed
    }, []);

  return (
    <>
      {showIntro ? (
        <Intro /> /* Show intro while `showIntro` is true */
      ) : (
        <div className="container">
          <Menu setActiveSection={setActiveSection} />
          <Content activeSection={activeSection} />
        </div>
      )}
    </>



  )
}

export default App
