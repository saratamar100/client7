import React, { useEffect, useState } from "react";
import "../style/style.css";
import Search from "./Search";

const MainPage = () => {
  useEffect(() => {
    document.title = "חנות בגדים";
  }, []);
  const [newItems, setNewItems] = useState([]);
  const getNews = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/items/new`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setNewItems(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  const handleDelete = (id) => {
    setNewItems((dresses) => dresses.filter((d) => d.item_id != id));
  };
  return (
    <main>
      <h2 id="new">פריטים חדשים:</h2>
      <Search items={newItems} onDelete={handleDelete} />
    </main>
  );
};

export default MainPage;
