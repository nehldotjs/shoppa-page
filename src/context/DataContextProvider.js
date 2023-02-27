import React, { createContext } from "react";
// MALE COLLECTION IMAGE
import maleOutfit1 from "../assets/wears/maleOutfitFull.png";
import maleOutfit2 from "../assets/wears/maleOutfit 2.png";
import maleOutfit3 from "../assets/wears/maleOutfitQuarter.png";
// SHOES
import shoe1 from "../assets/shoes/shoe1.jpg";
import shoe2 from "../assets/shoes/shoe2.jpg";
import shoe3 from "../assets/shoes/shoe3.jpg";
// BAGS
import bag1 from "../assets/bags/bag1.jpg";
import bag2 from "../assets/bags/bag2.jpg";
import bag3 from "../assets/bags/bag3.jpg";

// MALE COLLECTION IMAGE
// WOMEN COLLECTION

import womenT1 from "../assets/wears/womenTop.jpg";
import womenT2 from "../assets/wears/womenTop2.jpg";
import womenT3 from "../assets/wears/womenTop3.jpg";
// SHOES
import womenshoe1 from "../assets/shoes/womenShoe1.jpg";
import womenshoe2 from "../assets/shoes/womenShoe2.jpg";
// // BAGS
import womenbag1 from "../assets/bags/womenBag1.jpg";
import womenbag2 from "../assets/bags/womenBag2.jpg";
// WOMEN COLLECTION

// CHILDRE COLLECTION
import kidsWear1 from "../assets/wears/kidsWear1.jpg";
import kidsWear2 from "../assets/wears/kidsWear2.jpg";
// SHOES
import kidsShoe1 from "../assets/shoes/kidsShoe1.jpg";
import kidsShoe2 from "../assets/shoes/kidsShoe2.jpg";
import kidsShoe3 from "../assets/shoes/kidsShoe3.jpg";
// // BAGS
import kidsBag1 from "../assets/bags/kidsBag1.jpg";
import kidsBag2 from "../assets/bags/kidsBag2.jpeg";
import kidsBag3 from "../assets/bags/kidsBag3.jpeg";
// CHILDRE COLLECTION

// HERO IMAGE
import hero1 from "../assets/heroImages/image1.jpg";
import hero2 from "../assets/heroImages/image2.jpg";
import hero3 from "../assets/heroImages/image3.jpg";
import hero4 from "../assets/heroImages/image4.jpg";
import hero5 from "../assets/heroImages/image5.jpg";
import hero6 from "../assets/heroImages/image6.jpg";
import hero7 from "../assets/heroImages/image7.jpg";
import hero8 from "../assets/heroImages/image8.jpg";
import hero9 from "../assets/heroImages/image9.jpg";
// HERO IMAGE

export const DataContext = createContext();

function DataContextProvider(props) {
  const heroImages = [
    {
      img: hero1,
      text: "We offer secure payment processing, so you can be sure your information is safe",
    },
    {
      img: hero2,
      text: "Our customer service is top-notch and always available to answer any questions or concerns.",
    },
    {
      img: hero3,
      text: "We provide free shipping on orders over $50",
    },
    {
      img: hero4,

      text: "Our website offers the widest selection of shopping products available, all at the best price.",
    },
    {
      img: hero5,
      text: "We have a rewards program that allows customers to earn points for every purchase they make",
    },
    {
      img: hero6,
      text: "We offer exclusive deals and discounts for our loyal customers",
    },
    {
      img: hero7,
      text: "We have a generous return policy that allows you to return any item for any reason",
    },
    {
      img: hero8,
      text: "Our website is easy to navigate and use, making it simple to find the perfect item for you",
    },
    {
      img: hero9,
      text: "We have a knowledgeable and helpful team who can assist you with any questions you might have",
    },
  ];

  const clothingItems = [
    {
      men: {
        wears: [maleOutfit1, maleOutfit2, maleOutfit3],
        shoes: [shoe1, shoe2, shoe3],
        bags: [bag1, bag2, bag3],
      },
      children: {
        wears: [kidsWear1, kidsWear2],
        shoes: [kidsShoe1, kidsShoe2, kidsShoe3],
        bags: [kidsBag1, kidsBag2, kidsBag3],
      },
      women: {
        wears: [womenT1, womenT2, womenT3],
        shoes: [womenshoe1, womenshoe2],
        bags: [womenbag1, womenbag2],
      },
    },
  ];

  return (
    <DataContext.Provider value={{ clothingItems, heroImages }}>
      {props.children}
    </DataContext.Provider>
  );
}
export default DataContextProvider;
