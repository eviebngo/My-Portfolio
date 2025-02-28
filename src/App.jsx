import React from "react";
import styles from "./App.module.css"; // ✅ Only Grid CSS
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";


const App = () => {
  return (
    <div className={styles.container}>
        <Navbar />
        <div className={styles.gridContainer}>
          <div className={`${styles.bentoItem} ${styles.hero}`}><Hero /></div>
          <div className={`${styles.bentoItem} ${styles.contact}`}><Contact /></div>
          <div className={`${styles.bentoItem} ${styles.experience}`}><Experience /></div>
          <div className={`${styles.bentoItem} ${styles.verticalStrip}`}>Vertical Strip</div>
          <div className={`${styles.bentoItem} ${styles.smallTop}`}>Small Top</div>
          <div className={`${styles.bentoItem} ${styles.smallBottom}`}>Small Bottom</div>
      </div>
    </div>
  );
};

export default App;
