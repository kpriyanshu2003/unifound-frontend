import React, { useState } from "react";
import "../styles/Card.css";
import Card from "../Components/Card";
import NavBar from "../Components/NavBar";
import ListItem from "../Components/ListItem";

const FoundPage = () => {
  const [foundState, setFoundState] = useState(false);
  const updateItem = () => {
    setFoundState(!foundState);
  };
  const page = "FOUND";

  return (
    <div
      className="lostCard"
      style={{ overflow: foundState ? "hidden" : "auto" }}
    >
      <NavBar updateItem={updateItem} section={page} />
      {foundState && <Card updateItem={updateItem} />}
      <ListItem section={page} />
    </div>
  );
};

export default FoundPage;
