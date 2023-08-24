import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/style.css";
import { UserContext } from "./UserContext";
import OK1Audio from "../audio/OK1.mp3";
import "../style/ItemAdmin.css";

const Item = () => {
  const params = useParams();
  const [item, setItem] = useState({});
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    document.title = item.item_description;
    return () => {
      document.title = "חנות בגדים";
    };
  }, [item]);

  const playAudio = (url) => {
    new Audio(url).play();
  };

  const getItem = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/items/${params.id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data[0]);
      setItem(data[0]);
    } catch (error) {}
  };
  useEffect(() => {
    getItem();
  }, []);
  const [selectedSize, setSelectedSize] = useState("");
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const renderSizeOptions = () => {
    const allSizes = [...item.availableSizes, ...item.outOfStockSizes];
    return allSizes.map((size) => (
      <option
        key={size}
        value={size}
        disabled={item.outOfStockSizes.includes(size)}
      >
        {size}
      </option>
    ));
  };
  const isSizeAvailable = (size) => {
    return item.availableSizes.includes(size);
  };
  const toHebrew = (type) => {
    if (type.toLowerCase() === "dress") return "שמלה";
    if (type.toLowerCase() === "shirt") return "חולצה";
    if (type.toLowerCase() === "skirt") return "חצאית";
    if (type.toLowerCase() === "shoes") return "נעליים";
    if (type.toLowerCase() === "accessories") return "אקססוריז";
    return type;
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    if (user != null && selectedSize != "") {
      try {
        const response = await fetch(
          `http://localhost:3001/api/cart/${params.id}/${selectedSize}?username=${user.username}&password=${user.password}`,
          { method: "POST" }
        );
        playAudio(OK1Audio);
        setSelectedSize("");
      } catch (error) {}
    } else alert("התחבר");
  };
  const handleAddToLove = async (e) => {
    e.preventDefault();
    if (user != null) {
      //fetch
      try {
        const response = await fetch(
          `http://localhost:3001/api/like/${params.id}?username=${user.username}&password=${user.password}`,
          { method: "POST" }
        );
        playAudio(OK1Audio);
      } catch (error) {}
    } else alert("התחבר");
  };
  if (!item.availableSizes) return <main></main>; ///////////!
  else
    return (
      <main className="main-container">
        <div className="card">
          <h1>{item.item_description}</h1>
          <p>{toHebrew(item.type)}</p>
          <img className="image-admin" src={item.image} />
          <p>
            <strong>מחיר:</strong> ${item.price}
          </p>
          <label htmlFor="sizeSelect">בחר מידה:</label>
          <select
            id="sizeSelect"
            className="select-admin"
            value={selectedSize}
            onChange={(e) => handleSizeSelect(e.target.value)}
          >
            <option value="">-- בחר מידה --</option>
            {renderSizeOptions()}
          </select>

          {selectedSize && (
            <p>
              {isSizeAvailable(selectedSize)
                ? `מידה ${selectedSize} זמינה במלאי.`
                : `מידה ${selectedSize} מחוץ למלאי.`}
            </p>
          )}
          <div>
            <button className="button-item" onClick={handleAddToCart}>
              הוסף לעגלה <i className="fa fa-shopping-cart"></i>
            </button>
            <button className="button-item" onClick={handleAddToLove}>
              הוסף למעודפים <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </main>
    );
};

export default Item;
