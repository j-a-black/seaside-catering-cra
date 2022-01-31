import React from "react";
import { Link } from "react-router-dom";

import { MobileMenuData } from "./mobileMenuData";

const MobileMenu = () => {
  return (
    <div>
      {MobileMenuData.map((item, index) => {
        return (
          <li key={index} className={item.className}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default MobileMenu;
