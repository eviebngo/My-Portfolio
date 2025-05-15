import React from 'react';
import Tilt from 'react-parallax-tilt';
import AnimateOnScroll from './AnimateOnScroll';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, github, demo, imageSrc }) => (
  <AnimateOnScroll y={60} delay={0.1}>
    <Tilt glareEnable={true} glareMaxOpacity={0.18} scale={1.04} tiltMaxAngleX={12} tiltMaxAngleY={12} className={styles.tilt}>
      <div className={styles.card}>
        {imageSrc && (
          <img src={imageSrc} alt={title} className={styles.image} />
        )}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.links}>
          {demo && <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">Demo</a>}
          {github && <a href={github} className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>}
        </div>
      </div>
    </Tilt>
  </AnimateOnScroll>
);

export default ProjectCard; 