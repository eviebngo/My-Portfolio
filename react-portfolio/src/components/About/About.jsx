import React from 'react';
import { BsPersonWorkspace } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaArrowPointer } from "react-icons/fa6";
import styles from "./About.module.css";


const About = () => {
  return (
    <section className={styles.container} id = "about">
        <h2 className={styles.title}>
            About
        </h2>

        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <span className={styles.workspaceIcon}>
                    <BsPersonWorkspace />
                </span>
                <div className={styles.aboutItemText}>
                    <h3>Project Manager</h3>
                    <p>I am a project manager currently working in blockchain club, overseeing projects, coordinating teams, and ensuring timely delivery of key milestones.</p>
                    </div>
            </li>
            <li className={styles.aboutItem}>
                <span className={styles.workspaceIcon}>
                    <FaArrowPointer />
                </span>
                <div className={styles.aboutItemText}>
                    <h3>Web Developer</h3>
                    <p>I am a web developer with experience creating responsive and optimized GUIs, implementing modern web technologies, and improving user experiences.</p>
                    </div>
            </li>
            <li className={styles.aboutItem}>
                <span className={styles.workspaceIcon}>
                    <CgWebsite />
                </span>
                <div className={styles.aboutItemText}>
                    <h3>UX Designer</h3>
                    <p>I am a UX designer passionate about crafting intuitive and user-friendly interfaces, focusing on accessibility, usability, and seamless interactions.</p>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default About