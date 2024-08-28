import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import ikon
import styles from "./Contact.module.css";

function Contact() {
  const [isSend, setIsSend] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aah4lck",
        "template_vputq6l",
        e.target,
        "KBte9SROAx0ptobcE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className={styles.contact}>
      <h2 className={styles.sectionTitle}>Contact Me</h2>
      <form className={styles.contactForm} onSubmit={sendEmail}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" name="from_name" id="name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" name="from_email" id="email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" required />
        </div>
        <button type="submit" className={styles.submitButton}>
          Text Me!
        </button>
      </form>
      {isSend && <p className={styles.successMessage}>Sent successfully!</p>}

      <div className={styles.findMe}>
        <h3>You will find me here</h3>
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
