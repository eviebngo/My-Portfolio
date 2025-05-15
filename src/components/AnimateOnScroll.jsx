import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimateOnScroll = ({ children, delay = 0, y = 40, ...props }) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll; 