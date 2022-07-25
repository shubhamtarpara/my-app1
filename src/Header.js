import React,{useState, useEffect} from "react";
import "./header.css";

const Header = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
        const timer = (() =>setDate(new Date()));
        return function cleanup() {
          clearInterval(timer);
        }
  })
  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <div className="header-top">
            <div className="zuru">
              <h1>Zuru Development</h1>
              <h4>Development | Stage | Production</h4>
            </div>
            <div className="data-time">
              <h4>Last Updated:&nbsp;{date.toLocaleTimeString()}</h4> 
              {/* <h4>{date.toLocaleDateString()}</h4> */}
            </div>
          </div>

          {/* <div className="header-bottom">
            <div className="header-box">Development</div>
            <div className="header-box">Stage</div>
            <div className="header-box">Production</div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
