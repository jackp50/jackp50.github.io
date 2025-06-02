export default function menu({setActiveSection}) {
    const menuItems = ["Home", "About", "Projects", "Resume"]
    return(
        <>
            <div className = "menu">
                {menuItems.map((item) => (
                    <button key = {item} onClick = {() => setActiveSection(item)}>
                        {item}
                    </button>
                ))}
            </div>
        </>
    )
}