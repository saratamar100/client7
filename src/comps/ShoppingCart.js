import React, { useContext, useEffect, useState } from "react";
import "../style/style.css";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import imageCart from "../image/Shopping_Cart.png"

const ShoppingCart = () => {
  useEffect(() => {
    document.title = "עגלה";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const { user, setUser } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const getCart = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/cart?username=${user.username}&password=${user.password}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setItems(data);
    } catch (error) {}
  };
  useEffect(() => {
    getCart();
  }, []);
  const handleRemoveFromCart = async (id, size, e) => {
    e.preventDefault();
    //fetch
    try {
      const response = await fetch(
        `http://localhost:3001/api/cart/${id}/${size}?username=${user.username}&password=${user.password}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setItems((items) =>
          items.filter((i) => i.item_id != id || i.size != size)
        );
      }
    } catch (error) {
      throw error;
    }
  };
  const handleAddToLove = async (id, e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3001/api/like/${id}?username=${user.username}&password=${user.password}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
    } catch (error) {}
    //fetch
    //set
  };
  if (user == null)
    return (
      <main className="main_shopping_card">
        <img
          className="image_center move_left"
          src={imageCart}
          alt="shopping cart"
        />
        <p>בשביל לראות את העגלה צריך להתחבר קודם</p>
        <div className="item_cart">
          <button>
            <Link to="/login">
              התחברות
              <i className="fa fa-sign-in"></i>
            </Link>
          </button>
        </div>
      </main>
    );

  if (items.length == 0)
    return (
      <main className="main_shopping_card">
        <img
          className="image_center move_left"
          src={imageCart}
          alt="shopping cart"
        />
        <p>עדיין לא הוספת פריטים לעגלה :(</p>
        <div className="item_cart">
          <button>
            <Link to="/">
              המשך קניה <i className="fa fa-shopping-cart"></i>
            </Link>
          </button>
        </div>
      </main>
    );
  return (
    <main className="main_shopping_card">
      <div className="grid-container">
        {items.map((i) => (
          <div className="item">
            <Link to={"/item/" + i.item_id}>
              <img className="img" src={i.image} alt="" />
              <div className="description">
                <p>{i.item_description}</p>
              </div>
              <div className="item_cost">
                <p>{i.price} ש"ח</p>
              </div>
              <div className="item_cost">
                <p>מידה {i.size}</p>
              </div>
              <div className="item_insert">
                <button
                  className="button-item"
                  onClick={(e) => handleRemoveFromCart(i.item_id, i.size, e)}
                >
                  הסר מהעגלה <i className="fa fa-shopping-cart"></i>
                </button>
                <button
                  className="button-item"
                  onClick={(e) => handleAddToLove(i.item_id, e)}
                >
                  הוסף למועדפים <i className="fa fa-heart"></i>
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link to="/buy">סיים קניה</Link>
      </div>
    </main>
  );
};

export default ShoppingCart;
