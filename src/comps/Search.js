import React, { useState } from "react";
import SearchList from "./SearchList";
import "../style/search.css";

function Search({ items, onDelete }) {
  const [searchField, setSearchField] = useState("");
  const [sortBy, setSortBy] = useState("none");

  const filteredItems = items.filter((item) =>
    item.item_description.toLowerCase().includes(searchField.toLowerCase())
  );

  let sortedItems = [...filteredItems];

  if (sortBy != "none")
    sortedItems.sort((a, b) => {
      console.log(typeof a.date_add);
      switch (sortBy) {
        case "price_asc":
          return a.price - b.price;
        case "price_desc":
          return b.price - a.price;
        case "des_asc":
          return a.item_description.localeCompare(b.item_description);
        case "des_desc":
          return b.item_description.localeCompare(a.item_description);
        case "time_asc":
          return new Date(a.date_add) - new Date(b.date_add);
        case "time_desc":
          return new Date(b.date_add) - new Date(a.date_add);
      }
    });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handlePriceSortChange = (e) => {
    setSortBy(e.target.value);
  };

  function searchList() {
    return <SearchList filteredItems={sortedItems} onDelete={onDelete} />;
  }

  return (
    <section className="search-section">
      <div>
        <h2 className="search-title">חפש את הפריט האהוב עלייך</h2>
      </div>
      <div>
        <input
          className="search-input"
          type="search"
          placeholder="חפש פריט"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="sort-by">מיין לפי: </label>
        <select id="sort-by" value={sortBy} onChange={handlePriceSortChange}>
          <option value="none">ללא מיון</option>
          <option value="price_asc">מחיר מהנמוך לגבוה</option>
          <option value="price_desc">מחיר מהגבוה לנמוך</option>
          <option value="des_asc">שם בסדר א"ב</option>
          <option value="des_desc">שם בסדר א"ב הפוך</option>
          <option value="time_asc">מהחדש לישן</option>
          <option value="time_desc">מהישן לחדש</option>
        </select>
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
