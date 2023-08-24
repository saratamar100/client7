import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OK1Audio from "../audio/OK1.mp3";
import { UserContext } from "./UserContext";
// import "../style/ItemAdmin.css"

function Card({ item, onDelete }) {
  const { user, setUser } = useContext(UserContext);
  const handleAddToLove = async (e) => {
    e.preventDefault();
    if (user != null) {
      //fetch
      try {
        const response = await fetch(
          `http://localhost:3001/api/like/${item.item_id}?username=${user.username}&password=${user.password}`,
          {
            method: "POST",
          }
        );
        playAudio(OK1Audio);
      } catch (error) {}
    } else alert("התחבר");
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    const confirmDelete = window.confirm(
      "אתה בטוח שאתה רוצה למחוק את הפריט?"
    );
    if (confirmDelete) {
      //fetch

      try {
        const response = await fetch(
          `http://localhost:3001/api/items/${item.item_id}?username=${user.username}&password=${user.password}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        onDelete(item.item_id);
      } catch (error) {
        throw error;
      }

      
    }
  };
  const handleEdit = (e) => {
    //e.preventDefault();
    //move to edit
  };
  const playAudio = (url) => {
    new Audio(url).play();
  };
  return (
    <div className="item" key={item.item_id}>
      <Link to={"/item/" + item.item_id}>
        <img className="img" src={item.image} alt="" />
        <div className="description">
          <p>{item.item_description}</p>
        </div>
        <div className="item_cost">
          <p>{item.price} ש"ח</p>
        </div>
        {(user == null || !user.admin) && (
          <div>
            <button className="button-item" onClick={handleAddToLove}>
              הוסף למעודפים <i className="fa fa-heart"></i>
            </button>
          </div>
        )}
        {user != null && user.admin && (
          <div className="item_insert">
            <button className="button-item" onClick={handleEdit}>
              ערוך <i className="fa fa-pencil"></i>
            </button>
            <button className="button-item" onClick={handleDelete}>
              מחק <i className="fa fa-trash"></i>
            </button>
          </div>
        )}
      </Link>
    </div>
  );
}

export default Card;
