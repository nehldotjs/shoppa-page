import React, { useState } from "react";
import { FaUserAlt, FaShoppingCart, FaHeart } from "react-icons/fa";
// styling
import "./styleComponents/nav.css";

function Nav(props) {
  const { shoppaLogo } = props;
  const [isOn, setIsOn] = useState(false);
  function handler() {
    if (isOn) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
    console.log(isOn);
  }
  return (
    <>
      <div className=" toggleBtnContainer">
        <button className="toggleBtn" onClick={handler}>
          <div
            className={
              !isOn
                ? "toggleLine1 toggleDeActivate"
                : " toggleLine1 toggleActivate1"
            }>
            <div className="tog1"></div>
          </div>
          <div
            className={
              !isOn
                ? "toggleLine2 toggleDeActivate"
                : " toggleLine2 toggleActivate2"
            }>
            <div className="tog2"></div>
          </div>
        </button>
      </div>

      <div className="nav">
        <div className="loginContainer">
          <h3 className="promo">
            Get amazing discount when you shop with us, over 10% worth of csash
            at your finger tips !
          </h3>
          <div className="login">
            <button className="loginBtn">LOGIN</button>
          </div>
        </div>

        <div className="navContainer">
          <div className="logoContainer">
            <div className="logoWrapper">
              <img src={shoppaLogo} alt="shoppa" className="shoppaLogo" />
            </div>
          </div>

          <div className="navButtons">
            <ul className="btnSections">
              <button type="button" className="links">
                categories
              </button>
              <button type="button" className="links">
                shop
              </button>
              <button type="button" className="links">
                New Release
              </button>
              <button type="button" className="links">
                Collection
              </button>
            </ul>
          </div>

          <div className="notificationCon">
            <div className="liked notificationIcon">
              <FaHeart />
            </div>
            <div className="cart notificationIcon">
              <FaShoppingCart />
            </div>
            <div className="profile notificationIcon">
              <FaUserAlt />
            </div>
          </div>
        </div>

        {/* MOBILE VIEW */}

        <div
          className={
            !isOn ? "mobileNavDeActivated" : "mobileNav mobileNavActivated"
          }
          id="mobileNav">
          <div className="mobileLinks">
            <ul>
              <button type="button" className="links">
                categories
              </button>
              <button type="button" className="links">
                shop
              </button>
              <button type="button" className="links">
                New Release
              </button>
              <button type="button" className="links">
                Collection
              </button>
            </ul>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
    </>
  );
}

export default Nav;
