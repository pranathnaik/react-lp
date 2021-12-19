import React from "react";
import "./Header.css";
function Header() {
  return (
    <header>
      <nav>
        <div className="left-brand">
          <div className="brand-logo">
            <img
              src={require("../images/brand-logo.svg")}
              alt="brand logo"
              srcset=""
            />
          </div>
          <div className="brand-text">organic</div>
        </div>
        <div className="right-nav__links">
          <div className="nav-link">Home</div>
          <div className="nav-link">Products</div>
          <div className="nav-link">Blog</div>
          <div className="nav-link">About Us</div>
          <div className="nav-link nav-link__button">Contact</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
