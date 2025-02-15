import React from 'react';
import defaultImg from "../../assets/project.png"; 
import styles from "./ProjectCard.module.css";

const imageMapping = {
  "project.png": defaultImg  
};

const ProjectCard = ({ title, imageSrc, description, skills = [], demo, source }) => {
  return (
    <div className={styles.container}>
        <img 
            src={imageMapping[imageSrc] || defaultImg}  
            alt={`Image of ${title}`} 
            className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}> 
            {Array.isArray(skills) && skills.map((skill, id) => (
                <li key={id} className={styles.skill}>{skill}</li>
            ))}
        </ul>
        <div className={styles.links}>
            <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">Source</a>
        </div>
    </div>
  );
}

export default ProjectCard;
