import { Link, Outlet, useNavigate } from "react-router-dom";
import "../style/style.css";
//import "../style/Style_sign_log.css";

function Layout({user, logout}) {
  return (
    <div>
      <header>
        <div className="header">
          <img className="image_logo" src="./image/logo2.png" alt="" />
          <ul className="header_-list">
            <li className="header_-list__item">
              <Link className="header_-list__link" to="/login">
                <i className="fa fa-sign-in"></i>
              </Link>
            </li>
            <li className="header_-list__item">
              <Link className="header_-list__link" to="/love">
                <i className="fa fa-heart"></i>
              </Link>
            </li>
            <li className="header_-list__item">
              <Link className="header_-list__link" to="/cart">
                <i className="fa fa-shopping-cart"></i>
              </Link>
            </li>
            <li className="header_-list__item">
              <Link className="header_-list__link" to="/">
                <i className="fa fa-home"></i>
              </Link>
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
            {user == null && (
              <Link to="/login" className="nav__link">
                התחברות / הרשמה
              </Link>
            )}
            {user != null && (
              <button onClick={logout} className="nav__link">
                התנתקות
              </button>
            )}
          </li>
        </ul>
      </nav>
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
        <p>&copy; כל הזכויות שמורות לשרה וגילי.</p>
      </footer>
    </div>
  );
}
export default Layout;
