"use client"
import React, { useState, useEffect, useRef } from 'react';

const ImageSlider = () => {
  const [isPoppedOut, setIsPoppedOut] = useState(false);
  const firstImageRef = useRef(null);
  const textRef = useRef(null);
  const secondImageRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPoppedOut(false);
    }, 3000); // Slide back in after 3 seconds

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [isPoppedOut]);

  const handleClick = () => {
    setIsPoppedOut(true);
  };

  return (
    <div className="relative w-full h-64">
      <img
        src="/your-image.jpg" // Replace with your image path
        alt="First Image"
        className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
          isPoppedOut ? 'translate-y-[-50px]' : '' 
        }`}
        ref={firstImageRef}
        onClick={handleClick}
      />

      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold transition-transform duration-500 ease-in-out ${
          isPoppedOut ? 'translate-y-[-50px]' : '' 
        }`}
        ref={textRef}
      >
        Hi!
      </div>

      <img
        src="/your-second-image.jpg" // Replace with your second image path
        alt="Second Image"
        className={`w-full h-full object-cover absolute top-0 left-0 transition-transform duration-500 ease-in-out ${
          isPoppedOut ? 'translate-y-[-50px]' : '' 
        }`}
        ref={secondImageRef}
      />
    </div>
  );
};

export default ImageSlider;