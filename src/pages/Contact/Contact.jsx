import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setIsSent(true);
          e.target.reset();
          setIsLoading(false);
        },
        (error) => {
          console.error('There was an error sending the email:', error.text);
          setErrorMessage('An error occurred while sending the message. Please try again.');
          setIsLoading(false);
        }
      );
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
        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {isSent && <p className={styles.successMessage}>Your message has been sent!</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

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
