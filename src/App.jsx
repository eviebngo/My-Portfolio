import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Banner from './components/Banner';
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About/About';
import AboutTimeline from './components/About/AboutTimeline';
import HorizontalGallery from './components/UXDesigns/HorizontalGallery';
import UXDesigns from './components/UXDesigns/UXDesigns';
import Projects from './components/Projects/Projects';
import './components/UXDesigns/HorizontalGallery.module.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showSideContent, setShowSideContent] = useState(false);
  const [shrinkMainContent, setShrinkMainContent] = useState(false);
  const [showYes, setShowYes] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const { scrollY } = useScroll();
  // Animate scale and opacity for the sticky header
  const scale = useTransform(scrollY, [0, 200], [1.5, 1]);
  const opacity = useTransform(scrollY, [120, 200], [0, 1]);

  useEffect(() => {
    setShowContent(!loading);
  }, [loading]);

  // Handler to close the timeline and show main content again
  const handleCloseTimeline = () => {
    setShowTimeline(false);
    setShowSideContent(false);
    setShrinkMainContent(false);
    setShowYes(false);
  };

  // Show timeline after main content transition
  const handleShowTimeline = () => {
    setShowSideContent(true);
    setTimeout(() => setShowTimeline(true), 1400); // match animation duration
  };

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {/* <Navbar /> */}
      <div style={{ position: 'fixed', top: 0, zIndex: 9999, width: '100vw', pointerEvents: 'none' }}>
        {!showTimeline && (
          <motion.div
            className="stickyTitle"
            style={{
              scale,
              opacity,
              textAlign: 'center',
            }}
          >
            Evie Ngo
          </motion.div>
        )}
        {/* Plane button and About Me excerpt under the title */}
        <div style={{ pointerEvents: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2.5rem' }}>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {(!loading && !showTimeline) && (
          <motion.main
            key="main"
            className={showContent ? 'main-fade-in' : ''}
            style={{
              paddingTop: '120px',
              position: 'relative',
              zIndex: 1,
              opacity: showContent ? 1 : 0,
              width: shrinkMainContent ? '50vw' : '100vw',
              paddingLeft: shrinkMainContent ? '4vw' : '0',
              paddingRight: shrinkMainContent ? '4vw' : '0',
              transition: 'opacity 0.7s, width 1.2s cubic-bezier(0.77,0,0.18,1), padding 1.2s cubic-bezier(0.77,0,0.18,1)',
              left: 0,
              margin: 0,
            }}
            initial={{ x: 0, scale: 1, opacity: 1 }}
            animate={{ 
              x: showSideContent ? '-100vw' : 0,
              scale: showSideContent ? 0.92 : 1,
              opacity: 1 
            }}
            transition={{ 
              duration: 1.4,
              ease: [0.77, 0, 0.18, 1],
              delay: showSideContent ? 0.1 : 0
            }}
            onAnimationComplete={() => {
              if (showSideContent) {
                setShrinkMainContent(true);
                setShowYes(true);
              } else {
                setShrinkMainContent(false);
                setShowYes(false);
              }
            }}
          >
            <Banner />
            <Hero animate={showContent} onFly={handleShowTimeline} />
            <About />
            {/* <Skills /> */}
            {/* <Contact /> */}
          </motion.main>
        )}
      </AnimatePresence>
      {/* Render Projects and UXDesigns only when main content is visible and not during loading/timeline */}
      {(!loading && !showTimeline && showContent) && <>
        <UXDesigns />
        <Projects />
        <HorizontalGallery />
      </>}
      {showTimeline && <AboutTimeline onReturn={handleCloseTimeline} />}
    </>
  );
}

export default App;
