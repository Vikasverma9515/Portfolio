import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vikas Verma</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:vikasverma951582@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* <img
        src={getImageUrl("/assets/hero/heroImage1.png")        }
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <img
  src="/hero/heroImage3.png"
  alt="hero image of me"
  className={styles.aboutImage}
/>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
