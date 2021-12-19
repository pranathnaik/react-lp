import React from "react";
import "./WelcomeSection.css";

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <div className="welcome-logo">
          <img src={require("../images/welcome-logo.svg")} alt="" srcset="" />
        </div>
        <div className="title">Welcome to Nature</div>
        <p className="welcome-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          Sed do eiusmod tempor <br />
          incididunt ut labore et dlore magna aliqua
        </p>

        <div className="welcome-food">
          <div className="food-container">
            <div className="food-image">
              <img src={require("../images/food-icon.png")} alt="" srcset="" />
            </div>
            <div className="food-title">Organic Food</div>
            <p className="food-des">Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="food-container">
            <div className="food-image">
              <img src={require("../images/food-icon.png")} alt="" srcset="" />
            </div>
            <div className="food-title">Organic Food</div>
            <p className="food-des">Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="food-container">
            <div className="food-image">
              <img src={require("../images/food-icon.png")} alt="" srcset="" />
            </div>
            <div className="food-title">Organic Food</div>
            <p className="food-des">Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="food-container">
            <div className="food-image">
              <img src={require("../images/food-icon.png")} alt="" srcset="" />
            </div>
            <div className="food-title">Organic Food</div>
            <p className="food-des">Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
