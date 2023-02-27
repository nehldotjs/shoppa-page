import React from "react";
import "./styleComponents/sponsors.css";

import topMini from "../assets/sponsors/topMini.png";
import rbr from "../assets/sponsors/rbr.png";
import leftImage from "../assets/sponsors/leftImage.png";
import topRight from "../assets/sponsors/topRight.png";
import bottomMini from "../assets/sponsors/bottomMini.png";
import lbl from "../assets/sponsors/lbl.png";

function Sponsors() {
  return (
    <div className="sponsors">
      <div className="sponsorsImageContainer">
        <div className="sponsor-leftLongImage">
          <img src={leftImage} alt="" />
        </div>
        <div className="sponsors-rightImagesContent">
          <h3 className="writeUp">
            Get the most EXCLUSIVE
            <br />
            Updates from our
            <br /> Fashion <br />
            Community
          </h3>
          <div className="leftImagesContainer">
            <div className="leftLeft">
              <div className="leftMiniTopImage">
                <img src={topMini} alt="" />
              </div>
              <div className="leftMiniBtopImage">
                <img src={bottomMini} alt="" />
              </div>
            </div>
            <div className="rightright">
              <div className="topLandscpaeImage">
                <img src={topRight} alt="" />
              </div>
              <div className="rightrightbottom">
                <div className="leftBottomleft">
                  <img src={lbl} alt="" />
                </div>
                <div className="rightBottomleft">
                  <img src={rbr} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subscrbeWrapper">
        <form action="">
          <input type="text" placeholder="@email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Sponsors;
