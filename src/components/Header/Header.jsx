import React from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header} aria-label="Main Navigation">
      <div>
        <Link to="home" smooth duration={500} className={styles.logo}>
          Magda&apos;s Portfolio
        </Link>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          {["home", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link to={section} smooth duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
