import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const ItemsLove = () => {
  return (
    <main class="main_shopping_card">
      <img
        class="image_center height_size"
        src="./image/Heart.png"
        alt="item_love"
      />
      <p>עדיין לא הוספת פריטים מועדפים :(</p>
      <div class="item_cart">
        <button>
          <a href="./main_page.html">
            המשך קניה <i class="fa fa-shopping-cart"></i>
          </a>
        </button>
      </div>
    </main>
  );
};

export default ItemsLove;
