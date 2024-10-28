import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = ['home', 'projects', 'contact'];

  return (
    <header className={styles.header} aria-label="Main Navigation">
      <div className={styles.logoContainer}>
        <Link
          to="home"
          smooth
          duration={500}
          className={styles.logo}
          aria-label="Go to Home"
          onClick={closeMenu}
        >
          Magda's Portfolio
        </Link>
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Menu Toggle"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navLinks}>
          {navLinks.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth
                duration={500}
                aria-label={`Go to ${section}`}
                onClick={closeMenu}
              >
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
