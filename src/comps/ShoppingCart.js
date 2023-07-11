import React from 'react';
import "../style/style.css";

const ShoppingCart = () => {
  return (
    <React.Fragment>
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
              <a className="header_-list__link" href="./main_page.html">
                <i className="fa fa-home"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main className="main_shopping_card">
        <img className="image_center move_left" src="./image/Shopping_Cart.png" alt="shopping_cart" />
        <p>העגלה שלך עדיין ריקה :(</p>
        <div className="item_cart">
          <button>
            <a href="./main_page.html">
              המשך קניה
              <i className="fa fa-shopping-cart"></i>
            </a>
          </button>
          <button>
            <a href="./error_page.html">
              מעבר לתשלום
              <i className="fa fa-credit-card"></i>
            </a>
          </button>
        </div>
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
    </React.Fragment>
  );
};

export default ShoppingCart;
