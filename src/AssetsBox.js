import React, { useContext, useState } from "react";
import { AccordionContext } from "./AccordionWrapper";
import PropTypes from "prop-types";
import "./assetsbox.css";
import Bars from "./Bars";

const AssetsBox = (props) => {
  let indexPlus;

  const indexCount = (index) => {
    indexPlus = index + 1;
    return indexPlus;
  };

  const { active, setActive } = useContext(AccordionContext);

  const eventHandler = (e, index) => {
    e.preventDefault();
    setActive(index);
  };

  return (
    <>
      <div className="accordion-item">
        <h3 className="accordion-title">{props.title}
          <h5>Operational</h5>
          <button
            onClick={(e) => eventHandler(e, props.index)}
            className={active === props.index ? "active" : "inactive"}
            aria-expanded={active === props.index ? "true" : "false"}
            aria-controls={"sect-" + indexCount(props.index)}
            aria-disabled={active === props.index ? "true" : "false"}
          >
            <div className={active === props.index ? "plus" : "minus"}></div>
          </button>
        </h3>
        <div className="accordion-panel">
          <div
            id={"sect-" + indexCount(props.index)}
            className={active === props.index ? "panel-open" : "panel-close"}
          >
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
