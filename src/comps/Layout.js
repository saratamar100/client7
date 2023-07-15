import { Link, Outlet, useNavigate } from "react-router-dom";
import "../style/style.css";
//import "../style/Style_sign_log.css";

function Layout() {
  return (
    <div>
      <header>
        <div class="header">
          <img class="image_logo" src="./image/logo2.png" alt="" />
          <ul class="header_-list">
            <li class="header_-list__item">
              <Link class="header_-list__link" to="/login">
                <i class="fa fa-sign-in"></i>
              </Link>
            </li>
            <li class="header_-list__item">
              <Link class="header_-list__link" to="/love">
                <i class="fa fa-heart"></i>
              </Link>
            </li>
            <li class="header_-list__item">
              <Link class="header_-list__link" to="/cart">
                <i class="fa fa-shopping-cart"></i>
              </Link>
            </li>
            <li className="header_-list__item">
              <Link className="header_-list__link" to="/">
                <i className="fa fa-home"></i>
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <Outlet />

      <footer>
        <ul className="social-list">
          <li className="social-list__item">
            <Link className="social-list__link" to="#">
              <i className="fab fa-facebook"></i>
            </Link>
          </li>
          <li className="social-list__item">
            <Link className="social-list__link" to="#">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
          <li className="social-list__item">
            <Link className="social-list__link" to="#">
              <i className="fab fa-whatsapp"></i>
            </Link>
          </li>
          <li className="social-list__item">
            <Link className="social-list__link" to="#">
              <i className="fa fa-envelope"></i>
            </Link>
          </li>
        </ul>
        <p>&copy; כל הזכויות שמורות לשרה ורבקי.</p>
      </footer>
    </div>
  );
}
export default Layout;
