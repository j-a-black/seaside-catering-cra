import React from "react";
import { Link } from "react-router-dom";

// import IceCream from "../../images/ice-cream.png";

import "./card.scss";

const Card = ({ homeCardData }) => {
  return (
    <div className="card">
      <div className="card__figure">
        <img src={homeCardData.imgSrc} alt="ice cream" />
      </div>
      <div className="card__body">
        <div className="card__aside">
          <h3 className="card__title">{homeCardData.title}</h3>
          <hr className="small-break-line" />
          <p className="card__para-bold">{homeCardData.paraBold}</p>
          <p className="card__para-normal">{homeCardData.paraNormal}</p>
          <Link to={homeCardData.linkSrc} className="card__link">
            {homeCardData.linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
