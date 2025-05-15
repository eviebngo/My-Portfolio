import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import styles from './Skills.module.css';

const skills = {
  'Programming Languages': ['Python', 'Java', 'C++', 'C', 'Swift', 'HTML', 'JavaScript', 'SQL'],
  'Frameworks': ['React', 'React Native', 'Flask', 'SwiftUI'],
  'Technologies': ['AWS', 'Tomcat', 'Kubernetes', 'Docker'],
  'Tools': ['Slack', 'GitHub', 'Figma', 'Lucidchart'],
};

const Skills = () => (
  <AnimateOnScroll y={40}>
    <section className={styles.skills} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.grid}>
        {Object.entries(skills).map(([category, items]) => (
          <div className={styles.category} key={category}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <ul className={styles.list}>
              {items.map((item) => (
                <li className={styles.item} key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </AnimateOnScroll>
);

export default Skills; 