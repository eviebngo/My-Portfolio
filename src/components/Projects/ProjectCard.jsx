import React from 'react';
import defaultImg from "../../assets/project.png"; 
import SkintelImg from "../../assets/Skintel.png"; 
// import thirdProjectImg from "../../assets/third-project.png"; 
import styles from "./ProjectCard.module.css";

// Image mapping for different projects
const imageMapping = {
  "project.png": defaultImg,
  "Skintel.png": SkintelImg,
  // "third-project.png": thirdProjectImg
};

const ProjectCard = ({ title, imageSrc, description, skills = [], demo, source }) => {
  return (
    <div className={styles.container}>
        {/* Dynamically load image or default */}
        <img 
            src={imageMapping[imageSrc] || defaultImg}  
            alt={`Image of ${title}`} 
            className={styles.image}
        />

        {/* Project Title & Description */}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {/* Skills List */}
        {skills.length > 0 && (
            <ul className={styles.skills}> 
                {skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>{skill}</li>
                ))}
            </ul>
        )}

        {/* Links for Demo & Source */}
        <div className={styles.links}>
            {demo && (
                <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                    Live Demo
                </a>
            )}
            {source && (
                <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
                    View Source
                </a>
            )}
        </div>
    </div>
  );
}

export default ProjectCard;
