import React from 'react';
import styles from './Home.module.css';
import profileImage from '../../assets/me.jpg';

function Home() {
  return (
    <section className={styles.home} id="home">
      <div className={styles.imageContainer}>
        <img src={profileImage} alt="Magda" className={styles.profileImage} />
      </div>
      <article className={styles.textContent}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p>
          I'm a passionate Frontend Developer with experience in logistics and customer service. I thrive in fast-paced environments where precision and analytical skills are paramount. My journey has equipped me with a versatile skill set and a strong work ethic.
        </p>
        <p>
          I love blending my personal interests with professional acumen, ensuring thorough attention to detail and a proactive approach to problem-solving. I'm always eager to learn and take on new challenges.
        </p>
      </article>
    </section>
  );
}

export default Home;
