import React from "react";
import "./bars.css";
import Records from "./records.json";
const Bars = () => {
  const average = (records) => {
    let sum = 0;
    let count = 0;
    records.forEach((record) => {
      sum += parseInt(record.uptime);
      count++;
    });
    return sum / count;
  };

  return (
    <>
      <div className="main-bar-container">
        {Records?.map((record) => {
          return (
            <>
              <div
                key={record.id}
                className={`bar-content ${
                  record.uptime === "80%" && "yellowOne"
                } {bar-content ${
                  record.uptime === "50%" && "redOne"
                } {bar-content ${record.uptime === "100%" && "greenOne"}`}
              >
                <span
                  className={`tooltip ${
                    record.id < 17 && record.id
                      ? "tooltip-left-22 tooltip-arrow-left"
                      : record.id >= 17 && record.id <= 35
                      ? "tooltip-center-22 tooltip-arrow-center"
                      : record.id > 35
                      ? "tooltip-right-22 tooltip-arrow-right"
                      : ""
                  }`}
                >
                  <h5>{record.date}</h5>
                  <p className="record-title">{record.uptime}</p>
                  <p>{record.text}</p>
                </span>
              </div>
            </>
          );
        })}
      </div>

      <div className="status-bar__text">
        <div className="times-days">
          <p>50 days ago</p>
        </div>
        <div className="space"></div>
        <div className="uptime__text">
          <p>Uptime AVG : </p>
          <h4> &nbsp;{average(Records).toFixed(2)}%</h4>
        </div>
        <div className="space"></div>
        <div className="open-time">
          <p>Today</p>
        </div>
      </div>
    </>
  );
};

export default Bars;
