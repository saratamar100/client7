import { Link, Outlet, useNavigate } from "react-router-dom";
import "../style/style.css";
//import "../style/Style_sign_log.css";

function Layout() {
  alert("hi");
  return (
    <div>
      <header>
        <div className="header">
          <img className="image_logo" src="./image/logo2.png" alt="" />
          <ul className="header_-list">
            <li className="header_-list__item">
              <Link className="header_-list__link" to="./main_page.html">
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
