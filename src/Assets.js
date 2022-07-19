import React, { useEffect, useState } from "react";
import AssetsBox from "./AssetsBox";
import Assests from "./Assests";
import "./assets.css";
import searchimg from "./search.png";


const Assets = () => {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const assets = [
      { title: "Assets", name: "Assets SVC" },
      { title: "Services", name: "Services SVC" },
      { title: "Online-service", name: "Online-service SVC" },
      { title: "Pages", name: "Pages SVC" },
    ];
    const results = assets.filter((asset) => {
      return asset?.name?.toLowerCase().includes(search?.toLowerCase());
    });
    setFilteredResults(results);
  }, [search]);

  return (
    <>
      <div className="wrapper">
        <div className="search-input">
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            placeholder="Search Here"
          />
          <span>
            <img src={searchimg} alt="search" />
          </span>
        </div>
        <Assests>
          {filteredResults.map((asset, index) => {
            if (index === 0) {
              return (
                <>
                  <AssetsBox
                    background="first fifth"
                    bg="green"
                    key={index}
                    index={index}
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
                    background="first "
                    bg="green"
                    key={index}
                    index={index}
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
                    background="second third "
                    bg="yellow"
                    key={index}
                    index={index}
                    title={asset.title}
                    name={asset.name}
                  />
                </>
              );
            }
            return (
              <>
                <AssetsBox
                  background="third"
                  bg="red"
                  key={index}
                  index={index}
                  title={asset.title}
                  name={asset.name}
                />
              </>
            );
          })}
        </Assests>
      </div>
    </>
  );
};

export default Assets;
