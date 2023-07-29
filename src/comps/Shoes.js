import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const Shoes = () => {
  const shoes = [];
  return (
    <main>
      <h2 id="shoes">נעליים:</h2>
      <section className="grid-container">
        {shoes.map((s) => (
          <div className="item" key={s.id}>
            <img src={s.img} alt="" />
            <div className="description">
              <p>{s.description}</p>
            </div>
            <div className="item_cost">
              <p>{s.cost} ש"ח</p>
            </div>
            <div className="item_insert">
              <button>
                הוסף לעגלה <i className="fa fa-shopping-cart"></i>
              </button>
              <button>
                הוסף למעודפים <i className="fa fa-heart"></i>
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
export default Shoes;
