import React, { Fragment, useEffect, useState } from "react";
import AssetsBox from "./AssetsBox";
import "./assets.css";
import searchIcon from "./search.png";
import Records from "./records.json";

const Assets = () => {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [accordianActiveIndex, setAccordianActiveIndex] = useState(0);

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
