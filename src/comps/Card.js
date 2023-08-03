import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
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
          <button>
            הוסף לעגלה <i className="fa fa-shopping-cart"></i>
          </button>
          <button>
            הוסף למעודפים <i className="fa fa-heart"></i>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Card;
