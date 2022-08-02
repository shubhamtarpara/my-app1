import React, { Fragment } from "react";
import "./bars.css";


const Bars = (props) => {
  const average = (jsonData) => {
    let sum = 0;
    let count = 0;
    jsonData.forEach(() => {
      sum += parseInt(jsonData);
      count++;
    });
    return sum / count;
  };
  // console.log("Bars-props", props);
  const jsonData = props.data.split("-");
  const localDate = new Date(props.date * 1000).toLocaleDateString();

  // console.log(props.title);
  return (
    <Fragment>
      <div className="main-bar-container">
        {jsonData.map((record) => {
          // console.log(props.title)
          return (
            <Fragment>
              <div
                className={`bar-content ${
                  record === "80%" && "yellowOne"
                } {bar-content ${
                  record === "50%" && "redOne"
                } {bar-content ${record === "100.000" && "greenOne"}
                {bar-content ${record === "0.000" && "redOne"}  
                `}
              >
                <span
                  className={`tooltip tooltip-arrow-center ${
                    record === "100.000"
                      ? "tooltip-left-22 tooltip-arrow-left"
                      : record.id >= 17 && record.id <= 35
                      ? "tooltip-center-22 tooltip-arrow-center"
                      : record.id > 35
                      ? "tooltip-right-22 tooltip-arrow-right"
                      : ""
                  }`}
                >
                  <h5>{localDate}</h5>
                  <p className="record-title">{record}</p>
                  <p>{'No Down time'}</p>
                </span>
              </div>
            </Fragment>
          );
        })}
      </div>

      <div className="status-bar__text">
        <div className="times-days">
          <p>Today</p>
        </div>
        <div className="space"></div>
        <div className="uptime__text">
          <p>Uptime AVG : </p>
          <h4> &nbsp;{average(jsonData).toFixed(2)}%</h4>
        </div>
        <div className="space"></div>
        <div className="open-time">
          <p></p>
        </div>
      </div>
    </Fragment>
  );
};

export default Bars;
