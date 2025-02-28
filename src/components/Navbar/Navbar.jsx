import React from 'react';
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            Portfolio
        </a>
        <ul className={styles.navLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    );
}

export default Navbar;
