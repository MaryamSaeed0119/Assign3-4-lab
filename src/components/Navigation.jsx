import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>Magic Math Calculator</h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          listStyle: "none",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </div>
  );
};

export default Navigation;
