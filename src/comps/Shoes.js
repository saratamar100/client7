import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import Search from "./Search";

const Shoes = () => {
  useEffect(() => {
    document.title = "נעליים";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const shoes = [];
  return (
    <main>
      <h2 id="shoes">נעליים:</h2>
      <Search items={shoes}/>
    </main>
  );
};
export default Shoes;
