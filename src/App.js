// Import necessary dependencies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your page components
import MainPage from "./comps/MainPage";
import Login from "./comps/Login";
import ItemsLove from "./comps/ItemsLove";
import ShoppingCart from "./comps/ShoppingCart";
import SignIn from "./comps/SignIn";
import ErrorPage from "./comps/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
