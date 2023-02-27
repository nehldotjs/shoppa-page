import React from "react";
import Carousel from "./utility/Carousel";
import "./styleComponents/hero.css";

// CONTEXT
// import { DataContext } from "../context/DataContextProvider";

function Hero(props) {
  // const { text } = useContext(DataContext);
  return (
    <>
      <div className="hero">
        <div className="carousel">
          <Carousel />
        </div>
      </div>
    </>
  );
}
export default Hero;
