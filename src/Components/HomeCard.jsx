import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import img from "../assets/l&f.png";
import "../styles/Home.css";
import brand from "../assets/brand.png";

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
          style={{
            scale: "1.31",
            filter: "drop-shadow(10px 10px 100px rgb(193, 96, 11))",
          }}
        />
      </div>

      <div className="homeContainer_right">
        <div
          id="logoff"
          className="brand"
          style={{
            // border:'1px solid green',
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "70px",
              // border: "1px solid green",
            }}
          >
            <img
              src={brand}
              alt="Logo"
              height={50}
              width={75}
              style={{
                // border: "2px solid purple",
                position: "absolute",
                bottom: "-13px",
                left: "50%",
                transform: "translateX(-55%)",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "40px",
              // border: "2px solid blue",
              fontWeight: "bolder",
              textTransform: "uppercase",
              letterSpacing: "1px",
              wordSpacing: "2px",
            }}
          >
            Lost to Found
          </div>

          <div
            style={{
              // border:'2px solid black',
              textTransform: "uppercase",
              fontSize: "13px",
              letterSpacing: "1px",
            }}
          >
            Your treasure awaits you here
          </div>
        </div>
        <div id="info">
          A Web application focused on listing lost and found items around the
          college campus.
        </div>
        <Link to="/lost" className="button">
          <button class="btn">
            <span class="underlineAni"> Let's get started </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
