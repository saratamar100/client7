import React from "react";
import "../style/style.css";

const ShoppingCart = () => {
  return (
    <main className="main_shopping_card">
      <img
        className="image_center move_left"
        src="./image/Shopping_Cart.png"
        alt="shopping_cart"
      />
      <p>העגלה שלך עדיין ריקה :(</p>
      <div className="item_cart">
        <button>
          <a href="./main_page.html">
            המשך קניה
            <i className="fa fa-shopping-cart"></i>
          </a>
        </button>
        <button>
          <a href="./error_page.html">
            מעבר לתשלום
            <i className="fa fa-credit-card"></i>
          </a>
        </button>
      </div>
    </main>
  );
};

export default ShoppingCart;
