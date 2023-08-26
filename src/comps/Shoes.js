import React, { useEffect, useState } from "react";
import "../style/style.css";
import Search from "./Search";

const Shoes = () => {
  useEffect(() => {
    document.title = "נעליים";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const [shoes, setShoes] = useState([]);
  const getShoes = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/items/type?type=Shoes`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setShoes(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getShoes();
  }, []);
  const handleDelete = (id) => {
    setShoes((s) => s.filter((ss) => ss.item_id != id));
  };
  return (
    <main>
      <h2>נעליים:</h2>
      <Search items={shoes} onDelete={handleDelete} />
    </main>
  );
};
export default Shoes;
