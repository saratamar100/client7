import React, { useEffect, useState } from "react";
import Search from "./Search_gpt";
import "../style/style.css";

const Scroll = ({ url }) => {
  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [groupIndex, setGroupIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("none");

  const handleScroll = () => {
    if (loading || isFetching) return;

    const isBottom =
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight;

    if (isBottom) {
      setIsFetching(true);
    }
  };

  const fetchMoreListItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${url}?q=${searchQuery}&group=${groupIndex}&sort=${sortBy}` //?
      );
      const data = await response.json();

      let sortedData = [...data];
      if (sortBy != "none")
        sortedData.sort((a, b) => {
          switch (sortBy) {
            case "price_asc":
              return a.cost - b.cost;
            case "price_desc":
              return b.cost - a.cost;
            case "des_asc":
              return a.description.localeCompare(b.description);
            case "des_desc":
              return b.description.localeCompare(a.description);
            case "time_asc":
              return a.time - b.time;
            case "time_desc":
              return b.time - a.time;
          }
        });

      setItems((prevItems) => [...prevItems, ...sortedData]);
      setIsFetching(false);
      setLoading(false);
      setGroupIndex(groupIndex + 1);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  useEffect(() => {
    const interval = setInterval(handleScroll, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    //initialFetch();
    //!!!!!!!!!!!!!!!
    setItems([{id:999}])
    alert("1st")
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setGroupIndex(0);
    setItems([]);
    setIsFetching(true);
  };

  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
    setItems([]);
    setGroupIndex(0);
    setIsFetching(true);
  };
  const handleCardDelete = (cardId) => {
    setItems(items=>items.filter((item) => item.id !== cardId));
  };
  

  return (
    <Search
      onSearch={handleSearch}
      onSortChange={handleSortChange}
      items={items}
      onDelete={handleCardDelete} 
    />
  );
};

export default Scroll;
