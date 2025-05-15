import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "https://placehold.co/600x400/fbc2eb/ffffff?text=E-commerce",
    tags: ["React", "Node.js", "MongoDB"],
    size: "large"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "Simple and intuitive task management app",
    image: "https://placehold.co/400x400/a6c1ee/ffffff?text=Tasks",
    tags: ["React", "Firebase"],
    size: "small"
  },
  {
    id: 3,
    title: "Weather App",
    description: "Real-time weather updates with beautiful UI",
    image: "https://placehold.co/400x400/fbc2eb/ffffff?text=Weather",
    tags: ["React", "API"],
    size: "small"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern portfolio with smooth animations",
    image: "https://placehold.co/600x400/a6c1ee/ffffff?text=Portfolio",
    tags: ["React", "Framer Motion"],
    size: "large"
  }
];

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <div className={styles.bentoGrid}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`${styles.projectCard} ${styles[project.size]}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 