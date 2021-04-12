import React, { useState } from "react";
import Topics from './Topics';

const Topicsresults = () => {
  // const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onSearchtopics = () => {
    fetch(
      `https://pixabay.com/api/?key=20527011-2d692b7e5245cd45cfd06d7ab&q/search?query=${query}`
    )
      .then((response) => response.json())
      .then((data) => setResults(data.hits));
  };

  return (
    <div className="Search-container">
      {/* <input
        type="text"
        value={query}
        placeholder="Looking for a topic?"
        onChange={(e) => setQuery(e.target.value)}
      /> */}
      <Topics onClick={() => onSearchtopics()} type="search" />
        <div className="Search-results">
          <ul>{results.map((result) => <img src={result.previewURL}  alt={result.id}/>)}
          </ul>
        </div>
          
          {/* {data
          .filter(bee => bee.flowers.some(flower => flowerList.includes(flower)))
          .map(bee => (<BeeCard data={bee} key={bee.id}/>))
          } */}
       
    </div>
  );
};


export default Topicsresults;
