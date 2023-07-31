import React, { useEffect } from "react";
import "../style/style.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "שגיאה";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  return (
    <main class="main_shopping_card">
        <img src="" alt=""/>
        <h1>הדף בתהליכי בנייה</h1>
        <h2>מצטערים על העיכוב</h2>
        <div class="item_cart">
            <button><a href="./main_page.html">לדף הראשי  <i class="fa fa-home"></i></a></button>
        </div>
   </main>
   )
  
};

export default ErrorPage;
