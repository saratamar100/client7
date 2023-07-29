import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const Dresses = () => {
  const dresses = [];
  return (
    <main>
      <h2 id="dresses">שמלות:</h2>
      <section className="grid-container">
        {dresses.map((d) => (
          <div className="item" key={d.id}>
            <img src={d.img} alt="" />
            <div className="description">
              <p>d.description</p>
            </div>
            <div className="item_cost">
              <p>{d.cost} ש"ח</p>
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
export default Dresses;
