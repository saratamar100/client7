import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import Search from "./Search";

const Dresses = () => {
  const dresses = [];
  return (
    <main>
      <h2 id="dresses">שמלות:</h2>
      <Search items={dresses}/>
    </main>
  );
};
export default Dresses;
