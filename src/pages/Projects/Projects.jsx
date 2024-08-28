import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.sectionTitle}>My Projects</h2>

      <article className={styles.projectSection}>
        <h3 className={styles.secondTitle}>Small Projects</h3>
        <p className={styles.projectText}>
          During my learning journey, I completed several smaller projects that helped me build a strong foundation in JavaScript and React
        </p>
        <ul>
          <li>Todo List App</li>
          <li>Weather App</li>
          <li>Quiz Game</li>
          <li>Simple Calculator</li>
        </ul>
      </article>

      <article className={styles.projectSection}>
        <h3 className={styles.secondTitle}>Large Project: BarterNet</h3>
        <p className={styles.projectText}>
          The &quot;BarterNet&quot; project was a group effort, where we built a platform for exchanging goods and services
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/infoshareacademy/jfdzr13-team-yellow.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </li>
          <li>
            <a
              href="https://barternet.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Version
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Projects;
