import React, { Fragment, useEffect, useState } from "react";
// import axios from "axios";
import dayjs from "dayjs";
import AssetsBox from "./AssetsBox";
import "./assets.css";
import searchIcon from "./search.png";
import LoadingSpinner from "./LoadingSpinner";

const Assets = () => {
  const [search, setSearch] = useState("");
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [accordianActiveIndex, setAccordianActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const dates = [];
  const today = dayjs(new Date(1655333958000));
  for (let d = 0; d < 50; d++) {
    dates.push(today.add(d, "day"));
  }

  // console.log(dates);
  const ranges = dates.map(
    (date) => `${date.unix()}_${date.add(1, "day").unix()}`
  );


  useEffect(() => {
    const postdata = {
      api_key: "ur1808929-5ce183da004a34f5f6c56b81",
      format: "json",
      logs: 1,
      custom_uptime_ranges: ranges.join("-"),
    };
    const url = "https://api.uptimerobot.com/v2/getMonitors";
    const getData = async () => {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(postdata),
        headers: { "Content-type": "application/json" },
      })
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          // console.log(responseData);
          const customData = responseData.monitors.map((i) => ({
            title: i.friendly_name,
            uptime: i.custom_uptime_ranges,
            date: i.logs[0].datetime,
          }));
          // console.log(customData);

          setIsLoading(false);
          const assets = [
            {
              title: "Adani Group",
              service: ["Adani Enterprises Limited", "Adani Power Ltd"],
              data: customData.filter((monitor) =>
                ["Adani Enterprises Limited", "Adani Power Ltd"].includes(
                  monitor.title)
              ),
            },
            {
              title: "Alphabet",
              service: ["Google", "Gmail"],
              data: customData.filter((monitor) =>
                ["Google", "Gmail"].includes(monitor.title)
              ),
            },
            {
              title: "Tata Group",
              service: ["Tata Consultancy Services", "Tata Steel"],
              data: customData.filter((monitor) =>
                ["Tata Consultancy Services", "Tata Steel"].includes(
                  monitor.title
                )
              ),
            },
          ];

          // console.log(results);
          setAPIData(assets);
          // console.log(assets);
          // console.log("APIData", APIData);
        });
    };
    getData();
  }, [APIData, ranges]);

    
  useEffect(() => {
    const filteredData = APIData.filter((asset) => {
      return  asset.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredResults(filteredData);
    // console.log(filteredData);

  }, [APIData, search])
const searchhandle = (e) => {
  setSearch(e.target.value);
}
  const setIsActive = (index) => {
    if (accordianActiveIndex === index) {
      setAccordianActiveIndex(-1);
    } else {
      setAccordianActiveIndex(index);
    }
  };

  let list;

  if (isLoading) {
    <LoadingSpinner />;
  } else {
  }
  return (
    <>
      <div className="wrapper">
        <div className="search-input">
          <input
            value={search}
            onChange={searchhandle}
            type="search"
            placeholder="Search Here"
          />
          <img className="search-icon" alt="1" src={searchIcon} />
        </div>
        {list}
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="accordion-wrapper">
          {filteredResults.map((asset, index) => {
            return (
              <Fragment key={asset.title}>
                <AssetsBox
                  index={index}
                  isActive={accordianActiveIndex === index}
                  setIsActive={setIsActive}
                  title={asset.title}
                  data={asset.data}
                />
              </Fragment>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Assets;
