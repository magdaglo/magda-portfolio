import React from "react";
import styles from "./Home.module.css";
import profileImage from "../../assets/me.jpg";

function Home() {
  return (
    <section className={styles.home}>
      <article className={styles.textContent}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.welcomeText}>
          With a robust background spanning logistics, customer service, and
          hands-on roles across various sectors, I bring a wealth of practical
          experience and a versatile skill set to the table. Starting work at a
          young age, I developed a strong work ethic and a passion for achieving
          excellence in every task, excelling in fast-paced environments where
          precision and analytical skills are paramount.
        </p>
        <p className={styles.welcomeText}>
          My career journey has included positions ranging from field work in
          agriculture to intricate logistics planning and customer engagement in
          a call center. This path has honed my ability to manage complex
          projects and navigate challenging customer interactions, while also
          conducting in-depth research in areas I am passionate about, such as
          travel and literature.
        </p>
        <p className={styles.welcomeText}>
          An avid reader and lover of tranquility, I blend my personal interests
          with professional acumen, ensuring thorough attention to detail and a
          proactive approach to problem-solving. My adaptability and continuous
          learning are reflected in a successful track record across diverse
          roles and industries. If you&apos;re looking for a dedicated professional
          who thrives on challenge and innovation, feel free to reach out or
          explore more of my projects.
        </p>
      </article>
      <div className={styles.imageContainer}>
        <img
          src={profileImage}
          alt="Magdalena Głowienka's profile"
          className={styles.profileImage}
        />
      </div>
    </section>
  );
}

export default Home;
