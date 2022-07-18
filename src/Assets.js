import React, { useEffect, useState } from "react";
import AssetsBox from "./AssetsBox";
import "./assets.css";
import searchimg from "./search.png";

const Assets = () => {
  const assets = [
    { title: "Assets", name: "Assets SVC" },
    { title: "Services", name: "Services SVC" },
    { title: "Online-service", name: "Online-service SVC" },
    { title: "Pages", name: "Pages SVC" },
  ];

  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
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
          <span><img src={searchimg} alt="search" /></span>
        </div>
        {filteredResults.map((asset) => {
          return <AssetsBox key={asset.name} title={asset.title} />;
        })}
      </div>
    </>
  );
};

export default Assets;
