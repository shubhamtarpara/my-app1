import React, { useContext } from "react";
import { AccordionContext } from "./Assests";

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
            aria-controls={"sect-" + indexCount(props.index)}
            className={active === props.index ? "active" : "inactive"}
          >
            <div className={active === props.index ? "minus" : "plus"}></div>
          </div>
        </div>
        <div className="accordion-panel">
          <div
            className={active === props.index ? "panel-open" : "panel-close"}
          >
            <div className="status-text">
              <div className="status-bar-title">
                <p>{props.name}</p>
              </div>
              <div className="time-status">
              </div>
            </div>
            <div className="bar-container">
              <Bars bg={props.bg} background={props.background} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetsBox;
