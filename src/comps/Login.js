import React, { useContext, useEffect } from "react";
import "../style/Style_sign_log.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Login = () => {
  useEffect(() => {
    document.title = "כניסה";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setUser((user) => ({ username: "gever", password: "gever!", admin: true }));
    navigate("/");
  };

  if (user != null)
    return (
      <main style={{ marginTop: "200px" }}>
        <div>
          <p>u r log in</p>
          <button className="button-log"
            onClick={() => {
              setUser(null);
            }}
          >
            התנתקות
          </button>
        </div>
      </main>
    );

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="imgcontainer">
            <img src="./image/logo.png" alt="Avatar" className="avatar" />
          </div>

          <legend id="log_in">התחברות לאתר</legend>
          <div>
            <label for="username">שם משתמש:</label>
            <input
              className="big"
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
              className="big"
              type="password"
              placeholder="הכנס סיסמא"
              id="password"
              name="Password"
              required
            />
          </div>

          <div>
            <button className="button-log" type="submit" onclick="">
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

          <div className="container">
            <button type="reset" className="button-log cancelbtn">
              איפוס
            </button>
            <span className="psw">
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
