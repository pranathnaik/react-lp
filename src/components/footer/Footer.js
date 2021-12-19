import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="organic-footer">
      <div className="footer-image">
        <img src={require("../images/footer-image.png")} alt="" />
      </div>
      <div className="footer-content">
        <div className="footer-1">
          <div className="left-brand">
            <div className="brand-logo">
              <img
                src={require("../images/brand-logo.svg")}
                alt="brand logo"
                srcset=""
              />
            </div>
            <div className="brand-text2">organic</div>
          </div>
          <div className="des">
            Lorem ipsum dolor sit amet consectetur adipisicing
            <br />
            elit, sed do elusmod tempor
          </div>

          <div className="line"></div>
          <div className="copyright">@ Copyright 2021 Amura</div>
        </div>
        <div className="footer-2">
          <div className="copyright">Information</div>
          <div className="line"></div>
          <div className="links">
            <div className="link">About Us</div>
            <div className="link">Products</div>
            <div className="link">Contact Us</div>
            <div className="link">Terms of Service</div>
          </div>
        </div>
        <div className="footer-3">
          <div className="copyright">Follow Us</div>
          <div className="line"></div>
          <div className="social">
            <div className="social-logo"></div>
            <div className="social-logo"></div>
            <div className="social-logo"></div>
            <div className="social-logo"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
