import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useContext } from "react";
import { UserContext } from "./UserProvider";
import imageCart from "../image/Shopping_Cart.png";
import "../style/buy.css";

const CartItem = ({ name, price, size, image, onRemove }) => (
  <div className="cart-item">
    <p>
      {name} - מידה: {size} - מחיר: {price} שקלים
    </p>
    <img style={{ maxWidth: "20%" }} src={image} />
    <div>
      <button className="button-item" onClick={onRemove}>
        הסר
      </button>
    </div>
  </div>
);

const Buy = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
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
      setCartItems(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getCart();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roundToDecimal = (number, decimalPlaces) => {
    const factor = 10 ** decimalPlaces;
    return Math.ceil(number * factor) / factor;
  };

  const totalAmount = roundToDecimal(
    cartItems.reduce((total, item) => total + Number(item.price), 0),
    2
  );

  const handleRemoveItem = async (itemId, size) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/cart/${itemId}/${size}?username=${user.username}&password=${user.password}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setCartItems((items) =>
          items.filter((item) => item.item_id !== itemId)
        );
      }
    } catch (error) {
      throw error;
    }
  };
  const handleBuy = async () => {
    //fetch to delete all and update the total
    //alert("buy");
    try {
      const response = await fetch(
        `http://localhost:3001/api/buy?username=${user.username}&password=${user.password}`,
        {
          method: "POST",
        }
      );
      if (response.ok) {
        openModal();
      }
    } catch (error) {
      throw error;
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  if (user == null)
    return (
      <main className="main_shopping_card">
        <img
          className="image_center move_left"
          src={imageCart}
          alt="shopping cart"
        />
        <p>בשביל לקנות צריך להתחבר קודם</p>
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

  if (cartItems.length == 0)
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
    <main className="main-buy">
      <h2 className="title-buy">סיכום עגלה</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.item_id}
          name={item.item_description}
          price={item.price}
          size={item.size}
          image={item.image}
          onRemove={() => handleRemoveItem(item.item_id, item.size)}
        />
      ))}
      <p className="total-amount">סכום הקניה: {totalAmount} שקלים</p>
      <div className="button-container">
        <button className="button-item" onClick={handleBuy}>
          מעבר לתשלום מאובטח
        </button>
      </div>
      <Modal className="modal" isOpen={isModalOpen} onRequestClose={closeModal}>
        <div className="modal-content">
          <h2>סיימת קניה!</h2>
          <p>סה"כ שילמת {totalAmount} שקלים</p>
          <button className="button-item" onClick={closeModal}>
            לעמוד הראשי
          </button>
        </div>
      </Modal>
    </main>
  );
};

export default Buy;
