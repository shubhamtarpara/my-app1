import React, { Fragment, useEffect, useState } from "react";
// import axios from "axios";
// import dayjs from "dayjs";
import AssetsBox from "./AssetsBox";
import "./assets.css";
import searchIcon from "./search.png";
import LoadingSpinner from "./LoadingSpinner";

const Assets = () => {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [accordianActiveIndex, setAccordianActiveIndex] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const postdata = {
      api_key: "ur1808929-5ce183da004a34f5f6c56b81",
      format: "json",
      logs: 1,
      custom_uptime_ranges: "1658892600_1658979000-1658946600_1659033000-1659074671_1659161071-1659161071_1659247471",
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
          console.log(responseData);
          const customData = responseData.monitors.map((i) => ({
            title: i.friendly_name,
            uptime: i.custom_uptime_ranges,
            date: i.logs[0].datetime,
          }));
          console.log(customData);

          setIsLoading(false);
          const assets = [
            {
              title: "Alphabet",
              data: [
                { title: customData[2].title, jsonData: customData[2] },
                { title: customData[3].title, jsonData: customData[3] },
              ],
            },
            {
              title: "Tata Group",
              data: [
                { title: customData[4].title, jsonData: customData[4] },
                { title: customData[5].title, jsonData: customData[5] },
              ],
            },
            {
              title: "Adani Group",
              data: [
                { title: customData[0].title, jsonData: customData[0] },
                { title: customData[1].title, jsonData: customData[1] },
              ],
            },
          ];

          const results = assets.filter((asset) => {
            return asset?.title?.toLowerCase().includes(search?.toLowerCase());
          });
          console.log(results);
          setFilteredResults(results);
        });
    };
    getData();
  }, [search]);

  const searchhandle = (e) => {
    setSearch(e.target.value);
  };
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
            console.log(asset.data)
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
      )}
    </>
  );
};

export default Assets;

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
