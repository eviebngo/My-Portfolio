import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { FaPlane } from 'react-icons/fa';
import styles from './Hero.module.css';

const GLIDE_DURATION = 2.2; // seconds
const END_SPACE = 160; // px, more space after the airplane at the end
const MIN_WIDTH = 900; // px, make the line visually longer
const LINE_MULTIPLIER = 1.2; // make the line even longer than the container

const PlaneWithDottedLine = ({ onFly }) => {
  const wrapperRef = useRef(null);
  const [lineLength, setLineLength] = useState(0);
  const [lockedLineLength, setLockedLineLength] = useState(null);
  const x = useMotionValue(0);
  const [isFlying, setIsFlying] = useState(false);
  const [hasFlown, setHasFlown] = useState(false);
  const [showPlane, setShowPlane] = useState(true);
  const opacity = useTransform(x, [0, lockedLineLength ?? lineLength], [1, 0]);

  // Measure the container width responsively
  useEffect(() => {
    if (isFlying) return; // Don't update during animation
    const updateLineLength = () => {
      if (wrapperRef.current) {
        // Subtract the plane size and end space for a clean stop
        const baseLength = Math.max(wrapperRef.current.offsetWidth, MIN_WIDTH);
        setLineLength(baseLength * LINE_MULTIPLIER - 44 - END_SPACE);
      }
    };
    updateLineLength();
    window.addEventListener('resize', updateLineLength);
    return () => window.removeEventListener('resize', updateLineLength);
  }, [isFlying]);

  // Animate x and trigger onFly at the end
  useEffect(() => {
    let controls;
    if (isFlying && lineLength > 0) {
      setLockedLineLength(lineLength); // Lock the line length for the duration of the animation
      setHasFlown(false);
      controls = animate(x, lineLength, {
        duration: GLIDE_DURATION,
        ease: 'easeInOut',
        onComplete: () => {
          onFly(); // Move the screen at the exact moment the plane reaches the end, before any state update
          setHasFlown(true);
          // Keep plane visible during screen transition
          setTimeout(() => {
            setShowPlane(false); // Unmount the plane after screen transition
            // Reset plane position after a delay (in the background)
            setTimeout(() => {
              x.set(0);
              setIsFlying(false);
              setHasFlown(false);
              setLockedLineLength(null); // Unlock after reset
              setShowPlane(true); // Remount the plane after reset
            }, 500); // Short delay for snappier reset
          }, 1400); // Match the screen transition duration
        }
      });
    }
    return () => controls && controls.stop();
  }, [isFlying, onFly, x, lineLength]);

  return (
    <div
      ref={wrapperRef}
      className={styles.dottedLineWrapper}
      style={{ height: 60, width: '100%', position: 'relative', minWidth: MIN_WIDTH }}
    >
      {/* Dotted Line */}
      <div
        className={styles.dottedLine}
        style={{
          position: 'absolute',
          left: 32,
          top: 30,
          width: lockedLineLength ?? lineLength,
          height: 0,
          borderTop: '4px dotted #a6c1ee',
          opacity: 0.7,
          zIndex: 0
        }}
      />
      {/* Plane Icon */}
      {showPlane && (
        <motion.div
          style={{
            position: 'absolute',
            left: 0,
            top: 12,
            x,
            opacity,
            zIndex: 2,
            cursor: isFlying ? 'default' : 'grab',
            filter: 'drop-shadow(0 2px 8px #a6c1ee33)',
            pointerEvents: isFlying ? 'none' : 'auto',
          }}
          drag={false}
          onClick={!isFlying ? () => setIsFlying(true) : undefined}
          title="Fly to About Me"
        >
          <FaPlane size={32} color="#fff" style={{ transform: 'rotate(-20deg)' }} />
        </motion.div>
      )}
      {/* Extra space after the airplane for visual separation */}
      <div style={{ position: 'absolute', left: (lockedLineLength ?? lineLength) + 44, top: 0, width: END_SPACE, height: 60 }} />
    </div>
  );
};

export default PlaneWithDottedLine; 