import React, { useContext, useEffect, useState } from "react";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(`http://localhost:3001/api/users/${username.trim()}`, {
        method: "GET",
        password,
      });
      const response = await fetch(
        `http://localhost:3001/api/users?username=${username.trim()}&password=${password}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(response);
      if (response.status === 404) return alert("שם משתמש וסיסמא אינם נכונים");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data[0]);
      setUser({
        username: data[0].username,
        admin: data[0].is_admin == 1,
        password,
      });
      navigate("/");
    } catch (error) {
      throw error;
    }
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
          <legend id="log_in">התחברות לאתר</legend>
          <div>
            <label for="username">שם משתמש:</label>
            <input
              className="big"
              type="text"
              placeholder="הכנס שם משתמש"
              id="username"
              name="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
              <Link to="/signup">אין לי חשבון</Link>
            </span>
          </div>
        </fieldset>
      </form>
    </main>
  );
};

export default Login;
