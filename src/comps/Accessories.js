import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import Search from "./Search";

const Accesories = () => {
  useEffect(() => {
    document.title = "אקססוריז";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const accessories = [];
  return (
    <main>
      <h2 id="accessories">אקססוריז:</h2>
      <Search items={accessories}/>
    </main>
  );
};
export default Accesories;
