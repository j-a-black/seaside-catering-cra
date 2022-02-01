import React from "react";
import { Link } from "react-router-dom";

import { MobileMenuData } from "./mobileMenuData";
import "./mobile-menu.scss";

const MobileMenu = ({ showMobileMenu }) => {
  return (
    <ul>
      {MobileMenuData.map((item, index) => {
        return (
          <li key={index} className={item.className}>
            <Link to={item.path} onClick={showMobileMenu}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
