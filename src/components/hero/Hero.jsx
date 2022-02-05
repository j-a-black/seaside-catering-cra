import React from "react";
import { HeroData } from "./heroData";
import { Link } from "react-router-dom";

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero__image">
        <div className="hero__text-box">
          <span className="hero__title">{HeroData[0].title}</span>
          <span className="hero__sub-title">{HeroData[0].subTitle1}</span>
          <Link to="/menu" className="hero__menu-link">
            {HeroData[0].linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
