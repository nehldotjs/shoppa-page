 import React from "react";
import { FaWhatsapp, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";
import "./styleComponents/footer.css";

function Footer() {
  return (
    <div className="footer">
      {/* footer upper section */}
      <div className="footer-top">
        <div className="communityService-container">
          <h3>community service</h3>
          <div className="communityLinks footerLinks">
            <a href="#">Exclusive Service</a>
            <a href="#">contact us</a>
            <a href="#">help / faqs</a>
            <a href="#">orders & shipping</a>
            <a href="#">returns & refunds</a>
            <a href="#">authenticity</a>
          </div>
        </div>
        <div className="footer-aboutUs-container">
          <h3>about Us</h3>
          <div className="footer-aboutUsLinks footerLinks">
            <a href="#">company profile</a>
            <a href="#">co-operate Data</a>
            <a href="#">investors relations</a>
            <a href="#">careers</a>
          </div>
        </div>
        <div className="footer-legals-container">
          <h3>Legals</h3>
          <div className="legalsLinks footerLinks">
            <a href="#">legal notes</a>
            <a href="#">terms and condition</a>
            <a href="#">general condition of purchase</a>
            <a href="#">code of buisiness conduct and ethics</a>
            <a href="#">privacy policy</a>
            <a href="#">cookie policy</a>
          </div>
        </div>
      </div>
      {/* footer upper section */}
      <hr />
      <div className="footer-bottomSection">
        <div className="rightsReservedContainer">
          <h4>
            All rights reserved | &#xA9; 2022 <br /> Designed By - Nelson Osuya
          </h4>
        </div>
        <div className="whatsappNumb">
          <a href="https://wa.me/message/375GP33MS25SL1">
            <FaWhatsapp className="whatsAppIcon" />
            +234 9024 958 212
          </a>
        </div>
        <div className="footer-socialsContainer">
          <div className="footersocialLink">
            <a href="#" className="socialIcons">
              <FaInstagram />
            </a>
            <a href="#" className="socialIcons">
              <FaTwitter />
            </a>
            <a href="#" className="socialIcons">
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
