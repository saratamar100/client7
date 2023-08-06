import React, { useEffect } from "react";
import "../style/style.css";
import Scroll from "./Scroll_gpt";

const Accesories = () => {
  const url = "";
  useEffect(() => {
    document.title = "אקססוריז";
    return () => {
      document.title = "חנות בגדים";
    };
  }, []);
  return (
    <main>
      <h2 id="accessories">אקססוריז:</h2>
      <Scroll url={url} />
    </main>
  );
};
export default Accesories;
