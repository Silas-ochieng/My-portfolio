import { useState } from "react";
import taskImg from "../assets/task.jpeg";
import jobBoardImg from "../assets/jobBoard.jpeg";
import smartspaceImg from "../assets/smartspace-preview.jpeg"; // Add this import
import newsImg from "../assets/News platform.png"; // Add this import


type Project = {
  name: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
};

const initialProjects: Project[] = [
  {
    name: "SmartSpace123",
    description: "A modern event space booking platform with real-time availability and interactive UI.",
    technologies: ["React", "Vite", "TailwindCSS", "Axios"],
    liveLink: "https://smartspace123.vercel.app",
    githubLink: "https://github.com/Silas-ochieng/SmartSpace",
    image: smartspaceImg
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    technologies: ["React", "CSS", "Vite"],
    liveLink: "https://my-portfolio-dxn4.vercel.app/",
    githubLink: "https://github.com/Silas-ochieng",
  },
  {
    name: "Task Manager App",
    description: "A simple task manager app with CRUD functionality.",
    technologies: ["JavaScript", "React", "Bootstrap"],
    liveLink: "https://task-manager-henna-one.vercel.app/",
    githubLink: "https://github.com/Silas-ochieng/task-manager.git",
    image: taskImg,
  },
  {
    name: "Job Board App",
    description:
      "A job board platform where users can browse and post job listings. Includes search and filter features.",
    technologies: ["React", "TypeScript", "CSS Modules"],
    liveLink: "https://job-board-eight-psi.vercel.app/",
    githubLink: "https://github.com/Silas-ochieng/Job-board.git",
    image: jobBoardImg,
  },
  {
    name: "News & Media Platform",
    description: "A Django web application for sharing news, sports updates, and event information.",
    technologies: ["Django", "Python", "HTML", "CSS", "Bootstrap"],
    liveLink: "https://news-and-media-platform.onrender.com/",
    githubLink: "https://github.com/Silas-ochieng/News-and-Media-platform",
    image: newsImg,
  },
];

function Project() {
  const [projects] = useState<Project[]>(initialProjects);

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            )}
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span className="project-tech-item" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;