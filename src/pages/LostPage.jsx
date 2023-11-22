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
  const page = "LOST";

  return (
    <div
      className="lostCard"
      style={{ overflow: lostState ? "hidden" : "auto" }}
    >
      <NavBar updateItem={updateItem} section={page} />
      {lostState && <Card updateItem={updateItem} />}
      <ListItem section={page} />
    </div>
  );
};

export default LostPage;
