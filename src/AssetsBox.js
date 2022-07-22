import React from "react";

import "./assetsbox.css";
import Bars from "./Bars";

const AssetsBox = (props) => {
  return (
    <>
      <div className="accordion-item">
        <div
          onClick={(e) => props.setIsActive(props.index)}
          className={props.isActive ? "active" : "inactive"}
        >
          <div className="accordion-title">
            {props.title}
            <div className={props.isActive ? "minus" : "plus"}></div>
          </div>
        </div>
        <div className="accordion-panel">
          <div className={props.isActive ? "panel-open" : "panel-close"}>
            {" "}
            <div className="status-bar-title">
              <h5>{props.name}</h5>
              <p>Operational</p>
            </div>
            <div className="status-text">
              <Bars />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetsBox;
