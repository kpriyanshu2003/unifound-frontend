import React, { useEffect } from "react";
import "../styles/Home.css";
import img from "../assets/l&f.png";
import { Link } from "react-router-dom";
import homeImage from "../assets/Group.png";
import IoTlogo from "../assets/logo.jpg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const HomeCard = () => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") window.location.href = "/lost";
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="homeContainer">
      <div className="homeContainer_left">
        <img src={img} width="90%" draggable="false" alt="Card" />
      </div>
      <div className="homeContainer_right">
        <img src={IoTlogo} width="10%" draggable="false" alt="Card" />
        <img src={homeImage} width="100%" draggable="false" alt="Card " />
        <div className="div-button">
          <Link to="/lost" style={{ textDecoration: "none" }}>
            <button className="button">
              Let's Get Started
              <KeyboardDoubleArrowRightIcon className="arrow" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
