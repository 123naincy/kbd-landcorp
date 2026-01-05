import React, { useState, useEffect } from "react";
import "./Hero.css";
import hero1 from "../../assets/Home-Banner.jpg";
import hero2 from "../../assets/Home-Banner-2.jpg";

interface SlideData {
  id: number;
  bgImage: string;
}

const sliderData: SlideData[] = [
  { id: 1, bgImage: hero1 },
  { id: 2, bgImage: hero2 },
];

const BridalHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <div
          className="slider-slide"
          style={{
            backgroundImage: `url(${sliderData[currentSlide].bgImage})`,
          }}
        />

        {/* Arrows */}
        <button
          className="slider-arrow slider-arrow-left"
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + sliderData.length) % sliderData.length
            )
          }
          aria-label="Previous slide"
        >
          &#10094;
        </button>

        <button
          className="slider-arrow slider-arrow-right"
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % sliderData.length)
          }
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default BridalHero;
