import React, { useState, useEffect } from 'react';
import './Slideshow.css'

const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    setCurrentSlide(next);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 3 seconds (3000ms)
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlide]); // Re-run effect when the currentSlide changes

  return (
    <div className="slideshow">
      <div className="slide">
        <img src={slides[currentSlide].imageUrl} alt={slides[currentSlide].caption}/>
      </div>
    </div>
  );
};

export default Slideshow;
