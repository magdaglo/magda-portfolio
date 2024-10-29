import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import barterNetImage from '../../assets/barternet.png';

function Projects() {
  const projects = [
    {
      title: 'BarterNet',
      description:
        'A platform for exchanging goods and services, built collaboratively with a team.',
      image: barterNetImage,
      links: {
        github: 'https://github.com/infoshareacademy/jfdzr13-team-yellow',
        live: 'https://barternet.netlify.app/',
      },
    },
    // Add more projects as needed
  ];

  return (
    <section className={styles.projects} id="projects">
      <Helmet>
        <title>Projects - Magdalena Głowienka</title>
        <meta
          name="description"
          content="Explore projects developed by Magdalena Głowienka, showcasing skills in frontend development."
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Projects - Magdalena Głowienka" />
        <meta
          property="og:description"
          content="Discover the projects and collaborations of Magdalena Głowienka, a passionate Frontend Developer."
        />
        <meta property="og:image" content="URL_TO_YOUR_PROJECT_IMAGE" />
        <meta property="og:url" content="https://your-domain.com/projects" />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <article className={styles.projectCard} key={index}>
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className={styles.projectImage}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <div className={styles.projectLinks}>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
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
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
