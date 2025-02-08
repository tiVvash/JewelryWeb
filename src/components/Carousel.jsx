import Img1 from '../assets/Img1.jpg'
import Img2 from '../assets/Img6.jpg'
import Img3 from '../assets/Img3.jpg'
import Img4 from '../assets/Img4.jpg'
import Img5 from '../assets/Img5.jpg'
import './Carousel.css'
import { useState } from "react";
import { motion } from "framer-motion";


const images = [Img1, Img2, Img3, Img4, Img5];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(2); // Center image

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const getPosition = (index) => {
    const len = images.length;
    const positions = [ -2, -1, 0, 1, 2]; 
    return positions[(index - activeIndex + len) % len];
  };
  return (
    <div className="carouselContainer">
      <button className="arrow arrowLeft" onClick={handlePrev}>‹</button>
      <div className="carousel">
        {images.map((src, index) => {
          const position = getPosition(index);
          let scale = 1 - Math.abs(position) * 0.1;
          let zIndex = 5 - Math.abs(position);
          let xOffset = position * 200;
          return (
            <motion.img
              key={index}
              src={src}
              alt={`carousel-img-${index}`}
              className="carouselImage"
              style={{ zIndex }}
              animate={{ scale, x: xOffset }}
              transition={{ type: "linear",
              duration: 1,
            }}
            />
          );
        })}
      </div>
      <button className="arrow arrowRight" onClick={handleNext}>›</button>
    </div>
  );
}