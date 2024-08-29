import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <article className={styles.projectSection}>
        <h3 className={styles.secondTitle}>Large Project: BarterNet</h3>
        <p className={styles.projectText}>
          The &quot;BarterNet&quot; project was a group effort, where we built a platform for exchanging goods and services.
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

      <article className={styles.projectSection}>
        <h3 className={styles.secondTitle}>Tools I mastered</h3>
        <ul className={styles.techList}>
          <li>Visual Studio Code</li>
          <li>GitHub</li>
          <li>Jira</li>
          <li>Google Chrome Developer Tools</li>
          <li>Node.js</li>
          <li>Jest</li>
          <li>ESLint</li>
          <li>Cypress</li>
        </ul>
      </article>

      <article className={styles.projectSection}>
        <h3 className={styles.secondTitle}>Technologies I worked with</h3>
        <ul className={styles.techList}>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>TypeScript</li>
          <li>REST API</li>
          <li>JSON</li>
          <li>AJAX</li>
          <li>RWD (Responsive Web Design)</li>
          <li>Git</li>
          <li>React</li>
          <li>Firebase</li>
        </ul>
      </article>
    </section>
  );
}

export default Projects;
