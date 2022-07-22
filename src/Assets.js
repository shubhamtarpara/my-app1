import React, { useEffect, useState } from "react";
import AssetsBox from "./AssetsBox";
import "./assets.css";
import searchIcon from "./search.png";

const Assets = () => {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [accordianActiveIndex, setAccordianActiveIndex] = useState(0);

  const searchhandle = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const assets = [
      { title: "Assets", name: "Assets SVC", id: 1 },
      { title: "Services", name: "Services SVC", id: 2 },
      { title: "Online-service", name: "Online-service SVC", id: 3 },
      { title: "Pages", name: "Pages SVC", id: 4 },
    ];
    const results = assets.filter((asset) => {
      return asset?.name?.toLowerCase().includes(search?.toLowerCase());
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
            if (index === 0) {
              return (
                <>
                  <AssetsBox
                    key={index}
                    index={index}
                    isActive={accordianActiveIndex === index}
                    setIsActive={setIsActive}
                    title={asset.title}
                    name={asset.name}
                  />
                </>
              );
            }
            if (index === 1) {
              return (
                <>
                  <AssetsBox
                    key={index}
                    index={index}
                    isActive={accordianActiveIndex === index}
                    setIsActive={setIsActive}
                    title={asset.title}
                    name={asset.name}
                  />
                </>
              );
            }
            if (index === 2) {
              return (
                <>
                  <AssetsBox
                    key={index}
                    index={index}
                    isActive={accordianActiveIndex === index}
                    setIsActive={setIsActive}
                    title={asset.title}
                    name={asset.name}
                  />
                </>
              );
            }
            return (
              <>
                <AssetsBox
                  key={index}
                  index={index}
                  isActive={accordianActiveIndex === index}
                  setIsActive={setIsActive}
                  title={asset.title}
                  name={asset.name}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Assets;
