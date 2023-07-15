import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./comps/MainPage";
import Login from "./comps/Login";
import ItemsLove from "./comps/ItemsLove";
import ShoppingCart from "./comps/ShoppingCart";
import SignUp from "./comps/SignUp";
import ErrorPage from "./comps/ErrorPage";
import Layout from "./comps/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/love" element={<ItemsLove />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
