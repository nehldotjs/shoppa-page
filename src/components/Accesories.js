import React, { useContext, useState } from "react";
import "./styleComponents/accessories.css";
import { AccresoriesProduct } from "../context/accessoriesProducts";

function Accesories() {
  const [listView, setListView] = useState(6);
  const [listViewDisplay, setListViewDisplay] = useState(false);
  const { AcessaoriesShoppingData } = useContext(AccresoriesProduct);

  function increaseList() {
    setListView(listView + 3);
    if (listView === AcessaoriesShoppingData.length) {
      setListViewDisplay(true);
    }
    if (listViewDisplay) {
      setListViewDisplay(false);
      setListView(6);
    }
  }
  return (
    <div className="accessories">
      <div className="accessoriesHeader">
        <div className="filterIcon">filter Icon</div>
        <div className="filterHeader">Accessories</div>
      </div>
      <div className="accessoriesContext">
        <h3>
          For the finishing touch, Browse an array of Luxurious accessories.
        </h3>
      </div>
      <div className="cardWrapper">
        <div className="accesories-itemCardsContainer">
          {/* MAPPING AREA */}
          {AcessaoriesShoppingData.slice(0, listView).map((item) => {
            const { id, name, beforePrice, price, img } = item;
            return (
              <button key={id} className="accessories-cardContainer">
                <div className="accessories-imageCon">
                  <img src={img} alt="model" />
                </div>
                <div className="accessories-descriptions">
                  <div className="accessories-itemTitle">
                    <h3>{name}</h3>
                  </div>
                  <div className="accessories-itemPriceContainer">
                    <div className="accessories-currentPrice">{price}</div>
                    <div className="accessories-beforePrice">{beforePrice}</div>
                  </div>
                </div>
              </button>
            );
          })}
          {/* MAPPING AREA  */}
          <div className="viewMoreButton">
            <button className="viewMoreBtn" onClick={increaseList}>
              {listViewDisplay ? "Show Less" : "View More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accesories;
