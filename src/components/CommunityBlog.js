import React from "react";
import "./styleComponents/community.css";

function CommunityBlog(prop) {
  return (
    <>
      <div className="community">
        <div className="communityHeaderContainer">
          {/* <div className="filterIconContainer">filter icon</div> */}
          <div className="c-hearder">Style Community</div>
        </div>
        <div className="communityContext">
          <h1>
            Achieve the ultimate fashion statement by effortlessly matching the
            newest designer runway trends with a bold and distinctive handbag
            and contemporary footwear.
          </h1>
        </div>
        <div className="communityImages">
          <div className="com-imageContainer">
            <div className="imageGroup1">
              <div className="img1">
                <img src={prop.comImage1} alt="" className="image1" />
              </div>
              <div className="img3">
                <img src={prop.comImage3} alt="" className="image3" />
              </div>
            </div>
            <div className="imageGroup2">
              <div className="img2">
                <img src={prop.comImage2} alt="" className="image2" />
              </div>
              <div className="img4">
                <img src={prop.comImage4} alt="" className="image4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityBlog;
