import React from "react";
import { Link } from "react-router-dom";
import OK1Audio from "../audio/OK1.mp3"

function Card({ item }) {
  const handleAddToCart = (e) => {
    e.preventDefault();
    playAudio(OK1Audio);
  };
  const handleAddToLove = (e) => {
    e.preventDefault();
    playAudio(OK1Audio);
  };
  function playAudio(url) {
    new Audio(url).play();
  }
  return (
    <div className="item" key={item.id}>
      <Link to={"/item/" + item.id}>
        <img className="img" src={item.img} alt="" />
        <div className="description">
          <p>{item.description}</p>
        </div>
        <div className="item_cost">
          <p>{item.cost} ש"ח</p>
        </div>
        <div className="item_insert">
          <button onClick={handleAddToCart}>
            הוסף לעגלה <i className="fa fa-shopping-cart"></i>
          </button>
          <button onClick={handleAddToLove}>
            הוסף למעודפים <i className="fa fa-heart"></i>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Card;
