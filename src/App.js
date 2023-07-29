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

const App = () => {
  const [user, setUser] = useState(null);
  const login = useCallback(
    (u) => {
      setUser((user) => ({ ...user, ...u }));
    },
    [user]
  );
  const logout = useCallback(() => {
    setUser(null);
  }, [user]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} logout={logout} />}>
          <Route index element={<MainPage user={user} />} />
          <Route path="/login" element={<Login user={user} login={login} />} />
          <Route
            path="/signup"
            element={<SignUp user={user} login={login} />}
          />
          <Route path="/love" element={<ItemsLove user={user} />} />
          <Route path="/cart" element={<ShoppingCart user={user} />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/skirts" element={<Skirts />} />
          <Route path="/dresses" element={<Dresses />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/size" element={<TableSize />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
