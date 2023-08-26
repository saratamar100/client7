import React, { useEffect, useState } from "react";
import "../style/style.css";
import Search from "./Search";

const Dresses = () => {
  useEffect(() => {
    document.title = "שמלות";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const [dresses, setDresses] = useState([]);
  const getDress = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/items/type?type=Dress`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setDresses(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getDress();
  }, []);
  const handleDelete = (id) => {
    setDresses((dresses) => dresses.filter((d) => d.item_id != id));
  };
  return (
    <main>
      <h2 id="dresses">שמלות:</h2>
      <Search items={dresses} onDelete={handleDelete} />
    </main>
  );
};
export default Dresses;
