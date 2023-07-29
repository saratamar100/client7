import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const Shirts = () => {
  const [shirts, setShirts] = useState([]);
  const pic =
    "data:image/jpeg;base64,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";
  useEffect(() => {
    let l = [
      {
        description: "חולצה יפה מאוד",
        cost: 56,
        img: pic,
        id: 1,
      },
      {
        description: "חולצה יפה מאוד",
        cost: 5,
        img: pic,
        id: 2,
      },
      {
        description: "חולצה יפה מאוד",
        cost: 5,
        img: pic,
        id: 3,
      },
      {
        description: "חולצה יפה מאוד",
        cost: 5,
        img: pic,
        id: 4,
      },
    ];
    setShirts(l);
  }, []);
  return (
    <main>
      <h2 id="shirts">חולצות:</h2>
      <section className="grid-container">
        {shirts.map((s) => (
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
export default Shirts;
