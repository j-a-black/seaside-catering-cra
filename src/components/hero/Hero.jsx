import React from "react";
import { HeroData } from "./heroData";
import { Link } from "react-router-dom";
import LinkButton from "../link-button/LinkButton";

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero__image">
        <div className="hero__text-box">
          <h1 className="hero__title">{HeroData[0].title}</h1>
          <span className="hero__sub-title">{HeroData[0].subTitle1}</span>
          <LinkButton linkPath="/menu" linkText={HeroData[0].linkText} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
