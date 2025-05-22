import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlane } from 'react-icons/fa';

const timeline = [
  { year: '2018', title: 'Started Design Journey', desc: 'Began exploring digital design and illustration.' },
  { year: '2020', title: 'First Internship', desc: 'Worked as a junior designer at a creative agency.' },
  { year: '2021', title: 'Discovered Coding', desc: 'Fell in love with React and web animation.' },
  { year: '2022', title: 'Launched Portfolio', desc: 'Built my first animated portfolio and started freelancing.' },
  { year: '2023', title: 'UX/UI Focus', desc: 'Dove deep into UX, prototyping, and motion design.' },
  { year: '2024', title: 'Open for Internships!', desc: 'Ready for new adventures and creative challenges.' },
];

const AboutTimeline = ({ onReturn }) => {
  const containerRef = useRef(null);
  const [focusedIdx, setFocusedIdx] = useState(0);
  const eventRefs = useRef([]);

  // Intersection Observer to detect which event is centered
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      let minDiff = Infinity;
      let focusIdx = 0;
      eventRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          // Distance from center of viewport
          const diff = Math.abs((rect.top + rect.bottom) / 2 - (window.innerHeight / 2));
          if (diff < minDiff) {
            minDiff = diff;
            focusIdx = idx;
          }
        }
      });
      setFocusedIdx(focusIdx);
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('resize', handleScroll);
    handleScroll();
    // Scroll to first event on mount
    setTimeout(() => {
      if (eventRefs.current[0]) {
        eventRefs.current[0].scrollIntoView({ behavior: 'auto', block: 'center' });
      }
    }, 100);
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Calculate line start/end for the timeline
  const getLinePosition = () => {
    if (!eventRefs.current.length) return { top: 0, bottom: 0 };
    const first = eventRefs.current[0];
    const last = eventRefs.current[eventRefs.current.length - 1];
    if (!first || !last) return { top: 0, bottom: 0 };
    const containerRect = containerRef.current.getBoundingClientRect();
    const firstRect = first.getBoundingClientRect();
    const lastRect = last.getBoundingClientRect();
    // Offset from container top to first event's year center
    const top = first.offsetTop + 40; // 40px below year
    // Offset from container top to last event's card bottom
    const bottom = last.offsetTop + last.offsetHeight - 40; // 40px above last card bottom
    return { top, bottom };
  };
  const { top: lineTop, bottom: lineBottom } = getLinePosition();

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        background: 'none',
        zIndex: 10001,
        borderRadius: 32,
        boxShadow: '0 2px 32px #a6c1ee22',
        border: '4px solid #a6c1ee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -40, x: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -40, x: 40 }}
        transition={{ duration: 1.1, ease: [0.77, 0, 0.18, 1] }}
        style={{
          width: '85vw',
          height: '92vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          background: 'none',
          borderRadius: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE 10+
          /* Hide scrollbar for Webkit browsers */
          WebkitOverflowScrolling: 'touch',
          /* Hide scrollbar for Webkit browsers (inline) */
          /* This is a hack for inline style, but the style tag below is more robust */
        }}
        ref={containerRef}
        data-timeline-container="true"
      >
        <h1>Timeline Test</h1>
        {/* Hide scrollbar for Webkit browsers and others */}
        <style>{`
          [data-timeline-container]::-webkit-scrollbar { display: none !important; }
          [data-timeline-container] { scrollbar-width: none !important; -ms-overflow-style: none !important; }
        `}</style>
        {/* Vertical line only under the event descriptions */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            width: 4,
            background: 'linear-gradient(180deg, #a6c1ee 0%, #fbc2eb 100%)',
            borderRadius: 2,
            zIndex: 1,
            top: lineTop,
            height: lineBottom - lineTop,
            transform: 'translateX(-50%)',
            transition: 'top 0.3s, height 0.3s',
          }}
        />
        {/* Timeline events */}
        <div style={{ width: '100%', position: 'relative', zIndex: 2 }}>
          {timeline.map((item, idx) => (
            <motion.div
              key={item.year}
              ref={el => eventRefs.current[idx] = el}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 300,
                marginBottom: 40,
                scrollSnapAlign: 'center',
                position: 'relative',
                zIndex: 2,
              }}
              animate={focusedIdx === idx ? { scale: 1.08, opacity: 1 } : { scale: 0.85, opacity: 0.5 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            >
              {/* Dot and year */}
              <div style={{
                position: 'relative',
                width: 160,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {/* Dot */}
                <div style={{
                  width: 28,
                  height: 28,
                  background: '#fff',
                  border: '5px solid #a6c1ee',
                  borderRadius: '50%',
                  marginBottom: 10,
                  boxShadow: '0 2px 8px #a6c1ee33',
                }} />
                {/* Year */}
                <div style={{
                  fontWeight: 900,
                  fontSize: '2.7rem',
                  color: '#a6c1ee',
                  textShadow: '0 2px 8px #fff8',
                  marginTop: 8,
                }}>{item.year}</div>
              </div>
              {/* Card */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.97)',
                  borderRadius: 22,
                  boxShadow: '0 2px 18px #a6c1ee22',
                  padding: '2.2rem 2.2rem',
                  marginLeft: 18,
                  minWidth: 340,
                  maxWidth: 440,
                  borderLeft: '6px solid #a6c1ee',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '1.7rem', color: '#4a4e69', marginBottom: 16 }}>{item.title}</div>
                <div style={{ color: '#666', fontSize: '1.25rem', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Return button */}
        <button
          onClick={onReturn}
          style={{
            position: 'absolute',
            top: 32,
            left: 0,
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px #a6c1ee33',
            cursor: 'pointer',
            zIndex: 10,
          }}
          title="Return"
        >
          <FaPlane size={22} color="#a6c1ee" style={{ transform: 'rotate(160deg)' }} />
        </button>
      </motion.div>
    </div>
  );
};

export default AboutTimeline; 