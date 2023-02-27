import React from "react";
import ReactSlider from "./utility/reactSlider";
import "./styleComponents/trendingProducts.css";

function TrendingProducts(prop) {
  // const { jordanSneaker, text } = prop;

  return (
    <>
      <div className="trendingProducts">
        <div className="filter" id="filter">
          <div className="filterIcon">icon</div>
          <div className="filterHeader">Trending Products</div>
        </div>
        <ReactSlider />
      </div>
    </>
  );
}

export default TrendingProducts;
