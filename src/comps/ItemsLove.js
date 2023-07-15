import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const ItemsLove = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([
      { cost: 5, img: "", description: "adF" },
      { cost: 5, img: "", description: "adF" },
      { cost: 5, img: "", description: "adF" },
      { cost: 5, img: "", description: "adF" },
      { cost: 5, img: "", description: "adF" },
    ]);
  }, []);
  if (items.length == 0)
    return (
      <main className="main_shopping_card">
        <img
          className="image_center height_size"
          src="./image/Heart.png"
          alt="item_love"
        />
        <p>עדיין לא הוספת פריטים מועדפים :(</p>
        <div className="item_cart">
          <button>
            <a href="./main_page.html">
              המשך קניה <i className="fa fa-shopping-cart"></i>
            </a>
          </button>
        </div>
      </main>
    );
  return (
    <main className="main_shopping_card">
      <div className="grid-container">
        {items.map((i) => (
          <div className="item">
            <img src={i.img} alt="" />
            <div className="description">
              <p>{i.description}</p>
            </div>
            <div className="item_cost">
              <p>{i.cost} ש"ח</p>
            </div>
            <div className="item_insert">
              <button>
                הוסף לעגלה <i className="fa fa-shopping-cart"></i>
              </button>
              <button>
                הסר מהמועדפים <i className="fa fa-heart"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ItemsLove;
