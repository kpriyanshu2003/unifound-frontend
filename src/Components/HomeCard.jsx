import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import img from "../assets/l&f.png";
import "../styles/Home.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const HomeCard = () => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") window.location.href = "/lost";
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="homeContainer">
      <div className="homeContainer_left">
        <img
          src={img}
          width="100%"
          draggable="false"
          alt="person-searching-something"
        />
      </div>
      <div className="homeContainer_right">
        <div>
          <div
            style={{
              fontSize: "60px",
              fontFamily: "Times New Roman",
              borderBottom: "2px solid gray",
            }}
          >
            <span
              style={{
                color: "#019aff",
              }}
            >
              F
            </span>
            <span>rom</span>
            <br />
            <span>Lost to Found</span>
          </div>
          <div
            style={{
              textTransform: "uppercase",
              letterSpacing: "8px",
            }}
          >
            It's a journey
          </div>
          <div
            style={{
              margin: "10px 0",
            }}
          >
            A web application focused on listing lost and found items around the
            college campus.
          </div>
        </div>

        <div className="button">
          <Link to="/lost">
            <button
              style={{
                fontFamily: "verdana",
              }}
            >
              Let's Get Started
            </button>
            <KeyboardDoubleArrowRightIcon className="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
