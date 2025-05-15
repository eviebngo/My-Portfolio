import React from 'react';
import styles from './Banner.module.css';

const text = 'ATTENTION!! Evie is Open For Internships';

const Banner = () => (
  <div className={styles.bannerWrapper}>
    <div className={styles.marquee}>
      <span className={styles.marqueeText}>
        {Array(8).fill(text).map((t, i) => (
          <span key={i} className={styles.marqueeChunk}>{t}</span>
        ))}
      </span>
    </div>
  </div>
);

export default Banner; 