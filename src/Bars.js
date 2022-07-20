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
              <div key={record.id}>
                <div
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
              </div>
            </>
          );
        })}
      </div>

      <div className="status-bar__text">
        <div className="uptime__text">
          <h4>Uptime AVG : </h4>
          <p> &nbsp;{average(Records).toFixed(2)}%</p>
        </div>
        <div className="open-time">
          <h4>Rest time : </h4>
          <p>&nbsp;100ms</p>
        </div>
      </div>
    </>
  );
};

export default Bars;
