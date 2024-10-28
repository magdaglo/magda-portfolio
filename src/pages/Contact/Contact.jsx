import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

function Contact() {
  const [isSent, setIsSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          setIsSent(true);
        },
        (error) => {
          console.error(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.sectionTitle}>Contact Me</h2>
      <form className={styles.contactForm} onSubmit={sendEmail}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" name="from_name" id="name" required placeholder="Your Name" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" name="from_email" id="email" required placeholder="Your Email" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" required placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
      {isSent && <p className={styles.successMessage}>Your message has been sent!</p>}

      <div className={styles.findMe}>
        <h3>You can also find me here:</h3>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/magdaglo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/magdalena-głowienka-868685102"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
