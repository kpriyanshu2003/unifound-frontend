import React from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const NavBar = (props) => {
  const location = useLocation().pathname;

  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-title">
        Lost to Found
      </Link>
      <div className="navbar-links-container">
        <Link
          to={location === "/lost" ? "/found" : "/lost"}
          className="navbar-item"
        >
          {location === "/lost" ? "Found Something ?" : "Lost Something ?"}
        </Link>
        <div className="navbar-report-item" onClick={() => props.updateItem()}>
          Report an item !
        </div>
      </div>
    </div>
  );
};
export default NavBar;
