import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Connect.module.css';

const buttonVariants = {
  initial: { y: 40, opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.2 + i * 0.1, type: 'spring', stiffness: 60 }
  })
};

const iconVariants = {
  initial: { scale: 0.7, opacity: 0 },
  animate: (i) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: 0.5 + i * 0.1, type: 'spring', stiffness: 80 }
  })
};

const Connect = () => (
  <section className={styles.connectSection} id="connect">
    <motion.h2
      className={styles.title}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      Let's Connect
    </motion.h2>
    <motion.p
      className={styles.text}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      Have a project in mind? Let's create something amazing together.
    </motion.p>
    <motion.div
      className={styles.location}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <FaMapMarkerAlt className={styles.locationIcon} /> Burlingame, CA
    </motion.div>
    <div className={styles.buttonRow}>
      {[{
        icon: <FaEnvelope />, label: 'Get in Touch', href: 'mailto:alvinacchow@gmail.com', isPrimary: true
      }, {
        icon: <FaFileAlt />, label: 'View Resume', href: '/resume.pdf', isPrimary: false
      }].map((btn, i) => (
        <motion.a
          key={btn.label}
          href={btn.href}
          className={styles.button}
          target={btn.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          initial="initial"
          animate="animate"
          custom={i}
          variants={buttonVariants}
        >
          {btn.icon} {btn.label}
        </motion.a>
      ))}
    </div>
    <div className={styles.socialRow}>
      {[{
        icon: <FaGithub />, href: 'https://github.com/alvinacchow', label: 'GitHub'
      }, {
        icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/alvinacchow/', label: 'LinkedIn'
      }].map((social, i) => (
        <motion.a
          key={social.label}
          href={social.href}
          className={styles.socialIcon}
          target="_blank"
          rel="noopener noreferrer"
          initial="initial"
          animate="animate"
          custom={i}
          variants={iconVariants}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  </section>
);

export default Connect; 