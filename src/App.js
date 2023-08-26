import "./App.css";
import React, { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./comps/MainPage";
import Login from "./comps/Login";
import ItemsLove from "./comps/ItemsLove";
import ShoppingCart from "./comps/ShoppingCart";
import SignUp from "./comps/SignUp";
import ErrorPage from "./comps/ErrorPage";
import Layout from "./comps/Layout";
import Shirts from "./comps/Shirts";
import Skirts from "./comps/Skirts";
import Shoes from "./comps/Shoes";
import Dresses from "./comps/Dresses";
import Accessories from "./comps/Accessories";
import TableSize from "./comps/TableSize";
import UserProvider from "./comps/UserProvider";
import Item from "./comps/Item";
import Logout from "./comps/Logout";
import Buy from "./comps/Buy";
import MainPageAdmin from "./comps/MainPageAdmin";
import ItemAdmin from "./comps/ItemAdmin";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<SignUp />} />
            {user == null || !user.admin ? (
              <>
                <Route path="/love" element={<ItemsLove />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/buy" element={<Buy />} />
                <Route index element={<MainPage />} />
                <Route path="/item/:id" element={<Item />} />
              </>
            ) : (
              <>
                <Route index element={<MainPageAdmin />} />
                <Route path="/item/:id" element={<ItemAdmin />} />
              </>
            )}
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/skirts" element={<Skirts />} />
            <Route path="/dresses" element={<Dresses />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/size" element={<TableSize />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
