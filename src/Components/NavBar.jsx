import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="navBar">
      <Link to="/" className="cursor-pointer title">
        Finding Nemo
      </Link>
      <div>
        <Link
          to={props.section !== "LOST" ? "/lost" : "/found"}
          style={{ textDecoration: "none" }}
        >
          <div className=" navItem ">
            {props.section !== "LOST"
              ? "Lost Something ?"
              : "Found Something ?"}
          </div>
        </Link>

        <div className=" navItem " onClick={() => props.updateItem()}>
          Report an item !
        </div>
      </div>
    </div>
  );
};

export default NavBar;
