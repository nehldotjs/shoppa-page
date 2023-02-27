import React, { useState, useContext, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./utilityStyle/carousel.css";

import { DataContext } from "../../context/DataContextProvider";

function Carousel() {
  const { heroImages } = useContext(DataContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  });

  const prevButton = () => {
    const length = heroImages.length - 1;
    if (index === 0) {
      setIndex(length);
    } else {
      setIndex(index - 1);
    }
  };

  const nextButton = () => {
    const length = heroImages.length - 1;
    if (index === length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="carouselContainer">
      <div className="navigations">
        <button type="button" className="prevBtn" onClick={prevButton}>
          <FaChevronLeft className="FaIcons" />
        </button>
        <button type="button" className="nextBtn" onClick={nextButton}>
          <FaChevronRight className="FaIcons" />{" "}
        </button>
      </div>

      <div className="carousel-imageContainer">
        <div className="carousel-cardWrapper">
          <img
            src={heroImages[index].img}
            alt="shopping images"
            className="heroImages"
          />
          <div className="heroText">
            <h1>{heroImages[index].text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
