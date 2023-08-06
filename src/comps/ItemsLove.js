import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import { UserContext } from "./UserContext";

const ItemsLove = () => {
  useEffect(() => {
    document.title = "מועדפים";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const { user, setUser } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  useEffect(() => {
    setItems([
      {
        cost: 5,
        img: "",
        description: "adF",
        availableSizes: ["S", "M"],
        unavailableSizes: ["L"],
        id: 1,
      },
      {
        cost: 5,
        img: "",
        description: "adF",
        availableSizes: ["S", "M"],
        unavailableSizes: [],
        id: 2,
      },
      {
        cost: 5,
        img: "",
        description: "adF",
        availableSizes: ["S", "M"],
        unavailableSizes: [],
        id: 3,
      },
      {
        cost: 5,
        img: "",
        description: "adF",
        availableSizes: ["S", "M"],
        unavailableSizes: [],
        id: 4,
      },
      {
        cost: 5,
        img: "",
        description: "adF",
        availableSizes: ["S", "M"],
        unavailableSizes: [],
        id: 5,
      },
    ]);
  }, []);

  const handleAddToCart = (id) => {
    const size = selectedSizes[id];
    if (size) {
      // Fetch or other logic to add item to cart with selected size

      // Clear the selected size after adding to cart
      setSelectedSizes((prevSelectedSizes) => ({
        ...prevSelectedSizes,
        [id]: undefined,
      }));
    } else {
      alert("בחר מידה");//change?
    }
    //remove from loved?
  };

  const handleRemoveFromLove = (id) => {
    //fetch
    //set
  };

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
            <select
              style={{ width: "50%" }}
              value={selectedSizes[i.id] || ""}
              onChange={(e) =>
                setSelectedSizes((prevSelectedSizes) => ({
                  ...prevSelectedSizes,
                  [i.id]: e.target.value,
                }))
              }
            >
              <option value="">בחר גודל</option>
              {[...i.availableSizes, ...i.unavailableSizes].map((size) => (
                <option
                  key={size}
                  value={size}
                  disabled={i.unavailableSizes.includes(size)}
                >
                  {size}
                </option>
              ))}
            </select>

            <div className="item_insert">
              <button onClick={() => handleAddToCart(i.id)}>
                הוסף לעגלה <i className="fa fa-shopping-cart"></i>
              </button>
              <button onClick={() => handleRemoveFromLove(i.id)}>
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
