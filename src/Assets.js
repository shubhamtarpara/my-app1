import React, { useEffect, useState } from "react";
import AssetsBox from "./AssetsBox";
import Assests from "./Assests";
import "./assets.css";
// import searchimg from "./search.png";

const Assets = () => {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchhandle = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const assets = [
      { title: "Assets", name: "Assets SVC", id: 1},
      { title: "Services", name: "Services SVC", id: 2},
      { title: "Online-service", name: "Online-service SVC", id: 3 },
      { title: "Pages", name: "Pages SVC" , id: 4},
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
            onChange={searchhandle}
            type="search"
            placeholder="Search Here"
          />
        </div>
        <Assests>
          {filteredResults.map((asset, index) => {
           
            if (index === 0) {
              return (
                <>
                  <AssetsBox               
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
