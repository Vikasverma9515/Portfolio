import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils"; // Make sure this function is correctly resolving image URLs

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src="/contact/emailIcon.png"// Should resolve correctly based on public/ contact folder
            alt="Email icon"
          />
          <a href="mailto:vikasverma9515@gmail.com">vikasverma951582@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="/contact/linkedinIcon.png" // Should resolve correctly based on public/ contact folder
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/vikas-verma-264103275/">
            linkedin.com/Vikas-Verma
          </a>
        </li>
        <li className={styles.link}>
          <img
            src="/contact/githubIcon.png" // Should resolve correctly based on public/ contact folder
            alt="Github icon"
          />
          <a href="https://github.com/Vikasverma9515">github.com/Vikasverma9515</a>
        </li>
      </ul>
    </footer>
  );
};
