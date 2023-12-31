import { Link, Outlet, useNavigate } from "react-router-dom";
import "../style/style.css";
import { UserContext } from "./UserProvider";
import { useContext } from "react";

function Layout() {
  const { user } = useContext(UserContext);
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
            {user == null || !user.admin ? (
              <>
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
              </>
            ) : (
              <></>
            )}
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
              <Link to="/shirts" className="nav__link">
                חולצות
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/skirts" className="nav__link">
                חצאיות
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/dresses" className="nav__link">
                שמלות
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/shoes" className="nav__link">
                נעליים
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/accessories" className="nav__link">
                אקססוריז
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/size" className="nav__link">
                המרת מידות
              </Link>
            </li>
            <li className="nav__item">
              {user == null && (
                <Link to="/login" className="nav__link">
                  התחברות / הרשמה
                </Link>
              )}
              {user != null && (
                <Link to="/logout" className="nav__link">
                  התנתקות
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer>
        <ul className="social-list">
          <li className="social-list__item">
            <a className="social-list__link" href="#" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="#" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href=" https://wa.me/972555555555"
              target="_blank"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="#" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
        <p>&copy; כל הזכויות שמורות לשרה וגילי.</p>
      </footer>
    </div>
  );
}
export default Layout;
