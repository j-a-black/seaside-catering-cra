import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_textbox">
        <h3>oceanside catering | private catering for defined tastes</h3>
        <div className="footer_icons">
          <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
            <FaFacebookSquare />
          </a>
          <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
