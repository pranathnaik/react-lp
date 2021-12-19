import React from "react";
import "./OrgSection.css";

function OrgSection() {
  return (
    <section className="org-section">
      <div className="org-content">
        <div className="title">Proudly preseted by</div>
        <p className="des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          Sed do eiusmod tempor <br />
          incididunt ut labore et dlore magna aliqua
        </p>
        <div className="org-brand">
          <div className="org-brand__image">
            <img src={require("../images/org-brand.png")} alt="" srcset="" />
          </div>
          <div className="org-brand__image">
            <img src={require("../images/org-brand.png")} alt="" srcset="" />
          </div>
          <div className="org-brand__image">
            <img src={require("../images/org-brand.png")} alt="" srcset="" />
          </div>
          <div className="org-brand__image">
            <img src={require("../images/org-brand.png")} alt="" srcset="" />
          </div>
          <div className="org-brand__image">
            <img src={require("../images/org-brand.png")} alt="" srcset="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrgSection;
