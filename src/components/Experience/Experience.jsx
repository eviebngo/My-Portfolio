import React from 'react';
import skills from "../../data/skills.json";  

import cppImg from "../../assets/cpp.png";  
import cssImg from "../../assets/css.png";
import figmaImg from "../../assets/figma.png";
import htmlImg from "../../assets/html.png";
import javascriptImg from "../../assets/javascript.png";
import pythonImg from "../../assets/python.png";
import reactImg from "../../assets/react.png";

import styles from "./Experience.module.css";

const imageMapping = {
    "cpp.png": cppImg,  
    "css.png": cssImg,
    "figma.png": figmaImg,
    "html.png": htmlImg,
    "javascript.png": javascriptImg,
    "python.png": pythonImg,
    "react.png": reactImg
};

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        {/* <h2 className={styles.title}>Experience</h2> */}
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={imageMapping[skill.imageSrc]} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Experience;
