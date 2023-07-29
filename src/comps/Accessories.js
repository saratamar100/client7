import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const Accesories = () => {
  const accessories = [];
  return (
    <main>
      <h2 id="accessories">אקססוריז:</h2>
      <section className="grid-container">
        {accessories.map((a) => (
          <div className="item" key={a.id}>
            <img src={a.img} alt="" />
            <div className="description">
              <p>{a.description}</p>
            </div>
            <div className="item_cost">
              <p>{a.cost} ש"ח</p>
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
export default Accesories;
