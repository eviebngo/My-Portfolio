import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js, featuring real-time inventory and payment processing.",
    image: "https://placehold.co/600x400/fbc2eb/ffffff?text=E-commerce",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    size: "large"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "Simple and intuitive task management app with drag-and-drop functionality",
    image: "https://placehold.co/400x400/a6c1ee/ffffff?text=Tasks",
    tags: ["React", "Firebase"],
    size: "small"
  },
  {
    id: 3,
    title: "Weather App",
    description: "Real-time weather updates with beautiful UI and location-based forecasts",
    image: "https://placehold.co/400x400/fbc2eb/ffffff?text=Weather",
    tags: ["React", "API", "Geolocation"],
    size: "small"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern portfolio with smooth animations and interactive elements",
    image: "https://placehold.co/600x400/a6c1ee/ffffff?text=Portfolio",
    tags: ["React", "Framer Motion", "GSAP"],
    size: "medium"
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "Discover and save your favorite recipes with AI-powered recommendations",
    image: "https://placehold.co/400x400/fbc2eb/ffffff?text=Recipes",
    tags: ["React", "AI", "API"],
    size: "small"
  }
];

function ProjectCard({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`${styles.projectCard} ${styles[project.size]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
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
  );
}

const Projects = () => (
  <section className={styles.projectsSection} id="projects">
    <motion.h2
      className={styles.sectionTitle}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Projects
    </motion.h2>
    <div className={styles.bentoContainer}>
      <div className={styles.bentoGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 