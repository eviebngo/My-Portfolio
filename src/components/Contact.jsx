import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import styles from './Contact.module.css';

const Contact = () => (
  <AnimateOnScroll y={40}>
    <section className={styles.contact} id="contact">
      <h2 className={styles.title}>Let's Connect</h2>
      <p className={styles.text}>Have a project in mind? Let's create something amazing together.</p>
      <ul className={styles.links}>
        <li><a href="mailto:alvinacchow@gmail.com">alvinacchow@gmail.com</a></li>
        <li><a href="https://www.linkedin.com/in/alvinacchow/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/alvinacchow" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </section>
  </AnimateOnScroll>
);

export default Contact; 