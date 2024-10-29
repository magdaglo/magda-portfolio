import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Home.module.css';
import profileImage from '../../assets/me.jpg';

function Home() {
  return (
    <section className={styles.home} id="home">
      <Helmet>
        <html lang="en" />
        <title>Magdalena Głowienka - Frontend Developer</title>
        <meta
          name="description"
          content="I'm Magda, a passionate Frontend Developer with experience in logistics and customer service."
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Magdalena Głowienka - Frontend Developer" />
        <meta
          property="og:description"
          content="Explore my portfolio to see my projects and skills in web development."
        />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Magdalena Głowienka - Frontend Developer" />
        <meta
          name="twitter:description"
          content="I'm Magda, a passionate Frontend Developer with experience in logistics and customer service."
        />
        <meta name="twitter:image" content="URL_TO_YOUR_IMAGE" />
        {/* Structured Data with JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Magdalena Głowienka",
            "url": "https://your-domain.com",
            "image": "URL_TO_YOUR_IMAGE",
            "sameAs": [
              "https://www.linkedin.com/in/magdalena-glowienka",
              "https://github.com/magdaglo"
            ],
            "jobTitle": "Frontend Developer",
            "description": "I'm Magda, a passionate Frontend Developer with experience in logistics and customer service."
          }
          `}
        </script>
      </Helmet>
      <div className={styles.imageContainer}>
        <img
          src={profileImage}
          alt="Portrait of Magdalena Głowienka"
          className={styles.profileImage}
        />
      </div>
      <article className={styles.textContent}>
        <h1 className={styles.sectionTitle}>About Me</h1>
        <p>
          I'm a passionate Frontend Developer with experience in logistics and customer service. I
          thrive in fast-paced environments where precision and analytical skills are paramount. My
          journey has equipped me with a versatile skill set and a strong work ethic.
        </p>
        <p>
          I love blending my personal interests with professional acumen, ensuring thorough
          attention to detail and a proactive approach to problem-solving. I'm always eager to learn
          and take on new challenges.
        </p>
      </article>
    </section>
  );
}

export default Home;
