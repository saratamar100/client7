import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import { UserContext } from "./UserContext";

const MainPage = () => {
  const { user, setUser } = useContext(UserContext);

  return <main></main>;
};

export default MainPage;
