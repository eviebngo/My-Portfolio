import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = ({ animate }) => {
  // Animate the name's opacity: 1 at top, 0 after 200px scroll
  const { scrollY } = useScroll();
  const nameOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className={styles.hero} id="hero">
      <div className={animate ? styles.fadeUp : '' + ' ' + styles.content}>
        <motion.h1
          className={styles.name}
          style={{ opacity: nameOpacity }}
        >
          Evie Ngo
        </motion.h1>
        <h2 className={styles.title}>Aspiring Product Manager</h2>
        <p className={styles.intro}>
          B.S. Computer Science<br/>
          B.S. Business Information Management
        </p>
        <p className={styles.description}>
          Aspiring product manager based in the San Francisco Bay Area.<br/>
          With a computer science and business background, I specialize in designing innovative products that address real-world problems.
        </p>
        <a href="#contact" className={styles.cta}>Get in Touch</a>
      </div>
    </section>
  );
};

export default Hero; 