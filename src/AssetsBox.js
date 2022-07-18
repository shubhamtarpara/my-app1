import React, { useState } from "react";
import "./assetsbox.css";
import Bars from "./Bars";

const AssetsBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="popup-container">
        <div className="pop-up">
          <div className="main-assets-title">
            <h3>{props.title}</h3>
            <div className="button-assets">
              <h5>Operational</h5>
              <button
                className={`accordion-title ${isOpen ? "open" : "collapsed"}`}
                onClick={openHandler}>
                  
              </button>
            </div>
          </div>
          <div className={`status-bar-container ${!isOpen ? "collapsed" : ""}`}>
            <div className="status-text">
              <div className="status-bar-title">
                <p>Assest SVC</p>
              </div>
              <div className="status-bar__text">
                <p>Uptime </p>
                <p>Avg</p>
                <p>Rest time</p>
              </div>
              <div className="open-time">
                <p>100% &nbsp; &nbsp; </p> <p>100ms</p>
              </div>
            </div>
            <div className="bar-container">
              <Bars className="bar-status" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetsBox;
