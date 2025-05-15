import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Fabflix',
    description: 'Full-Stack Development\nMovie discovery and purchase platform',
    github: '#',
    demo: '#',
    imageSrc: 'https://placehold.co/400x220?text=Fabflix',
  },
  {
    title: 'LandMark',
    description: 'Full-Stack Development\nReal estate investment simulator with predictive AI models',
    github: '#',
    demo: '#',
    imageSrc: 'https://placehold.co/400x220?text=LandMark',
  },
  {
    title: 'Trailblazer',
    description: 'Full-Stack Development\nEducating and inspiring girls to thrive in sports',
    github: '#',
    demo: '#',
    imageSrc: 'https://placehold.co/400x220?text=Trailblazer',
  },
  {
    title: 'Where Do We Eat?',
    description: 'Backend Development\nVote on dinner choices and discover top picks',
    github: '#',
    demo: '#',
    imageSrc: 'https://placehold.co/400x220?text=Where+Do+We+Eat?',
  },
];

const Projects = () => (
  <AnimateOnScroll y={40}>
    <section className={styles.projects} id="projects">
      <h2 className={styles.title}>Featured Projects</h2>
      <div className={styles.cards}>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  </AnimateOnScroll>
);

export default Projects; 