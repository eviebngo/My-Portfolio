import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <p>Let’s grab a virtual matcha!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <MdEmail/> 
                <a href="mailto:evienn@uci.edu">evienn@uci.edu</a>
            </li>
            <li className={styles.link}>
                <FaLinkedin/> 
                <a href="https://www.linkedin.com/in/evie-ngo-7b07991ab/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </li>
            <li className={styles.link}>
                <FaGithub/>
                <a href="https://github.com/eviebngo" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </li>
        </ul>
    </footer>
  );
}

export default Contact;
