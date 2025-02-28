import React from 'react';
import { BsPersonWorkspace } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaArrowPointer } from "react-icons/fa6";
import styles from "./About.module.css";


const About = () => {
  return (
    <section className={styles.container} id = "about">
        <h2 className={styles.title}>
            Roles
        </h2>

        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <span className={styles.workspaceIcon}>
                    <BsPersonWorkspace />
                </span>
                <div className={styles.aboutItemText}>
                    <h3>Project Manager</h3>
                    </div>
            </li>
            <li className={styles.aboutItem}>
                <span className={styles.workspaceIcon}>
                    <FaArrowPointer />
                </span>
                <div className={styles.aboutItemText}>
                    <h3>Web Developer</h3>
                    </div>
            </li>
            <li className={styles.aboutItem}>
                <span className={styles.workspaceIcon}>
                    <CgWebsite />
                </span>
                <div className={styles.aboutItemText}>
                    <h3>UX Designer</h3>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default About