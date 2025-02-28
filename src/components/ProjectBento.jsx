import React from "react";
import styles from "./ProjectBento.module.css";
import defaultImg from "../assets/project.png";
import SkintelImg from "../assets/Skintel.png";

const images = [defaultImg, SkintelImg, defaultImg];

const ProjectBento = () => {
  return (
    <div className={styles.projectBentoContainer}>
      <div className={styles.carousel}>
        <div className={styles.carouselTrack}>
          {/* ✅ Duplicate the images at least twice for seamless looping */}
          {[...images, ...images, ...images, ...images].map((img, index) => (
            <img key={index} src={img} alt={`Project ${index + 1}`} className={styles.card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBento;
