import React from "react";
import { HeroData } from "./heroData";

import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero__image">
        <div className="hero__text-box">
          <span>{HeroData[0].title}</span>
          <span>{HeroData[0].subTitle1}</span>
          <span>{HeroData[0].subTitle2}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
