import React, {  useEffect, useState } from "react";
import "../style/style.css";
import Search from "./Search";

const Skirts = () => {
  useEffect(() => {
    document.title = "חצאיות";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const [skirts, setSkirts] = useState([]);
  const getSkirts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/items/type?type=Skirt`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setSkirts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getSkirts();
  }, []);
  const handleDelete = (id) => {
    setSkirts((s) => s.filter((ss) => ss.item_id != id));
  };
  return (
    <main>
      <h2>חצאיות:</h2>
      <Search items={skirts} onDelete={handleDelete} />
    </main>
  );
};
export default Skirts;
