import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import { UserContext } from "./UserContext";
import Search from "./Search";

const MainPage = () => {
  useEffect(() => {
    document.title = "חנות בגדים";
  }, []);
  const { user, setUser } = useContext(UserContext);
  const [news, loved] = [[], []];
  return (
    <main>
      <h2 id="loved">מומלצים:</h2>
      <Search items={loved} />
      <h2 id="new">חדשים:</h2>
      <Search items={news} />
    </main>
  );
};

export default MainPage;
