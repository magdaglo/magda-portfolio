import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

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
      <Helmet>
        <title>Contact - Magdalena Głowienka</title>
        <meta
          name="description"
          content="Get in touch with Magdalena Głowienka, Frontend Developer. Send a message or connect via social media."
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Contact - Magdalena Głowienka" />
        <meta
          property="og:description"
          content="Reach out to Magdalena Głowienka for collaborations or inquiries."
        />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="https://your-domain.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1 className={styles.sectionTitle}>Contact Me</h1>
      <form className={styles.contactForm} onSubmit={sendEmail}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="from_name"
            id="name"
            required
            placeholder="Your Name"
            aria-label="Your Name"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="from_email"
            id="email"
            required
            placeholder="Your Email"
            aria-label="Your Email"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Your Message"
            aria-label="Your Message"
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {isSent && <p className={styles.successMessage}>Your message has been sent!</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

      <div className={styles.findMe}>
        <h2>You can also find me here:</h2>
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
            href="https://www.linkedin.com/in/magdalena-glowienka"
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
