import React, { useState, useContext } from "react";
import "./styleComponents/newSeason.css";
import { DataContext } from "../context/DataContextProvider";

function NewSeason(prop) {
  const { clothingItems } = useContext(DataContext);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [children, setChildren] = useState(false);
  
  // NEW SEASON COLLECTION STATE PROPERTY
  const [gender, setGender] = useState("children");
  const [collection, setCollection] = useState("wears");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(null);
  function newItemImage(item) {
    setActiveImage(item);
  }

  function menDeActive() {
    if (!men) {
      setGender("men");
      setMen(true);
      setWomen(false);
      setChildren(false);
    } else {
      setMen(false);
    }
  }
   
  function womenDeActive() {
    if (!women) {
      setGender("women");
      setWomen(true);
      setMen(false);
      setChildren(false);
    } else {
      setWomen(false);
    }
  }
  function childrenDeActive() {
    if (!children) {
      setGender("children");
      setChildren(true);
      setMen(false);
      setWomen(false);
    } else {
      setChildren(false);
    }
  }
  const newSeasonCollections = clothingItems[0][gender][collection];

  return (
    <div className="newSeason">
      <div className="newSeasonHeader">
        <h3>New Release</h3>
        <div className="newSeasonUnderline"></div>
      </div>
      <div className="newSeasonContent">
        <div className="ns-sorting">
          {/* GENDER COLLECTION*/}

          {/* MEN */}
          <div className="menCollection">
            {/* FILTER */}
            <div className="m-header">
              <button type="button" onClick={menDeActive}>
                <h3 className="gender-category">Men</h3>
                <div
                  className={men ? "arrow" : "arrow flipArrow"}
                  id="arrow"></div>
              </button>
            </div>

            {/* CLOTHS COLLECTIONS */}
            <div className={men ? "m-collection-filterBtns" : "deactive"}>
              <button
                type="button"
                value={"wears"}
                onClick={() => setCollection("wears")}>
                Wears
              </button>
              <button
                type="button"
                value={"bags"}
                onClick={() => setCollection("bags")}>
                bags
              </button>
              <button
                type="button"
                value={"shoes"}
                onClick={() => setCollection("shoes")}>
                shoes
              </button>
              {/* <button
                type="button"
                value={"accessories"}
                onClick={() => setCollection("accesories")}>
                accessories
              </button> */}
            </div>
          </div>

          {/* WOMEN */}
          <div className="womenCollection">
            {/* FILTER */}
            <div className="w-header">
              <button type="button" onClick={womenDeActive}>
                <h3 className="gender-category">Women </h3>
                <div
                  className={women ? "arrow" : "arrow flipArrow"}
                  id="arrow"></div>
              </button>
            </div>

            {/* CLOTHS COLLECTIONS */}
            <div className={women ? "w-collection-filterBtns" : "deactive"}>
              <button
                type="button"
                value={"wears"}
                onClick={() => setCollection("wears")}>
                Wears
              </button>
              <button
                type="button"
                value={"bags"}
                onClick={() => setCollection("bags")}>
                bags
              </button>
              <button
                type="button"
                value={"shoes"}
                onClick={() => setCollection("shoes")}>
                shoes
              </button>
              {/* <button
                type="button"
                value={"accessories"}
                onClick={() => setCollection("accesories")}>
                accessories
              </button> */}
            </div>
          </div>

          {/* CHILDREN */}
          <div className="childrenCollection">
            {/* FILTER */}
            <div className="c-header">
              <button type="button" onClick={childrenDeActive}>
                <h3 className="gender-category">children</h3>
                <div
                  className={children ? "arrow" : "arrow flipArrow"}
                  id="arrow">
                  {" "}
                </div>
              </button>
            </div>
            {/* CLOTHS COLLECTIONS */}
            <div className={children ? "c-collection-filterBtns" : "deactive"}>
              <button
                type="button"
                value={"wears"}
                onClick={() => setCollection("wears")}>
                Wears
              </button>
              <button
                type="button"
                value={"bags"}
                onClick={() => setCollection("bags")}>
                bags
              </button>
              <button
                type="button"
                value={"shoes"}
                onClick={() => setCollection("shoes")}>
                shoes
              </button>
              {/* <button
                type="button"
                value={"accessories"}
                onClick={() => setCollection("accesories")}>
                accessories
              </button> */}
            </div>
          </div>
          {/* // GENDER  */}
        </div>

        {/* OUTFITS DISPLAY */}
        <div className="ns-productContainer">
          <div className="ns-productWrapper">
            {/* <h4>SILVER BAROQUE LA GRECA JERSEY JERSEY</h4> */}
            <div className="ns-imageContainer">
              <div className="ns-firtsImage">
                <img
                  // src={activeImage}
                  src={clothingItems[0][gender][collection][activeIndex]}
                  alt="male out fit"
                  className="ns-selectActiveImage"
                />
              </div>

              <div className="otherImages">
                {newSeasonCollections.map((item, index) => {
                  function currentIndex() {
                    setActiveIndex(() => index);
                  }
                  return (
                    <button
                      className="imageButtons"
                      key={index}
                      onClick={currentIndex}>
                      {/* onClick={newItemImage(item)}> */}
                      <div className="ns-SecondImage">
                        <img
                          src={item}
                          alt="men images"
                          className="imageSelect"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSeason;
