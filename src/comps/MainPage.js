import React, { useEffect, useState } from "react";
import "../style/style.css";

const MainPage = () => {
  const [shirts, setShirts] = useState([]);
  const [skirts, setSkirts] = useState([]);
  useEffect(()=>{
    setShirts([{description:"חולצה יפה מאוד", cost: 5, img:"../image/Shirts/shirt_1.jpg"}])
  },[]);
  return (
    <div>
      <header>
        <div className="header">
          <img className="image_logo" src="./image/logo2.png" alt="" />
          <ul className="header_-list">
            <li className="header_-list__item">
              <a className="header_-list__link" href="./log_in.html">
                <i className="fa fa-sign-in"></i>
              </a>
            </li>
            <li className="header_-list__item">
              <a className="header_-list__link" href="./items_love.html">
                <i className="fa fa-heart"></i>
              </a>
            </li>
            <li className="header_-list__item">
              <a className="header_-list__link" href="./shopping_cart.html">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#shirts" className="nav__link">
                חולצות
              </a>
            </li>
            <li className="nav__item">
              <a href="#skirts" className="nav__link">
                חצאיות
              </a>
            </li>
            <li className="nav__item">
              <a href="#dresses" className="nav__link">
                שמלות
              </a>
            </li>
            <li className="nav__item">
              <a href="#shoes" className="nav__link">
                נעליים
              </a>
            </li>
            <li className="nav__item">
              <a href="#accessories" className="nav__link">
                אקססוריז
              </a>
            </li>
            <li className="nav__item">
              <a href="#size_table" className="nav__link">
                המרת מידות
              </a>
            </li>
            <li className="nav__item">
              <a href="log_in.html" className="nav__link">
                התחברות / הרשמה
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h2 id="shirts">חולצות:</h2>
        <section className="grid-container">
          {shirts.map((s) => (
            <div className="item">
              <img src={s.img} alt="" />
              <div className="description">
                <p>{s.description}</p>
              </div>
              <div className="item_cost">
                <p>{s.cost} שקלים</p>
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

        <h2 id="skirts">חצאיות:</h2>
        <section className="grid-container">
          {skirts.map((s) => (
            <div className="item">
              <img src={s.img} alt="" />
              <div className="description">
                <p>s.description</p>
              </div>
              <div className="item_cost">
                <p>s.cost</p>
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

      <footer>
        <ul className="social-list">
          <li className="social-list__item">
            <a className="social-list__link" href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="#">
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="#">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
        <p>&copy; כל הזכויות שמורות לשרה ורבקי.</p>
      </footer>
    </div>
  );
};

export default MainPage;
