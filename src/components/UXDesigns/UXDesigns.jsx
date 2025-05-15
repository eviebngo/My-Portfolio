import React from 'react';
import { motion } from 'framer-motion';
import styles from './UXDesigns.module.css';

const devices = [
  {
    id: 1,
    image: 'https://placehold.co/320x640/ffffff/4a4e69?text=Screen+1',
    style: { top: '5%', left: '2%', rotate: -18, zIndex: 2 }
  },
  {
    id: 2,
    image: 'https://placehold.co/320x640/ffffff/4a4e69?text=Screen+2',
    style: { top: '15%', right: '5%', rotate: 15, zIndex: 2 }
  },
  {
    id: 3,
    image: 'https://placehold.co/320x640/ffffff/4a4e69?text=Screen+3',
    style: { bottom: '10%', left: '10%', rotate: -8, zIndex: 1 }
  },
  {
    id: 4,
    image: 'https://placehold.co/320x640/ffffff/4a4e69?text=Screen+4',
    style: { bottom: '0%', right: '12%', rotate: 10, zIndex: 1 }
  },
  {
    id: 5,
    image: 'https://placehold.co/320x640/ffffff/4a4e69?text=Screen+5',
    style: { top: '40%', left: '40%', rotate: 3, zIndex: 3 }
  }
];

const floatAnim = {
  animate: {
    y: [0, -10, 0, 10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const UXDesigns = () => {
  return (
    <section className={styles.scatterSection}>
      <h2 className={styles.sectionTitle}>UX Designs</h2>
      <div className={styles.scatterContainer}>
        <div className={styles.radialBg}></div>
        {devices.map((device, i) => (
          <motion.img
            key={device.id}
            src={device.image}
            alt={`UX Design ${device.id}`}
            className={styles.deviceImg}
            style={device.style}
            {...floatAnim}
            animate={{
              ...floatAnim.animate,
              x: [0, i % 2 === 0 ? 10 : -10, 0, i % 2 === 0 ? -10 : 10, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default UXDesigns; 