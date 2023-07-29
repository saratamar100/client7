import React, { useState } from "react";
import SearchList from "./SearchList";

function Search({ items }) {
  const [searchField, setSearchField] = useState("");

  const filteredItems = items.filter((item) =>
    item.description.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return <SearchList filteredItems={filteredItems} />;
  }

  return (
    <section>
      <div>
        <h2>Search your item</h2>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search Item"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
