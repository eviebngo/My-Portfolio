import React, { useRef } from 'react';
import { BsPersonWorkspace } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaStar, FaSmileBeam } from "react-icons/fa";
import { motion, useMotionValue, useTransform, useScroll, useSpring } from 'framer-motion';
import styles from "./About.module.css";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, type: 'spring', stiffness: 60 }
  })
};

const About = () => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), {
    stiffness: 100,
    damping: 30
  });

  // Parallax effect for avatar glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useTransform(mouseX, [0, 1], ['-50%', '0%']);
  const glowY = useTransform(mouseY, [0, 1], ['-50%', '0%']);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className={styles.creativeAbout} id="about">
      <motion.div
        className={styles.aboutCard}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        animate={{ y: [0, -8, 0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ x }}
      >
        <div className={styles.avatarWrapper}>
          <img
            src="https://api.dicebear.com/7.x/pixel-art/svg?seed=alvina"
            alt="Alvina Avatar"
            className={styles.avatar}
          />
          <motion.div
            className={styles.avatarGlow}
            style={{
              left: glowX,
              top: glowY
            }}
          ></motion.div>
        </div>
        <div className={styles.aboutText}>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={0}
          >
            About Me <FaSmileBeam style={{ color: '#fbc2eb', verticalAlign: 'middle' }}/>
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={1}
          >
            Hi! I'm Alvina, a <b>Product Manager</b> and <b>UX Designer</b> passionate about building delightful digital experiences.<br/>
            I love <motion.span whileHover={{ scale: 1.3, rotate: -10 }} className={styles.icon}><FaStar /></motion.span> creative problem solving, <motion.span whileHover={{ scale: 1.3, rotate: 10 }} className={styles.icon}><BsPersonWorkspace /></motion.span> collaborating with teams, and <motion.span whileHover={{ scale: 1.3, rotate: 8 }} className={styles.icon}><CgWebsite /></motion.span> designing beautiful interfaces.<br/>
            When I'm not working, you can find me exploring new cafes, sketching, or hiking!
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;