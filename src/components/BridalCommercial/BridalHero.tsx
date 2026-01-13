import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Hero.css";
import hero1 from "../../assets/Home-Banner.jpg";
import hero2 from "../../assets/Home-Banner-2.jpg";

const BridalHero: React.FC = () => {
  return (
    <div className="hero-wrapper">
      <Carousel
        fade
        interval={5000}
        controls={false}
        indicators={false}
        pause={false}
      >
        <Carousel.Item>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${hero1})` }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${hero2})` }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BridalHero;
