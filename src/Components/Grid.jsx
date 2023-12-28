import React, { useState, useEffect } from "react";
import "../styles/Grid.css";

function Grid() {
  const [num, setNum] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    function updateGridSize() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const cols = Math.floor(screenWidth / 100) + 2;
      const rows = Math.floor(screenHeight / 100);
      setNum({ cols: cols, rows: rows });
    }
    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    return () => {
      window.removeEventListener("resize", updateGridSize);
    };
  }, []);
  const generateGridCells = () => {
    const totalCells = num.cols * num.rows;
    const cells = [];
    for (let i = 0; i < totalCells; i++) {
      cells.push(<div key={i} className="grid-cell"></div>);
    }
    return cells;
  };
  return (
    <section
      id="grid-container"
      style={{ gridTemplateColumns: `repeat(${num.cols}, 100px)` }}
    >
      {generateGridCells()}
    </section>
  );
}

export default Grid;
