import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Style_sign_log.css";
import { UserContext } from "./UserProvider";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    document.title = "הרשמה";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);

  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password1 !== password2) {
      setErrorMessage("הסיסמאות לא תואמות");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        body: JSON.stringify({
          username: username.trim(),
          password: password1.trim(),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 409) {
        setErrorMessage("המשתמש כבר קיים");
      } else if (!response.ok) {
        setErrorMessage("ארעה שגיאה, נא נסו שוב.");
      } else {
        updateUser({
          username,
          admin: false,
          password: password1,
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (user !== null) {
    return (
      <main style={{ marginTop: "200px" }}>
        <div>
          <p>אתה כבר מחובר</p>
          <button
            className="button-log"
            onClick={() => {
              updateUser(null);
            }}
          >
            התנתקות
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend id="sign_in">הרשמה לאתר</legend>
          <div>
            <label htmlFor="username">שם משתמש:</label>
            <input
              className="big"
              type="text"
              placeholder="הכנס שם משתמש"
              id="username"
              name="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="tel">מספר טלפון:</label>
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
            <label htmlFor="email">מייל:</label>
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
            <label htmlFor="password">סיסמא:</label>
            <input
              className="big"
              type="password"
              id="password"
              placeholder="הכנס סיסמא"
              name="Password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password_again">הכנס שוב את הסיסמא:</label>
            <input
              className="big"
              type="password"
              id="password_again"
              placeholder="הכנס שוב את הסיסמא"
              name="Password_again"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div>
            <button className="button-log" type="submit">
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
