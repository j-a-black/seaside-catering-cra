import React from "react";
import Form from "../form/Form";

import "./banner-img.scss";

const BannerImg = ({ bannerImage, imageOveraly, bannerTitle }) => {
  return (
    <div className="banner-container">
      <div
        className="banner__image"
        style={{ backgroundImage: `${imageOveraly}, url(${bannerImage})` }}
      >
        <div className="banner__text-box">
          <h2 className="banner__title">{bannerTitle}</h2>
          {/* <span className="hero__sub-title">{HeroData[0].subTitle1}</span>
          <LinkButton linkPath="/menu" linkText={HeroData[0].linkText} /> */}
          <Form />
        </div>
      </div>
    </div>
  );
};

export default BannerImg;
