import { useState, useEffect } from "react";
import Projects from "./Projects";

export default function ProjectList({ activeSection }) {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (activeSection === "Projects") {
            setIsExpanded(true);
        } else {
            setIsExpanded(false);
        }
    }, [activeSection]);

    const projectArray = [
        { title: "Box Office Calendar", description: "Displays the top 20 films of the user chosen year by revenue. Click on each poster for individual movie information ", link: "https://jackp50.github.io/movie-calendar/" },
        { title: "Tenzies", description: "Scrimba: Play the computer version of the classic game Tenzies", link: "https://jackp50.github.io/tenzies/" },
        { title: "Battleship", description: "The classic battleship game played against a computer", link: "https://jackp50.github.io/battleship/" },
        { title: "Weather App", description: "Displays real-time weather data.", link: "https://jackp50.github.io/WeatherApp/" },
        { title: "Tic Tac Toe", description: "Play Tic Tac Toe against a friend or foe!", link: "https://jackp50.github.io/TicTacToe/" },
        { title: "Mattress Man Media", description: "A media website for movie and game reviews", link: "https://mattressmanmedia.com/" },
        { title: "This Portfolio Website", description: "Skills used:", link: "https://jackp50.github.io/" }
    ];

    return (
        <div className={`project-list ${isExpanded ? "visible" : ""}`}>
            {projectArray.map((project, index) => (
                <Projects 
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                />
            ))}
        </div>
    );
}
