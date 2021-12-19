import React from "react";
import "./HeroSection.css";
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="offer">
        <img
          src="https://www.pngkit.com/png/full/911-9118342_launch-offer-banner.png"
          alt=""
        />
      </div>
      <div className="hero-content">
        <div className="title">Healthy life with</div>
        <div className="sub-head">Nature Organic</div>
        <p className="sub-des">
          Vegetables are the edible parts of a plant <br />
          that is used in cooking or can be eaten now.
        </p>
        <a className="hero-button" href="">
          Explore Now
        </a>
      </div>
      <div className="hero-image">
        <div class="slider">
          <div>
            <img
              className="slider-image"
              src="https://media.istockphoto.com/photos/tree-growth-three-steps-in-nature-and-beautiful-morning-lighting-picture-id956366756?k=20&m=956366756&s=612x612&w=0&h=VfpWX20rhHbZsRdofhh2lhm2L3FKSDYoUdiGdzc4gi8="
              alt=""
            />
          </div>
          <div>
            <img
              className="slider-image"
              src="https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400?k=20&m=1181366400&s=612x612&w=0&h=p-iaAHKhxsF6Wqrs7QjbwjOYAFBrJYhxlLLXEX1wsGs="
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
