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
        {
            title: "Box Office Calendar",
            description: "A dynamic web application that allows users to input a specific year and instantly view the top 20 highest-grossing movies. Built with React, this project showcases API integration, smooth UI interactions, and real-time data retrieval.",
            link: "https://jackp50.github.io/movie-calendar/",
            skills: ["React", "API Integration","Vanilla JS", "HTML", "CSS", "CoPilot AI"]
        },
        {
            title: "Tenzies - Scrimba",
            description: "A fun and interactive digital version of the classic Tenzies dice game. Players roll 10 dice, strategically holding numbers to match all dice. Developed as part of Scrimba’s React course, this project demonstrates state management and UI interactivity.",
            link: "https://jackp50.github.io/tenzies/",
            skills: ["React", "Vanilla JS", "HTML", "CSS", "CoPilot AI", "Scrimba"]
        },
        {
            title: "AI Chef - Scrimba",
            description: "What started as a Scrimba project, I made into an AI-powered recipe assistant that suggests meal ideas based on user-selected ingredients. This project demonstrates API integration, real-time data processing, and a smooth UI for user interaction.",
            link: "https://jackp50.github.io/scrimba-chef-claude/",
            skills: ["React", "API Integration", "Node.js", "Express", "Render", "Anthropic Claude API", "Vanilla JS", "HTML", "CSS", "CoPilot AI", "Scrimba"]
        },
        {
            title: "Battleship",
            description: "A browser-based Battleship game where players challenge an AI opponent in a strategic naval showdown. This project highlights efficient game logic, responsive UI design, and JavaScript-powered interactive gameplay.",
            link: "https://jackp50.github.io/battleship/",
            skills: ["Vanilla JS", "HTML", "CSS", "CoPilot AI"]
        },
        {
            title: "Mattress Man Media",
            description: "A media review website inspired by the pixel-art aesthetics of early 2010s blogs. Built entirely with HTML and CSS, this project pushed creative design limits while delivering a vibrant and engaging web experience.",
            link: "https://mattressmanmedia.com/",
            skills: ["HTML", "CSS"]
        },
        {
            title: "This Portfolio Website",
            description: "A personal portfolio showcasing my web development projects and skills. Built with React and custom CSS for a polished, dynamic design, this site highlights seamless navigation, smooth transitions, and a structured layout.",
            link: "https://jackp50.github.io/",
            skills: ["React", "Vanilla JS", "HTML", "CSS", "CoPilot AI"]
        },
        {
            title: "Weather App",
            description: "A sleek weather lookup tool where users enter a zip code to instantly receive local weather conditions. This project showcases API integration, real-time data fetching, and smooth UI updates.",
            link: "https://jackp50.github.io/WeatherApp/",
            skills: ["Vanilla JS", "API Integration", "HTML", "CSS"]
        },
        {
            title: "Tic Tac Toe",
            description: "A classic two-player Tic Tac Toe game built for intuitive side-by-side play. Featuring a clean UI and seamless game logic, this project demonstrates DOM manipulation, event handling, and interactive component design.",
            link: "https://jackp50.github.io/TicTacToe/",
            skills: ["Vanilla JS", "HTML", "CSS"]
        }
    ]


    return (
        <div className={`project-list ${isExpanded ? "visible" : ""}`}>
            {projectArray.map((project, index) => (
                <Projects 
                    key={index}
                    title={project.title}
                    description={project.description}
                    skills = {project.skills}
                    link={project.link}
                />
            ))}
        </div>
    );
}
