import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';       // Dla sekcji one-page
import { Link as RouterLink } from 'react-router-dom';   // Dla /blog i ewentualnych innych tras
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

// Opcjonalnie zaimportuj logo, jeśli masz plik w assets/
// import logo from '../../assets/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Definiujemy linki nawigacyjne
  const navLinks = [
    { label: 'Home', to: 'home', type: 'scroll' },
    { label: 'Projects', to: 'projects', type: 'scroll' },
    { label: 'Contact', to: 'contact', type: 'scroll' },
    { label: 'Blog', to: '/blog', type: 'router' }, // nowy link do /blog
  ];

  return (
    <header className={styles.header} aria-label="Main Navigation">
      <div className={styles.logoContainer}>
 
            <RouterLink to="/" className={styles.logoLink} onClick={closeMenu}>
              <img src={logo} alt="MGDigital Lab Logo" className={styles.logoImage} />
              <span className={styles.logoText}>MGDigital Lab</span>
            </RouterLink>
{/* 
        <RouterLink to="/" className={styles.logoLink} onClick={closeMenu}>
          MGDigital Lab
        </RouterLink> */}

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
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.type === 'scroll' ? (
                <ScrollLink
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-60} // uwzględnienie wysokości nagłówka (jeśli jest fixed)
                  onClick={closeMenu}
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <RouterLink to={link.to} onClick={closeMenu}>
                  {link.label}
                </RouterLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
