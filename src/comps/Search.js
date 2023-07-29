import React, { useState } from "react";
import SearchList from "./SearchList";
import "../style/search.css";

function Search({ items }) {
  const [searchField, setSearchField] = useState("");
  const [sortBy, setSortBy] = useState("none");

  const filteredItems = items.filter((item) =>
    item.description.toLowerCase().includes(searchField.toLowerCase())
  );

  let sortedItems = [...filteredItems];

  if (sortBy != "none")
    sortedItems.sort((a, b) => {
      switch (sortBy) {
        case "price_asc":
          return a.cost - b.cost;
        case "price_desc":
          return b.cost - a.cost;
        case "des_asc":
          return a.description.localeCompare(b.description);
        case "des_desc":
          return b.description.localeCompare(a.description);
      }
    });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handlePriceSortChange = (e) => {
    setSortBy(e.target.value);
  };

  function searchList() {
    return <SearchList filteredItems={sortedItems} />;
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
        />
      </div>
      <div>
        <label htmlFor="sort-by">Sort by: </label>
        <select id="sort-by" value={sortBy} onChange={handlePriceSortChange}>
          <option value="none">None</option>
          <option value="price_asc">Lowest to Highest Price</option>
          <option value="price_desc">Highest to Lowest Price</option>
          <option value="des_asc">Description A-Z</option>
          <option value="des_desc">Description Z-A</option>
        </select>
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
