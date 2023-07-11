import React from 'react';
import "../style/Style_sign_log.css"

const SignIn = () => {
  return (
    <main>
      <form action="./main_page.html" method="GET">
        <fieldset>
          <legend id="sign_in">הרשמה לאתר</legend>
          <div className="imgcontainer">
            <img src="./image/logo.png" alt="Avatar" className="avatar" />
          </div>

          <div>
            <label htmlFor="username">שם משתמש:</label>
            <input className="big" type="text" placeholder="הכנס שם משתמש" id="username" name="Username" required />
          </div>

          <div>
            <label className="bold font_big" htmlFor="date">תאריך לידה:</label>
            <input className="small" type="date" id="date" placeholder="הכנס סיסמא" name="date" />
          </div>

          <div>
            <label htmlFor="tel">מספר טלפון:</label>
            <input className="big" type="tel" id="tel" placeholder="הכנס מספר פלאפון" name="Tel" required />
          </div>

          <div>
            <label htmlFor="email">מייל:</label>
            <input className="big" type="email" placeholder="הכנס כתובת email" id="email" name="Email" required />
          </div>

          <div>
            <label htmlFor="password">סיסמא:</label>
            <input className="big" type="password" id="password" placeholder="הכנס סיסמא" name="Password" required />
          </div>

          <div>
            <label htmlFor="password_again">הכנס שוב את הסיסמא:</label>
            <input className="big" type="password" id="password_again" placeholder="הכנס שוב את הסיסמא" name="Password_again" required />
          </div>

          <div>
            <label>מידת בגדים:</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="one_size" />
            <label htmlFor="vehicle1"> OS </label>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="xxs" />
            <label htmlFor="vehicle2"> XXS - 32 </label>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="xs" />
            <label htmlFor="vehicle3"> XS - 34 </label>
            <input type="checkbox" id="vehicle4" name="vehicle4" value="s" />
            <label htmlFor="vehicle4"> S - 36 </label>
            <input type="checkbox" id="vehicle5" name="vehicle5" value="m" />
            <label htmlFor="vehicle5"> M - 38 </label>
            <input type="checkbox" id="vehicle6" name="vehicle6" value="l" />
            <label htmlFor="vehicle6"> L - 40 </label>
            <input type="checkbox" id="vehicle7" name="vehicle7" value="xl" />
            <label htmlFor="vehicle7"> XL - 42 </label>
            <input type="checkbox" id="vehicle8" name="vehicle8" value="xxl" />
            <label htmlFor="vehicle8"> XXL - 44 </label>
          </div>

          <div>
            <label htmlFor="shoes_size">מידת נעליים:</label>
            <select id="shoes_size" name="Shoes_size" required>
              <option value="34-36">34-36</option>
              <option value="36-38">36-38</option>
              <option value="38-40">38-40</option>
              <option value="40-42">40-42</option>
              <option value="42-44">42-44</option>
            </select>
          </div>

          <div>
            <textarea className="big" id="point" name="point" placeholder="הערות"></textarea>
          </div>

          <div>
            <button type="submit" onClick="">הירשם</button>
          </div>

          <div className="container">
            <button type="reset" className="cancelbtn">איפוס</button>
            <span className="psw"><a href="./log_in.html">יש לי כבר חשבון</a></span>
          </div>
        </fieldset>
      </form>
    </main>
  );
};

export default SignIn;
