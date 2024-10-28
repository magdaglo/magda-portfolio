import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styles from './ToTopButton.module.css';
import { FaArrowUp } from 'react-icons/fa';

const ToTopButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button className={styles.toTopButton} onClick={scrollToTop} aria-label="Scroll to Top">
      <FaArrowUp />
    </button>
  );
};

export default ToTopButton;
