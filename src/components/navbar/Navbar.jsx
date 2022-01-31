import React from "react";
import MobileMenu from "../mobile-menu/MobileMenu";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <span className="navbar__logo">SEASIDE CATERING</span>
        </Link>
        <FaBars style={{ fontSize: "30px", cursor: "pointer" }} />
      </div>
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
