import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "../link-button/LinkButton";

import "./card-item.scss";

const CardItem = ({ cardItem }) => {
  return (
    <div className="card-item">
      <img src={cardItem.imgSrc} alt={cardItem.imgAlt} />
      <div className="text-centered">
        <LinkButton linkPath={cardItem.linkPath} linkText={cardItem.linkText} />
      </div>
    </div>
  );
};

export default CardItem;
