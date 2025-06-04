export default function menu({setActiveSection}) {
    const menuItems = ["About", "Projects", "Resume"]
    return(
        <>
            <div className = "menu">
                <h2>Jack Pearne</h2>
                <p>Web Developer</p>
                <div className = "menu-items">
                    {menuItems.map((item) => (
                        <button key = {item} onClick = {() => setActiveSection(item)}>
                            {item}
                        </button>
                    ))}

                </div>

                <div className="social-links">
                    <a href="https://github.com/jackp50" target="_blank" rel="noopener noreferrer">
                        <img src = "/images/github-mark-white.svg" alt="GitHub" />
                    </a>
                    <a href="https://linkedin.com/in/jack-pearne-2583b5232" target="_blank" rel="noopener noreferrer">
                        <img src="/images/InBug-White.png" alt="LinkedIn" />
                    </a>
                </div>
                
            </div>

            
        </>
    )
}