import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Call the parent function with the search query
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search videos..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
