import React from "react";
import "./Footer.css";
import logo from "../../assets/Images/logo.jpg";

const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <div className="footer-body">
          <div className="footer-logo">
            <img src={logo} alt="no" />
            <h1>You are in control</h1>
          </div>
          <div className="footer-nav">
            <ul>
              <a href="">
                <li>Challenges</li>
              </a>
              <a href="">
                <li>Dashboard</li>
              </a>
              <a href="">
                <li>Shops</li>
              </a>
              <a href="">
                <li>Nutrition</li>
              </a>
              <a href="">
                <li>Profile</li>
              </a>
            </ul>
            <h1>You are in control</h1>
          </div>
          <div className="footer-soc-link">
            <ul>
              <a href="">
                <li>Instagram</li>
              </a>
              <a href="">
                <li>Twitter</li>
              </a>
              <a href="">
                <li>Facebook</li>
              </a>
            </ul>
            <h1>You are in control</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;