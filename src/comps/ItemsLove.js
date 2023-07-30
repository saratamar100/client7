import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import { UserContext } from "./UserContext";

const ItemsLove = () => {
  const { user, setUser } = useContext(UserContext);
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

  if (user == null)
    return (
      <main className="main_shopping_card">
        <img
          className="image_center height_size"
          src="./image/Heart.png"
          alt="item_love"
        />
        <p>בשביל לראות פריטים מועדפים עליך להתחבר</p>
        <div className="item_cart">
          <button>
            <Link to="/login">
              התחבר <i className="fa fa-sign-in"></i>
            </Link>
          </button>
        </div>
      </main>
    );

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
