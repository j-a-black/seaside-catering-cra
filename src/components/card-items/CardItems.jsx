import React from "react";
import CardItem from "./CardItem";
import { cardItemsData } from "./cardItemsData.js";

import "./card-items.scss";

const CardItems = () => {
  const renderCardItem = cardItemsData.map((cardItem, index) => {
    return <CardItem key={index} cardItem={cardItem} />;
  });

  return <div className="card-items-container">{renderCardItem}</div>;
};

export default CardItems;
