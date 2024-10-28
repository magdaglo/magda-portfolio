import React from "react";
import styles from "./Projects.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import barterNetImage from "../../assets/barternet.png";
// import placeholderImage from "../../assets/placeholder.png"; // Placeholder image for additional projects

function Projects() {
  const projects = [
    {
      title: "BarterNet",
      description:
        "A platform for exchanging goods and services, built collaboratively with a team.",
      image: barterNetImage,
      links: {
        github: "https://github.com/infoshareacademy/jfdzr13-team-yellow",
        live: "https://barternet.netlify.app/",
      },
    },
    // {
    //   title: "Project Two",
    //   description: "A brief description of your second project.",
    //   image: placeholderImage,
    //   links: {
    //     github: "https://github.com/yourusername/project-two",
    //     live: "https://project-two-live-demo.com",
    //   },
    // },
    // Add more projects as needed
  ];

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <article className={styles.projectCard} key={index}>
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.overlay}>
                <div className={styles.projectLinks}>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
