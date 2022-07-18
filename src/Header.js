import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <div className="header-top">
            <div className="zuru">
              <h1>Zuru Development</h1>
              <h4>Development | Stage | Production</h4>
            </div>
            <div className="data-time">
              <h4>Last Updated: 22ms</h4> 
              <h4>25/04/2022 3:10PM</h4>
            </div>
          </div>

          <div className="header-bottom">
            <div className="header-box">Development</div>
            <div className="header-box">Stage</div>
            <div className="header-box">Production</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
