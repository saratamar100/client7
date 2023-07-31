import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import Search from "./Search";

const Dresses = () => {
  useEffect(() => {
    document.title = "שמלות";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const dresses = [];
  return (
    <main>
      <h2 id="dresses">שמלות:</h2>
      <Search items={dresses} />
    </main>
  );
};
export default Dresses;
