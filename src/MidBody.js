import React from "react";
import "./midbody.css";
import checked from "./checked.png";
const MidBody = () => {
  return (
    <div className="mid-container">
      <div className="service">
        <img src={checked} alt="checked" />
        <h3>All service are opreactional</h3>
      </div>
    
    </div>
  );
};

export default MidBody;
