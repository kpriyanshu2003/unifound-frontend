import React, { useState } from "react";
import Card from "../Components/Card";
import NavBar from "../Components/NavBar";
import ListItem from "../Components/ListItem";
import "../styles/Card.css";

const LostPage = () => {
  const [lostState, setLostState] = useState(false);
  const updateItem = () => {
    setLostState(!lostState);
  };
  return (
    <div
      className="lostCard"
      style={{ overflow: lostState ? "hidden" : "auto" }}
    >
      <NavBar updateItem={updateItem} />
      {lostState && <Card updateItem={updateItem} />}
      <ListItem />
    </div>
  );
};

export default LostPage;
