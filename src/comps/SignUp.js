import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Style_sign_log.css";
import { UserContext } from "./UserContext";

const SignUp = () => {
  useEffect(() => {
    document.title = "הרשמה";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // login({ username: "gever", password: "gever!" });
    // navigate("/");
  };
  if (user != null)
    return (
      <main style={{ marginTop: "200px" }}>
        <div>
          <p>u r log in</p>
          <button
            className="button-log"
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
          <legend id="sign_in">הרשמה לאתר</legend>
          <div className="imgcontainer">
            <img src="./image/logo.png" alt="Avatar" className="avatar" />
          </div>

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
            <label for="tel">מספר טלפון:</label>
            <input
              className="big"
              type="tel"
              id="tel"
              placeholder="הכנס מספר פלאפון"
              name="Tel"
              required
            />
          </div>

          <div>
            <label for="email">מייל:</label>
            <input
              className="big"
              type="email"
              placeholder="הכנס כתובת email"
              id="email"
              name="Email"
              required
            />
          </div>

          <div>
            <label for="password">סיסמא:</label>
            <input
              className="big"
              type="password"
              id="password"
              placeholder="הכנס סיסמא"
              name="Password"
              required
            />
          </div>

          <div>
            <label for="password_again">הכנס שוב את הסיסמא:</label>
            <input
              className="big"
              type="password"
              id="password_again"
              placeholder="הכנס שוב את הסיסמא"
              name="Password_again"
              required
            />
          </div>

          <div>
            <button className="button-log" type="submit" onclick="">
              הירשם
            </button>
          </div>

          <div className="container">
            <button type="reset" className="button-log cancelbtn">
              איפוס
            </button>
            <span className="psw">
              <Link to="/login">יש לי כבר חשבון</Link>
            </span>
          </div>
        </fieldset>
      </form>
    </main>
  );
};

export default SignUp;
