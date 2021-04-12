import React, { useState } from "react";
import Favourites from './Favourites';

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onSearch = () => {
    fetch(
      `https://pixabay.com/api/?key=20527011-2d692b7e5245cd45cfd06d7ab&q/search?query=${query}`
    )
      .then((response) => response.json())
      .then((data) => setResults(data.hits));
  };

  return (
    <div className="Search-container">
      <input
        type="text"
        value={query}
        placeholder="Looking for a topic?"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => onSearch()} type="search">
        <span>🔎</span>
      </button>
        <div className="Search-results">
          <ul>{results.map((result) => <img src={result.previewURL}  alt={result.id}/>)}
          </ul>
        </div>
        <div className="Search-results-info">
          <Favourites />
        </div>
    </div>
  );
};


export default Search;
