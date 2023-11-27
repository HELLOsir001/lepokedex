import React, { useEffect, useState } from 'react';
import './css/ProgressBar.css';
import changementDeCouleur from './models/colorManage';

function ProgressBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPosition(position);
      setScrollHeight(height);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const progress = (scrollPosition / scrollHeight) * 100;

  const progressStyle = {
    width: `${progress}%`,
  };

  useEffect(() => {
    changementDeCouleur();
  }, []);


  return (
    <div className='progressContainer' id='pi'>
      <div className="progress" style={progressStyle} id='pa'></div>
    </div>
  );
}

export default ProgressBar;
