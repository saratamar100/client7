import React from "react";
import { Link } from "react-router-dom";
import "../style/Style_sign_log.css";

const SignUp = () => {
  return (
    <main>
      <form action="./main_page.html" method="GET">
        <fieldset>
          <legend id="sign_in">הרשמה לאתר</legend>
          <div class="imgcontainer">
            <img src="./image/logo.png" alt="Avatar" class="avatar" />
          </div>

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
            <label class="bold font_big" for="date">
              תאריך לידה:
            </label>
            <input
              class="small"
              type="date"
              id="date"
              placeholder="הכנס סיסמא"
              name="date"
            />
          </div>

          <div>
            <label for="tel">מספר טלפון:</label>
            <input
              class="big"
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
              class="big"
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
              class="big"
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
              class="big"
              type="password"
              id="password_again"
              placeholder="הכנס שוב את הסיסמא"
              name="Password_again"
              required
            />
          </div>

          <div>
            <label>מידת בגדים:</label>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="one_size"
            />
            <label for="vehicle1"> OS </label>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="xxs" />
            <label for="vehicle2"> XXS - 32 </label>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="xs" />
            <label for="vehicle3"> XS - 34 </label>
            <input type="checkbox" id="vehicle4" name="vehicle4" value="s" />
            <label for="vehicle4"> S - 36 </label>
            <input type="checkbox" id="vehicle5" name="vehicle5" value="m" />
            <label for="vehicle5"> M - 38 </label>
            <input type="checkbox" id="vehicle6" name="vehicle6" value="l" />
            <label for="vehicle6"> L - 40 </label>
            <input type="checkbox" id="vehicle7" name="vehicle7" value="xl" />
            <label for="vehicle7"> XL - 42 </label>
            <input type="checkbox" id="vehicle8" name="vehicle8" value="xxl" />
            <label for="vehicle8"> XXL - 44 </label>
          </div>

          <div>
            <label for="shoes_size">מידת נעליים:</label>
            <select id="shoes_size" name="Shoes_size" required>
              <option value="34-36">34-36</option>
              <option value="36-38">36-38</option>
              <option value="38-40">38-40</option>
              <option value="40-42">40-42</option>
              <option value="42-44">42-44</option>
            </select>
          </div>

          <div>
            <textarea
              class="big"
              id="point"
              name="point"
              placeholder="הערות"
            ></textarea>
          </div>

          <div>
            <button type="submit" onclick="">
              הירשם
            </button>
          </div>

          <div class="container">
            <button type="reset" class="cancelbtn">
              איפוס
            </button>
            <span class="psw">
              <Link to="/login">יש לי כבר חשבון</Link>
            </span>
          </div>
        </fieldset>
      </form>
    </main>
  );
};

export default SignUp;
