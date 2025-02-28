import React from 'react';
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {
          projects.map((project, id) => (
            <ProjectCard 
              key={id} 
              title={project.title}
              imageSrc={project.imageSrc}  
              description={project.description}
              skills={project.skills}
              demo={project.demo}
              source={project.source}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Projects;
