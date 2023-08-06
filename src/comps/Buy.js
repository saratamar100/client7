import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartItem = ({ name, price, size, onRemove }) => (
  <div>
    <p>
      {name} - Size: {size} - Price: ${price}
    </p>
    <button onClick={onRemove}>Remove</button>
  </div>
);

const Buy = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    //initail fetch
    setCartItems([
      { id: 1, name: "T-Shirt", price: 20, size: "M" },
      { id: 2, name: "T-Shirt", price: 20, size: "M" },
      { id: 3, name: "T-Shirt", price: 20, size: "M" },
      { id: 4, name: "T-Shirt", price: 20, size: "M" },
    ]);
  }, []);

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveItem = (itemId) => {
    //fetchconst updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems((items) => items.filter((item) => item.id !== itemId));
  };
  const handleBuy = () => {
    //fetch to delete all and update the total
    alert("buy");
    navigate("/");
  };

  return (
    <main>
      <h2>Cart Summary</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          size={item.size}
          onRemove={() => handleRemoveItem(item.id)}
        />
      ))}
      <p>Total: ${totalAmount}</p>
      <button onClick={handleBuy}>Secure Payment: </button>
    </main>
  );
};

export default Buy;
