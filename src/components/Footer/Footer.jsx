import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        © {new Date().getFullYear()} Magda. Proudly created with React.
      </p>
      <p className={styles.footerText}>
        Email me at: <a href="mailto:magdalena.glowienka92@gmail.com">magdalena.glowienka92@gmail.com</a>
      </p>
    </footer>
  );
}

export default Footer;
