import React, { useContext, useState } from "react";
import { AccordionContext } from "./Assests";
import PropTypes from "prop-types";
import "./assetsbox.css";
import Bars from "./Bars";

const AssetsBox = (props) => {
  const { active, setActive } = useContext(AccordionContext);

  const eventHandler = (e, index) => {
    setActive(index);
  };

  let indexPlus;
  const indexCount = (index) => {
    indexPlus = index + 1;
    return indexPlus;
  };
  return (
    <>
      <div className="accordion-item">
        <div className="accordion-title">
          {props.title}
          <div
            onClick={(e) => eventHandler(e, props.index)}
            className={active === props.index ? "active" : "inactive"}
          >
            <div className={active === props.index ? "minus" : "plus"}></div>
          </div>
        </div>
        <div className="accordion-panel">
          <div className={active === props.index ? "panel-open" : "panel-close"}>
            <div className="status-text">
              <div className="status-bar-title">
                <p>{props.name}</p>
              </div>
              <div className="status-bar__text">
                <p>Uptime </p>
                <p>Avg</p>
                <p>Rest time</p>
              </div>
              <div className="open-time">
                <p>100%</p> &nbsp; &nbsp; <p>100ms</p>
              </div>
            </div>
            <div className="bar-container">
              <Bars />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AssetsBox.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default AssetsBox;
