import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import Search from "./Search";

const Skirts = () => {
  const skirts = [];
  return (
    <main>
      <h2 id="skirts">חצאיות:</h2>
      <Search items={skirts}/>
    </main>
  );
};
export default Skirts;
