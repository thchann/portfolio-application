import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import axios from 'axios';
import './index.scss';

const projects = [
    {
        title: "Health Insights App",
        year: "October 2024",
        description: "A full-stack web app for personalized health recommendations based on user data.",
        gistUrl: "https://gist.githubusercontent.com/thchann/0c87a4da0c29af23f7d83ed7c69d4b7f/raw",
        techStack: ["React", "Flask", "JavaScript", "TensorFlow", "MongoDB"],
        repoUrl: "https://github.com/johnstoklas/rowdy-hacks-2024"
    },
    {
        title: "Portfolio Website",
        year: "July 2024 - Aug 2024",
        description: "A personal portfolio showcasing software engineering projects and achievements.",
        gistUrl: "https://gist.githubusercontent.com/thchann/21f56dd2134c30aad5e4f937c5a27f2e/raw",
        techStack: ["React", "Flask", "Python", "JavaScript", "HTML", "CSS"],
        repoUrl: "https://github.com/thchann/portfolio-application"
    },
    {
        title: "Authentication Web App", 
        year: "June 2024 - July 2024",
        description: "An authentication system allowing for the storing of usernames and passwords.",
        techStack: ["React", "Flask", "Python", "JavaScript", "HTML", "CSS"],
        gistUrl: "https://gist.githubusercontent.com/thchann/343daf3f4add1d776fc06af2790169a4/raw",
        repoUrl: "https://github.com/thchann/authentication_webapp"
    },
    {
        title: "Ranking Website", 
        year: "June 2021 - August 2021",
        description: "A ranking website that broadcasts the top 100 properties for select metrics (for legal purposes only the snippet is shown).",
        gistUrl: "https://gist.githubusercontent.com/thchann/8885e603968bc3a0ef877ffb6de82fc7/raw",
        techStack: ["PHP", "phpMyAdmin", "HTML", "CSS", "SQL"],
        repoUrl: "https://thchann.github.io/portfolio-application/#/projects"
    },
];

const Projects = () => {
    const [gistContent, setGistContent] = useState({});

    useEffect(() => {
        projects.forEach((project) => {
            if (project.gistUrl) {
                axios.get(project.gistUrl)
                    .then(response => {
                        setGistContent((prevContent) => ({
                            ...prevContent,
                            [project.title]: response.data,
                        }));
                    })
                    .catch((error) => {
                        console.error(`Error fetching Gist for ${project.title}:`, error);
                    });
            }
        });
    }, []);

    return (
        <body>
            <div className="projects-container">
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h2>{project.title}</h2>
                            <h3>{project.year}</h3>
                            <p>{project.description}</p>
                            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
                            <div className="code-box">
                                {gistContent[project.title] ? (
                                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                                        {gistContent[project.title]}
                                    </SyntaxHighlighter>
                                ) : (
                                    <p>Loading code...</p>
                                )}
                            </div>
                            <div className="project-links">
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </body>
    );
};

export default Projects;
