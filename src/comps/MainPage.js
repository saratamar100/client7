import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import { UserContext } from "./UserContext";
import Search from "./Search";

const MainPage = () => {
  useEffect(() => {
    document.title = "חנות בגדים";
  }, []);
  const { user, setUser } = useContext(UserContext);
  const [newItems, setNewItems] = useState([]);
  const getNews = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/items/new`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setNewItems(data);
    } catch (error) {}
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <main>
      <h2 id="new">פריטים חדשים:</h2>
      <Search items={newItems} />
    </main>
  );
};

export default MainPage;
