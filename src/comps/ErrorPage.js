import React from 'react';
import "../style/style.css";

const ErrorPage = () => {
  return (
    <React.Fragment>
      <header>
        <div className="header">
          <img className="image_logo" src="./image/logo2.png" alt="" />
          <ul className="header_-list">
            <li className="header_-list__item">
              <a className="header_-list__link" href="./main_page.html">
                <i className="fa fa-home"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main className="main_shopping_card">
        <img src="" alt="" />
        <h1>הדף בתהליכי בנייה</h1>
        <h2>מצטערים על העיכוב</h2>
        <div className="item_cart">
          <button>
            <a href="./main_page.html">לדף הראשי  <i className="fa fa-home"></i></a>
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

export default ErrorPage;
