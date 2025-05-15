import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Banner from './components/Banner';
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About/About';
import HorizontalGallery from './components/UXDesigns/HorizontalGallery';
import UXDesigns from './components/UXDesigns/UXDesigns';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './components/UXDesigns/HorizontalGallery.module.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const { scrollY } = useScroll();
  // Animate scale and opacity for the sticky header
  const scale = useTransform(scrollY, [0, 200], [1.5, 1]);
  const opacity = useTransform(scrollY, [120, 200], [0, 1]);

  useEffect(() => {
    setShowContent(!loading);
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {/* <Navbar /> */}
      <div style={{ position: 'sticky', top: 0, zIndex: 9999, width: '100vw', pointerEvents: 'none' }}>
        <motion.div
          className="stickyTitle"
          style={{
            scale,
            opacity,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          Evie Ngo
        </motion.div>
      </div>
      <main
        className={showContent ? 'main-fade-in' : ''}
        style={{
          paddingTop: '80px',
          position: 'relative',
          zIndex: 1,
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.7s ease-in-out',
        }}
      >
        <Banner />
        <Hero animate={showContent} />
        <About />
        <UXDesigns />
        <HorizontalGallery />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
