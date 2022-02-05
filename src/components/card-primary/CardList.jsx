import React from "react";
import Card from "./Card";
import { homeCardData } from "./homeCardData";

import "./card-list.scss";

const CardList = () => {
  const renderCards = homeCardData.map((homeCardData, index) => {
    return <Card key={index} homeCardData={homeCardData} />;
  });

  return <>{renderCards}</>;
};

export default CardList;
