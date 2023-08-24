import React, {  useEffect, useState } from "react";
import "../style/style.css";
import Search from "./Search";

const Shirts = () => {
  useEffect(() => {
    document.title = "חולצות";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const [shirts, setShirts] = useState([]);
  const getShirts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/items/type?type=Shirt`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setShirts(data);
    } catch (error) {}
  };
  useEffect(() => {
    getShirts();
  }, []);
  const handleDelete = (id) => {
    setShirts((s) => s.filter((ss) => ss.item_id != id));
  };
  return (
    <main>
      <h2>חולצות:</h2>
      <Search items={shirts} onDelete={handleDelete} />
    </main>
  );
};
export default Shirts;
