import React, { Fragment, useEffect, useState } from "react";
// import axios from "axios";
import dayjs from "dayjs";
import AssetsBox from "./AssetsBox";
import "./assets.css";
import searchIcon from "./search.png";
import Records from "./records.json";

const Assets = () => {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [accordianActiveIndex, setAccordianActiveIndex] = useState(0);
  const [apidata, setApiData]= useState([]);

  // const dates = [];
  // const today = dayjs(new Date());
  // for (let d = 1; d < 50; d++) {
  //   dates.push(today.subtract(d, "day"));
  // }

  // const ranges = dates.map(
  //   (date) => `${date.unix()}_${date.add(1, "day").unix()}`
  // );
  // const start = dates[dates.length - 1].unix();
  // const end = dates[0].add(1, "day").unix();
  // ranges.push(`${start}_${end}`);

  useEffect(() => {
    const postdata = {
      api_key: "ur1808929-5ce183da004a34f5f6c56b81",
      format: "json",
      logs: 1,

      custom_uptime_ranges:"1658892600_1658979000-1658946600_1659033000"
    };
    const url = "https://api.uptimerobot.com/v2/getMonitors";
    const getData = async () => {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(postdata),
        headers: { "Content-type": "application/json" },
      }).then(async (response) => { 
     
        const responseData = await response.json();
        const customData = responseData.monitors.map((i) => ({
          friendly_name: i.friendly_name,
          custom_uptime_ranges: i.custom_uptime_ranges,
          datetime: i.logs[0].datetime
        }));

        console.log(responseData);
        // console.log(customData);
        setApiData(customData)
        console.log(apidata);
      });
    };
 
    getData();
  }, [apidata]);

  const searchhandle = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const assets = [
      {
        title: "Assets",
        data: [
          { title: "Assets SVC", jsonData: Records },
          { title: "Assets View", jsonData: Records },
        ],
      },
      {
        title: "Services",
        data: [
          { title: "Services SVC", jsonData: Records },
          { title: "Services View", jsonData: Records },
        ],
      },
      {
        title: "Online Services",
        data: [
          { title: "Online-Services SVC", jsonData: Records },
          { title: "Online-Services View", jsonData: Records },
        ],
      },
      {
        title: "Pages",
        data: [
          { title: "Pages SVC", jsonData: Records },
          { title: "Pages View", jsonData: Records },
        ],
      },
    ];
    const results = assets.filter((asset) => {
      return asset?.title?.toLowerCase().includes(search?.toLowerCase());
    });
    setFilteredResults(results);
  }, [search]);

  const setIsActive = (index) => {
    if (accordianActiveIndex === index) {
      setAccordianActiveIndex(-1);
    } else {
      setAccordianActiveIndex(index);
    }
  };

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
        <div className="accordion-wrapper">
          {filteredResults.map((asset, index) => {
            return (
              <Fragment key={asset.id}>
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
      </div>
    </>
  );
};

export default Assets;
