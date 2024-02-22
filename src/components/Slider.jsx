import React, { useState } from 'react';
import './Slider.css'; // Import your CSS file
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? 4 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex === 4 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <p className="carousel-indicators">
          {[...Array(5)].map((_, index) => (
            <p
              key={index}
              data-target="#myCarousel"
              data-slide-to={index}
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            ></p>
          ))}
        </p>

        {/* Wrapper for slides */}
        <div className="carousel-inner">
          {[image1, image2, image3, image4, image5].map((image, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            </div>
          ))}
        </div>

        {/* Left and right controls */}
        <a className="left carousel-control" href="#myCarousel" onClick={handlePrev} data-slide="prev">
          {/* Unicode symbol for left chevron */} 
          &#10094; 
          <span className="sr-only"></span>
        </a>
        <a className="right carousel-control" href="#myCarousel" onClick={handleNext} data-slide="next">
          {/* Unicode symbol for right chevron */}
          &#10095; 
          <span className="sr-only"></span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
