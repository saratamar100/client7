import React from 'react';
import "../style/Style_sign_log.css";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main>
            <form action="./main_page.html" method="POST">
                <fieldset>
                    <div class="imgcontainer">
                        <img src="./image/logo.png" alt="Avatar" class="avatar"/>
                    </div>

                    <legend id="log_in">התחברות לאתר</legend>
                    <div>
                        <label for="username">שם משתמש:</label>
                        <input class="big" type="text" placeholder="הכנס שם משתמש" id="username" name="Username" required/>
                    </div>
        
                    <div>
                        <label for="password">סיסמא:</label>
                        <input class="big" type="password" placeholder="הכנס סיסמא" id="password" name="Password" required/>
                    </div>

                    <div>
                        <button type="submit" onclick="">התחבר</button>
                    </div>
                    
                    <div>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" id="remember"> תזכור אותי </input>
                        </label>
                    </div>

                    <div class="container"> 
                        <button type="reset" class="cancelbtn">איפוס</button>
                        <span class="psw"><a href="./error_page.html">שכחתי סיסמא</a><tr> / <a href="./sign_in.html">אין לי חשבון</a></tr></span>
                    </div>
                </fieldset>
            </form>
        </main>
  );
};

export default Login;
