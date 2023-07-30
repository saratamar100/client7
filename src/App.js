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
import { UserContext } from "./comps/UserContext";

const App = () => {
  const [user, setUser] = useState(null);
  // const login = useCallback(
  //   (u) => {
  //     setUser((user) => ({ ...user, ...u }));
  //   },
  //   [user]
  // );

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/love" element={<ItemsLove />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/skirts" element={<Skirts />} />
            <Route path="/dresses" element={<Dresses />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/size" element={<TableSize />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
