import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styles from './ToTopButton.module.css';
import { FaArrowUp } from 'react-icons/fa';

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className={styles.toTopButton}
          onClick={scrollToTop}
          aria-label="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ToTopButton;
