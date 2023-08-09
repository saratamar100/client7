import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OK1Audio from "../audio/OK1.mp3";
import { UserContext } from "./UserContext";

function Card({ item, onDelete }) {
  const { user, setUser } = useContext(UserContext);
  const handleAddToCart = (e) => {
    e.preventDefault();
    playAudio(OK1Audio);
    //fetch
  };
  const handleAddToLove = (e) => {
    e.preventDefault();
    playAudio(OK1Audio);
    //fetch
  };
  const handleDelete = (e) => {
    e.preventDefault();
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      //fetch
      onDelete(item.id);
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
    <div className="item" key={item.id}>
      <Link to={"/item/" + item.id}>
        <img className="img" src={item.img} alt="" />
        <div className="description">
          <p>{item.description}</p>
        </div>
        <div className="item_cost">
          <p>{item.cost} ש"ח</p>
        </div>
        {(user == null || !user.admin) && (
          <div className="item_insert">
            <button onClick={handleAddToCart}>
              הוסף לעגלה <i className="fa fa-shopping-cart"></i>
            </button>
            <button onClick={handleAddToLove}>
              הוסף למעודפים <i className="fa fa-heart"></i>
            </button>
          </div>
        )}
        {user != null && user.admin && (
          <div className="item_insert">
            <button onClick={handleEdit}>
              ערוך <i className="fa fa-pencil"></i>
            </button>
            <button onClick={handleDelete}>
              מחק <i className="fa fa-trash"></i>
            </button>
          </div>
        )}
      </Link>
    </div>
  );
}

export default Card;
