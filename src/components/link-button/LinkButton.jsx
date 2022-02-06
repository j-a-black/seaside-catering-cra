import React from "react";

import { Link } from "react-router-dom";
import "./link-button.scss";

const LinkButton = ({ linkPath, linkText }) => {
  return (
    <>
      <Link to={linkPath} className="link">
        {linkText}
      </Link>
    </>
  );
};

export default LinkButton;
