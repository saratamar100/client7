import React, { useState } from "react";
import SearchList from "../comps/SearchList"; // Make sure to import your SearchList component
import "../style/search.css";

function Search({ onSearch, onSortChange, items, onDelete }) {
  const [searchField, setSearchField] = useState("");
  const [sortBy, setSortBy] = useState("none");

  const handleChange = (e) => {
    setSearchField(e.target.value);
    onSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    const newSortValue = e.target.value;
    setSortBy(newSortValue);
    onSortChange(newSortValue);
  };

  function searchList() {
    return <SearchList filteredItems={items} onDelete={onDelete} />;
  }

  return (
    <section className="search-section">
      <div>
        <h2 className="search-title">Search your item</h2>
      </div>
      <div>
        <input
          className="search-input"
          type="search"
          placeholder="Search Item"
          onChange={handleChange}
          value={searchField}
        />
      </div>
      <div>
        <label htmlFor="sort-by">Sort by: </label>
        <select id="sort-by" value={sortBy} onChange={handleSortChange}>
          <option value="none">None</option>
          <option value="price_asc">Lowest to Highest Price</option>
          <option value="price_desc">Highest to Lowest Price</option>
          <option value="des_asc">Description A-Z</option>
          <option value="des_desc">Description Z-A</option>
          <option value="time_asc">New to Old</option>
          <option value="time_desc">Old to New</option>
        </select>
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
