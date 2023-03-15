import React, { useContext } from "react";
import Carousel from "react-elastic-carousel";
import { ProductContext } from "../../context/ProductData";
function ReactSlider() {
  const { outfitData } = useContext(ProductContext);
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    {
      width: 550,
      itemsToShow: 2,
      itemsToScroll: 2,
      pagination: true
    },
    { width: 850, itemsToShow: 4 },
    {
      width: 1150,
      itemsToShow: 5,
      itemsToScroll: 2
    },
    { width: 1450, itemsToShow: 5 },
    { width: 900, itemsToShow: 6 }
  ];
  // Custom button components
  // const CustomPrevButton = ({ props }) => {
  //   return <button onClick={console.log("PREV")}>Previous</button>;
  // };

  // const CustomNextButton = ({ props }) => {
  //   return <button onClick={console.log("NEXT")}>Next</button>;
  // };
  return (
    <Carousel
      // renderArrow={(props, itemIndex, currentIndex, nextSlide, prevSlide) => {
      //   if (prevSlide) {
      //     return <CustomPrevButton onClick={prevSlide} />;
      //   }
      //   if (nextSlide) {
      //     return <CustomNextButton onClick={nextSlide} />;
      //   }
      //   return null;
      // }}
      breakPoints={breakPoints}>
      {outfitData.map((item, index) => {
        const { img, name, price, beforePrice } = item;
        return (
          <div key={index} className="shoeCarouselMainWrapper">
            <button type="button" className="shoeCarousel">
              <div className="trendingCards" id="trendingCards">
                <div className="tCardImgContainer">
                  <img src={img[0]} alt="shoe" />
                </div>
                <h3 className="mainh3">{name}</h3>
                <div className="price">
                  <div className="a-price priceTag">$ {price}</div>
                  <div className="b-price priceTag">$ {beforePrice}</div>
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </Carousel>
  );
}

export default ReactSlider;
