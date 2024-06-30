import React from "react";
import "./Hero.css";

import arrow_icon from "../Assets/arrow_icon.png";
import bomb_gown from "../Assets/bomb_gown.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>
          <q>ON-TREND ONLY</q>
        </h2>
        <div>
          <p>new 👋</p>

          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection </div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={bomb_gown} alt="" />
      </div>
    </div>
  );
};

export default Hero;
