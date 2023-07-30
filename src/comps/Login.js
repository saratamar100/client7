import React from "react";
import "../style/Style_sign_log.css";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ login }) => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    login({ username: "gever", password: "gever!" });
    navigate("/");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div class="imgcontainer">
            <img src="./image/logo.png" alt="Avatar" class="avatar" />
          </div>

          <legend id="log_in">התחברות לאתר</legend>
          <div>
            <label for="username">שם משתמש:</label>
            <input
              class="big"
              type="text"
              placeholder="הכנס שם משתמש"
              id="username"
              name="Username"
              required
            />
          </div>

          <div>
            <label for="password">סיסמא:</label>
            <input
              class="big"
              type="password"
              placeholder="הכנס סיסמא"
              id="password"
              name="Password"
              required
            />
          </div>

          <div>
            <button type="submit" onclick="">
              התחבר
            </button>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked="checked"
                name="remember"
                id="remember"
              />{" "}
              תזכור אותי
            </label>
          </div>

          <div class="container">
            <button type="reset" class="cancelbtn">
              איפוס
            </button>
            <span class="psw">
              <a href="./error_page.html">שכחתי סיסמא</a>
              <tr>
                {" "}
                / <Link to="/signup">אין לי חשבון</Link>
              </tr>
            </span>
          </div>
        </fieldset>
      </form>
    </main>
  );
};

export default Login;
