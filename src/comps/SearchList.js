import React from "react";
import Card from "./Card";

function SearchList({ filteredItems, onDelete }) {
  const filtered = filteredItems.map((item) => (
    <Card key={item.id} item={item} onDelete={onDelete}/>
  ));
  return <div className="grid-container">{filtered}</div>;
}

export default SearchList;
