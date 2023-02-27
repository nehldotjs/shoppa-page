import React, { createContext } from "react";
import aImg from "../assets/jordan.jpg";
export const AccresoriesProduct = createContext();
function AccessoriesData(props) {
  let text = "acessories context starts here";
  const AcessaoriesShoppingData = [
    {
      id: 1,
      img: aImg,
      name: "loui bag",
      type: "bag",
      price: "24. 99",
      beforePrice: "34. 99",
    },
    {
      id: 2,
      img: aImg,
      name: "Nike shoe",
      price: "24. 99",
      type: "shoe",
      beforePrice: "34. 99",
    },
    {
      id: 3,
      img: aImg,
      name: "white sleeve",
      type: "cloth",
      price: "24. 99",
      beforePrice: "34. 99",
    },
    {
      id: 4,
      img: aImg,
      name: "cargo pants",
      type: "cloth",
      price: "24. 99",
      beforePrice: "34. 99",
    },
    {
      id: 5,
      img: aImg,
      name: "channel perfume",
      type: "deodorant",
      price: "24. 99",
      beforePrice: "34. 99",
    },
    {
      id: 6,
      img: aImg,
      name: "channel perfume",
      type: "deodorant",
      price: "24. 99",
      beforePrice: "34. 99",
    },
    {
      id: 7,
      img: aImg,
      name: "cargo pants",
      type: "cloth",
      price: "24. 99",
      beforePrice: "34. 99",
    },
    {
      id: 8,
      img: aImg,
      name: "channel perfume",
      type: "deodorant",
      price: "24. 99",
      beforePrice: "34. 99",
    },
    {
      id: 9,
      img: aImg,
      name: "channel perfume",
      type: "deodorant",
      price: "24. 99",
      beforePrice: "34. 99",
    },
  ];

  return (
    <AccresoriesProduct.Provider value={{ text, AcessaoriesShoppingData }}>
      {props.children}
    </AccresoriesProduct.Provider>
  );
}

export default AccessoriesData;
