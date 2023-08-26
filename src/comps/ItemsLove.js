import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import { UserContext } from "./UserProvider";
import imageHeart from "../image/Heart.png";

const ItemsLove = () => {
  useEffect(() => {
    document.title = "מועדפים";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const { user } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const getLike = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/like?username=${user.username}&password=${user.password}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getLike();
  }, []);

  const handleAddToCart = async (id, e) => {
    e.preventDefault();
    const size = selectedSizes[id];
    if (size) {
      // Fetch or other logic to add item to cart with selected size
      try {
        const response = await fetch(
          `http://localhost:3001/api/cart/${id}/${size}?username=${user.username}&password=${user.password}`,
          { method: "POST" }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
      } catch (error) {}

      // Clear the selected size after adding to cart
      setSelectedSizes((prevSelectedSizes) => ({
        ...prevSelectedSizes,
        [id]: undefined,
      }));
    } else {
      alert("בחר מידה"); //change?
    }
    //remove from loved?
  };

  const handleRemoveFromLove = async (id, e) => {
    e.preventDefault();
    e.preventDefault();
    //fetch
    try {
      const response = await fetch(
        `http://localhost:3001/api/like/${id}?username=${user.username}&password=${user.password}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setItems((items) => items.filter((i) => i.item_id != id));
      }
    } catch (error) {
      throw error;
    }
  };

  if (user == null)
    return (
      <main className="main_shopping_card">
        <img
          className="image_center height_size"
          src={imageHeart}
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
          src={imageHeart}
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
            <Link to={"/item/" + i.item_id}>
              <img className="img" src={i.image} alt="" />
              <div className="description">
                <p>{i.item_description}</p>
              </div>
              <div className="item_cost">
                <p>{i.cost} ש"ח</p>
              </div>
              <select
                style={{ width: "50%" }}
                value={selectedSizes[i.item_id] || ""}
                onClick={(e) => e.preventDefault()}
                onChange={(e) =>
                  setSelectedSizes((prevSelectedSizes) => ({
                    ...prevSelectedSizes,
                    [i.item_id]: e.target.value,
                  }))
                }
              >
                <option value="">בחר גודל</option>
                {[...i.availableSizes, ...i.outOfStockSizes].map((size) => (
                  <option
                    key={size}
                    value={size}
                    disabled={i.outOfStockSizes.includes(size)}
                  >
                    {size}
                  </option>
                ))}
              </select>

              <div className="item_insert">
                <button
                  className="button-item"
                  onClick={(e) => handleAddToCart(i.item_id, e)}
                >
                  הוסף לעגלה <i className="fa fa-shopping-cart"></i>
                </button>
                <button
                  className="button-item"
                  onClick={(e) => handleRemoveFromLove(i.item_id, e)}
                >
                  הסר מהמועדפים <i className="fa fa-heart"></i>
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ItemsLove;
