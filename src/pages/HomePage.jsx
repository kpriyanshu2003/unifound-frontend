import React from "react";
// import Wave from "../assets/Wave";
import "../styles/Home.css";
import HomeCard from "../Components/HomeCard";
import Grid from "../Components/Grid";

const HomePage = () => {
  return (
    <div className="homeScreen">
      <HomeCard />
      <Grid />
    </div>
  );
};

export default HomePage;
