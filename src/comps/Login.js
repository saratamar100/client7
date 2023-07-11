import React from 'react';
import "../style/Style_sign_log.css";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main>
      <form action="./main_page.html" method="POST" onSubmit={handleSubmit}>
        <fieldset>
          <div className="imgcontainer">
            <img src="./image/logo.png" alt="Avatar" className="avatar" />
          </div>

          <legend id="log_in">התחברות לאתר</legend>
          <div>
            <label htmlFor="username">שם משתמש:</label>
            <input className="big" type="text" placeholder="הכנס שם משתמש" id="username" name="Username" required />
          </div>

          <div>
            <label htmlFor="password">סיסמא:</label>
            <input className="big" type="password" placeholder="הכנס סיסמא" id="password" name="Password" required />
          </div>

          <div>
            <button type="submit">התחבר</button>
          </div>

          <div>
            <label>
              <input type="checkbox" checked="checked" name="remember" id="remember" /> תזכור אותי
            </label>
          </div>

          <div className="container">
            <button type="reset" className="cancelbtn">איפוס</button>
            <span className="psw"><a href="./error_page.html">שכחתי סיסמא</a><tr> / <a href="./sign_in.html">אין לי חשבון</a></tr></span>
          </div>
        </fieldset>
      </form>
    </main>
  );
};

export default Login;
