import React, {  useEffect, useState } from "react";
import "../style/style.css";
import Search from "./Search";

const Accesories = () => {
  useEffect(() => {
    document.title = "אקססוריז";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const [accesories, setAccesories] = useState([]);
  const getAccesories = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/items/type?type=accessories`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setAccesories(data);
    } catch (error) {}
  };
  useEffect(() => {
    getAccesories();
  }, []);
  const handleDelete = (id) => {
    setAccesories((a) => a.filter((aa) => aa.item_id != id));
  };
  return (
    <main>
      <h2>אקססוריז:</h2>
      <Search items={accesories} onDelete={handleDelete} />
    </main>
  );
};
export default Accesories;
