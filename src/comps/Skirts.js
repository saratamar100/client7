import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import Search from "./Search";

const Skirts = () => {
  useEffect(() => {
    document.title = "חצאיות";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const skirts = [];
  return (
    <main>
      <h2 id="skirts">חצאיות:</h2>
      <Search items={skirts}/>
    </main>
  );
};
export default Skirts;
