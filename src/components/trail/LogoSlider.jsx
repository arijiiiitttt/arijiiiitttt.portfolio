import React, { useEffect, useRef, useState } from 'react';

const LogoSlider = () => {
  const logoContainerRef = useRef(null);
  const logoListRef = useRef(null);
  const cloneRef = useRef(null);
  const [isAnimationRunning, setIsAnimationRunning] = useState(true);

  useEffect(() => {
    const logoContainer = logoContainerRef.current;
    const logoList = logoListRef.current;

    if (!logoList) return;

    // Clone the logo list for seamless scrolling
    const clone = logoList.cloneNode(true);
    clone.className = 'logos flex space-x-4 absolute';
    cloneRef.current = clone;
    logoContainer.appendChild(clone);

    let scrollSpeed = 2; // Adjust the scroll speed
    let logoWidth = logoList.offsetWidth;

    const startScrolling = () => {
      const scroll = () => {
        if (isAnimationRunning) {
          // Update left positions of the original and cloned list
          logoList.style.left = `${parseFloat(getComputedStyle(logoList).left) - scrollSpeed}px`;
          clone.style.left = `${parseFloat(getComputedStyle(clone).left) - scrollSpeed}px`;

          // Reset positions if either list reaches the end
          if (parseFloat(getComputedStyle(logoList).left) <= -logoWidth) {
            logoList.style.left = `${logoWidth}px`;
          }
          if (parseFloat(getComputedStyle(clone).left) <= -logoWidth) {
            clone.style.left = `${logoWidth}px`;
          }
        }

        requestAnimationFrame(scroll);
      };

      scroll();
    };

    startScrolling();

    return () => {
      // Cleanup on component unmount
      logoContainer.removeChild(clone);
    };
  }, [isAnimationRunning]);

  const handleMouseOver = (event) => {
    setIsAnimationRunning(false); // Stop animation on mouseover
  };

  const handleMouseOut = () => {
    setIsAnimationRunning(true); // Restart animation on mouseout
  };

  return (
    <div className="logo-container overflow-hidden relative w-full h-32" ref={logoContainerRef}>
      <div
        className="logos flex space-x-8 absolute transition-transform duration-1000 ease-linear"
        ref={logoListRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img src="/Logos/js.png" alt="JS Logo" className="w-24 h-24" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        <img src="/Logos/react.png" alt="React Logo" className="w-24 h-24" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        <img src="/Logos/vite.png" alt="Vite Logo" className="w-24 h-24" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        <img src="/Logos/python.png" alt="Python Logo" className="w-24 h-24" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        <img src="/Logos/html.png" alt="HTML Logo" className="w-24 h-24" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        <img src="/Logos/talwindcsss.png" alt="Tailwind CSS Logo" className="w-24 h-24" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        <img src="/Logos/nodejs.png" alt="NodeJS Logo" className="w-24 h-24" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        <img src="/Logos/java.png" alt="Java Logo" className="w-24 h-24" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        <img src="/Logos/mongodb.png" alt="MongoDB Logo" className="w-24 h-24" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        <img src="/Logos/css.png" alt="CSS Logo" className="w-24 h-24" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        <img src="/Logos/bluej.png" alt="BlueJ Logo" className="w-24 h-24" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
      </div>
    </div>
  );
};

export default LogoSlider;