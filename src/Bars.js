import React, { Fragment, useEffect, useState } from "react";
import "./bars.css";

const Bars = (props) => {
  const [avg, setAvg] = useState();
  const jsonData = props.data.split("-");
  // const localDate = new Date(props.date * 1000).toLocaleDateString();
  let sum = 0;

  useEffect(() => {
    for (let i = 0; i < jsonData.length; i++) {
      let data = jsonData[i];
      let val = parseInt(data);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      sum += val;
    }
    let avg = sum / jsonData.length;
    let average = avg.toFixed(2);
    setAvg(average);
  }, []);

  return (
    <Fragment>
      <div className="main-bar-container">
        {jsonData.map((record) => {
         
          return (
            <Fragment>
              <div
                className={`bar-content ${
                  record === "80%" && "yellowOne"
                } {bar-content ${record === "50%" && "redOne"} {bar-content ${
                  record === "100.000" && "greenOne"
                }
                {bar-content ${record === "0.000" && "redOne"}  
                `}
              >
                <span className="tooltip tooltip-arrow-center">
                  
                  {/* <h5>{localDate}</h5> */}
                  <p className="record-title">{record}</p>
                  <span className="down-time-status">{record === '100.000' ? <p>No down time recorded </p> : <p>Down time recorded</p>}</span> 


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
          <h4> &nbsp;{avg}%</h4>
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
