export default function menu({setActiveSection}) {
    const menuItems = ["Home", "About", "Projects", "Resume"]
    return(
        <>
            <div className = "menu">
                <h2>Jack Pearne</h2>
                <p>Front End Web Developer</p>
                <div className = "menu-items">
                    {menuItems.map((item) => (
                        <button key = {item} onClick = {() => setActiveSection(item)}>
                            {item}
                        </button>
                    ))}

                </div>
                
            </div>
        </>
    )
}