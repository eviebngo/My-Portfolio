import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <nav className={styles.navbar}>
        <a className = {styles.title} href="/">
        Portfolio
        </a>
        <div className={styles.menu}>

        <MdOutlineMenu
          style = {{ color: 'white', cursor: "pointer"}} //first {} for embedding JS expressions in JSX second {} is for defining an object in JS
          className={styles.menuBtn} 
          size = {100}
          onClick={() => setIsOpen(!isOpen)} // Toggle hamburger menu open/close (uses react library)
        />

        <ul 
            className={`${styles.menuItems} ${isOpen ? styles.show : ""}`}
            onClick={() => setIsOpen(false)}
        >
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  </nav>
  );
}

export default Navbar 