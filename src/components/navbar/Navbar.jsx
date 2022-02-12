import React, { useState, useEffect } from "react";
import MobileMenu from "../mobile-menu/MobileMenu";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import "./navbar.scss";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  const [mobileMenuSlider, setMobileMenuSlider] = useState(false);

  const toggleMobileMenu = () => setMobileMenuSlider(!mobileMenuSlider);
  const closeMobileMenu = () => setMobileMenuSlider(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {mobileMenuSlider ? (
          <MdOutlineClose
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={toggleMobileMenu}
            className="navbar__menu-button"
          />
        ) : (
          <CgMenuLeft
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={toggleMobileMenu}
            className="navbar__menu-button"
          />
        )}

        <DesktopMenu />

        <Link to="/">
          <span className="navbar__logo" onClick={closeMobileMenu}>
            OCEANSIDE CATERING
          </span>
        </Link>
      </div>
      <nav
        className={
          mobileMenuSlider
            ? "navbar__mobile-menu active"
            : "navbar__mobile-menu"
        }
      >
        <MobileMenu toggleMobileMenu={toggleMobileMenu} />
      </nav>
    </nav>
  );
};

export default Navbar;
