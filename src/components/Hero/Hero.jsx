import React from 'react';
import styles from "./Hero.module.css";

const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Evie</h1>
        <p className={styles.description}>
        I'm a web developer and product manager student at UCI. Welcome to my digital home!
        </p>
        <a href="mailto:evienn@uci.edu" className={styles.contactBtn}>Contact me here</a>
    </div>
    </section>
  );
};

export default Hero
