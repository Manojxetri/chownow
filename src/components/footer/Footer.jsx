import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="left-col">
          <img src={assets.logo} alt="logo" className="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            dolores dolor nobis odit hic odio voluptas ullam illo non reiciendis
            commodi laborum consectetur et qui officiis, consequuntur aspernatur
            alias corporis!
          </p>
          <div className="social-media">
            <img src={assets.facebook_icon} alt="facebook-icon" />
            <img src={assets.linkedin_icon} alt="linkedin-icon" />
            <img src={assets.twitter_icon} alt="twitter-icon" />
          </div>
        </div>

        <div className="mid-col">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="right-col">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+977 9746374579</li>
            <li>chownow231@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright 2025 @ Chownow.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
