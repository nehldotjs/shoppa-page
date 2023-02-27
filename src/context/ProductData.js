import React, { useState, createContext } from "react";
// SHOES
import air1 from "../assets/productsImage/shoes/air1.jpg";
import air2 from "../assets/productsImage/shoes/air2.jpg";
import air3 from "../assets/productsImage/shoes/air3.jpg";
import shoe1 from "../assets/productsImage/shoes/shoe1.jpg";
import shoe2 from "../assets/productsImage/shoes/shoe2.jpg";
import shoe3 from "../assets/productsImage/shoes/shoe3.jpg";
import skate1 from "../assets/productsImage/shoes/skate1.jpg";
import skate2 from "../assets/productsImage/shoes/skate2.jpg";
import skate3 from "../assets/productsImage/shoes/skate3.jpg";
import kid1 from "../assets/productsImage/shoes/kid1.jpg";
import kid2 from "../assets/productsImage/shoes/kid2.jpg";
import kid3 from "../assets/productsImage/shoes/kid3.jpg";
// CLOTHS
import a1 from "../assets/productsImage/cloth/a1.jpg";
import a2 from "../assets/productsImage/cloth/a2.jpg";
import a3 from "../assets/productsImage/cloth/a3.jpg";
import b1 from "../assets/productsImage/cloth/b1.jpg";
import b2 from "../assets/productsImage/cloth/b2.jpg";
import b3 from "../assets/productsImage/cloth/b3.jpg";

export const ProductContext = createContext();
function ProductData(props) {
  let jpg =
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7f23d4f4-5494-4109-bda6-19870f316c45/flex-runner-2-big-kids-road-running-shoes-klcs9r.png";
  const outfitData = [
    {
      gender: "",
      name: "Air Jordan 1 Retro High",
      img: [air1, air2, air3],
      price: "179.99",
      beforePrice: "219.99",
      type: "Women's Shoe",
      sizes: ["9", "10", "11"],
      aboutProduct:
        "Make your stride iconic with the Air Jordan 1. Classic leather pairs with pony hair detailing throughout, while crafted details like the metallic Wings logo hardware add a premium boost to any 'fit. The finishing touch? Air cushioning underfoot lets you keep pace in comfort, so nothing holds you back from showing off your legendary look.",
    },
    {
      gender: "",
      name: "Nike Blazer Mid '77",
      img: [shoe1, shoe2, shoe3],
      price: "104.99",
      beforePrice: "119.99",
      type: "Women's Shoe",
      sizes: ["9", "10", "11"],
      aboutProduct:
        "Styled for the '70s. Loved in the '80s. Classic in the ‘90s. Ready for the future. The Nike Blazer Mid '77 delivers a timeless design that’s easy to wear. Its leather upper breaks in beautifully and features suede accents and retro branding for a fresh look and feel. Exposed foam on the tongue and a special midsole finish make it look like you’ve pulled this pair from the history books.",
    },
    {
      gender: "",
      name: "Nike SB Force 58",
      img: [skate1, skate2, skate3],
      price: "79.99",
      beforePrice: "95.99",
      type: "Skate Shoes",
      sizes: ["9", "10", "11"],
      aboutProduct:
        "The latest and greatest innovation to hit the streets, the Force 58 gives you the durability of a cupsole with the flexibility of vulcanized shoes. Made from canvas and suede and finished with perforations on the toe, the whole look is infused with heritage basketball DNA.",
    },
    {
      gender: "",
      name: "Nike Court Borough Mid 2",
      img: [skate1, skate2, skate3],
      price: "69.99",
      beforePrice: "79.99",
      type: "Big Kids' Shoes",
      sizes: ["9", "10", "11"],
      aboutProduct:
        "The Nike Court Borough Mid 2 brings all-black to a hardwood throwback. These mid-tops are durable and supportive with a secure strap for all-star level comfort.",
    },
    {
      gender: "",
      name: "Nike Sportswear Tech Fleece",
      img: [kid1, kid2, kid3],
      price: "69.99",
      beforePrice: "79.99",
      type: "Big Kids' Shoes",
      sizes: ["9", "10", "11"],
      aboutProduct:
        "The Nike Court Borough Mid 2 brings all-black to a hardwood throwback. These mid-tops are durable and supportive with a secure strap for all-star level comfort.",
    },
    {
      gender: "",
      name: "Nike Sportswear Tech Fleece",
      img: [a1, a2, a3],
      price: "129.99",
      beforePrice: "149.99",
      type: "Men's Full-Zip Hoodie",
      sizes: ["2XL", "3XL", "4XL"],
      aboutProduct:
        "The Nike Court Borough Mid 2 brings all-black to a hardwood throwback. These mid-tops are durable and supportive with Ready to rock the warmth and comfort of your favorite weekender hoodie, but need to keep your look clean? This Nike Tech Fleece hoodie strikes the right balance with a lightweight, low-profile design that packs in the heat without adding bulk. You can layer with ease whether you're lounging at home or making your city commute.a secure strap for all-star level comfort.",
    },
    {
      gender: "",
      name: "Nike Therma",
      img: [b1, b2, b3],
      price: "50.99",
      beforePrice: "54.99",
      type: "Women's Pullover Training Hoodie",
      sizes: ["XS(0-2", "S(2-6)", "M(8-10)"],
      aboutProduct:
        "The Nike Therma Hoodie has insulating fabric to keep you warm before, during and after your training session. A stretchy, oversized fit gives you plenty of room to move comfortably.",
    },
  ];
  return (
    <ProductContext.Provider value={{ jpg, outfitData }}>
      {props.children}
    </ProductContext.Provider>
  );
}
export default ProductData;
