import React from "react";
import { MobileMenuData } from "../mobile-menu/mobileMenuData";
import { Link } from "react-router-dom";
import "./desktop-menu.scss";

const DesktopMenu = () => {
  return (
    <ul className="desktop-menu">
      {MobileMenuData.map((item, index) => {
        return (
          <li key={index} className={item.className2}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopMenu;
