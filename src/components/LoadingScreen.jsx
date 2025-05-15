import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onFinish }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 1600);
    const finish = setTimeout(() => onFinish(), 2000);
    return () => { clearTimeout(timer); clearTimeout(finish); };
  }, [onFinish]);

  return (
    <div className={`loading-screen${fade ? ' fade' : ''}`}>
      <div className="loading-container">
        <div className="coffee-cup">
          <div className="steam steam1"></div>
          <div className="steam steam2"></div>
          <div className="steam steam3"></div>
          <div className="cup">
            <div className="coffee"></div>
          </div>
        </div>
        <div className="loading-text">Brewing your portfolio...</div>
      </div>
    </div>
  );
};

export default LoadingScreen; 