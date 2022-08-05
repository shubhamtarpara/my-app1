import React from "react";
import "./assetsbox.css";
import Bars from "./Bars";

const AssetsBox = (props) => {
  // console.log(props.title);
  // console.log('AssetsBox', props);
  return (
    <>
      <div className="accordion-item">
        <div
          onClick={(e) => props.setIsActive(props.index)}
          className={props.isActive ? "active" : "inactive"}
        >
          <div  className={props.isActive ? 'accordion-title active-accordion' : 'accordion-title inactive-accordion'}>
            {props.title}
            <i className={props.isActive 
             ? "fa fa-angle-down fa-rotate-180" 
             : "fa fa-angle-down"}
           ></i>
          </div>
          
        </div>
        <div className={props.isActive ? "panel-open" : "panel-close"}>
        {props.data.map((data, index) => {
          // console.log('sub-title -',data.title)
          return (
            <div className="accordion-panel" key={index}>
             
                <div className="status-bar-title">
                  <h5>{data.title} </h5>
                  <p>Operational</p>
                </div>
                <div className="status-text">
                  {/* <Bars data={data.jsonData} /> */}
                  <Bars data={data.uptime} date={data.date}/>
                </div>
              
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default AssetsBox;
