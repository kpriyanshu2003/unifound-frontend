import React from "react";
import Wave from "../assets/Wave";
import "../styles/Home.css";
import HomeCard from "../Components/HomeCard";

const HomePage = () => {
 
  return (
    <div className="homeScreen">
     <HomeCard />
      <Wave />
    </div>
  );
};

export default HomePage;
