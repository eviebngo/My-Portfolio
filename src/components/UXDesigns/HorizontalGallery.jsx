import React, { useRef, useEffect } from 'react';
import styles from './HorizontalGallery.module.css';

const images = [
  { src: 'https://placehold.co/400x500/fff/222?text=Mock+1', top: 40, left: 0, rotate: -8, z: 2 },
  { src: 'https://placehold.co/350x350/eee/222?text=Mock+2', top: 120, left: 320, rotate: 6, z: 3 },
  { src: 'https://placehold.co/300x400/ddd/222?text=Mock+3', top: 0, left: 600, rotate: -4, z: 2 },
  { src: 'https://placehold.co/420x300/ccc/222?text=Mock+4', top: 180, left: 900, rotate: 10, z: 1 },
  { src: 'https://placehold.co/350x350/fff/222?text=Mock+5', top: 60, left: 1250, rotate: -12, z: 2 },
  { src: 'https://placehold.co/400x500/eee/222?text=Mock+6', top: 200, left: 1550, rotate: 7, z: 3 },
];

const galleryWidth = 1800; // px, adjust as needed

const HorizontalGallery = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const onWheel = (e) => {
      if (!container) return;
      // Only scroll horizontally if not at the end
      if (
        (e.deltaY > 0 && container.scrollLeft < galleryWidth - window.innerWidth) ||
        (e.deltaY < 0 && container.scrollLeft > 0)
      ) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };
    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <section className={styles.horizontalSection}>
      <h2 className={styles.sectionTitle}>UX Gallery</h2>
      <div
        className={styles.horizontalScroll}
        ref={containerRef}
        tabIndex={0}
        style={{ width: '100vw', overflowX: 'auto', overflowY: 'hidden' }}
      >
        <div
          className={styles.galleryTrack}
          style={{ width: galleryWidth, height: 600, position: 'relative' }}
          ref={scrollRef}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={`Mock ${i + 1}`}
              className={styles.galleryImg}
              style={{
                top: img.top,
                left: img.left,
                transform: `rotate(${img.rotate}deg)`,
                zIndex: img.z,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery; 