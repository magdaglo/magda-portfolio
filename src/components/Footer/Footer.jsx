import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        © 2024 by Magda. Proudly created with React.
      </p>
      <address className={styles.footerText}>
        Email me at:{" "}
        <a href="mailto:magdalena.glowienka92@gmail.com">
          magdalena.glowienka92@gmail.com
        </a>
      </address>
    </footer>
  );
}

export default Footer;
