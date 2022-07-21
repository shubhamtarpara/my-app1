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
                <span className=" tooltip">
                  <h3>{record.date}</h3>
                  <p>{record.uptime}</p>
                  <p>{record.text}</p>
                </span>
              </div>
            </>
          );
        })}
      </div>

      <div className="status-bar__text">
        <div className="times-days">
          <p>0 days ago</p>
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
