import React from 'react';

function Card({item}) {
	return(
		<div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="description">
              <p>{item.description}</p>
            </div>
            <div className="item_cost">
              <p>{item.cost} ש"ח</p>
            </div>
            <div className="item_insert">
              <button>
                הוסף לעגלה <i className="fa fa-shopping-cart"></i>
              </button>
              <button>
                הוסף למעודפים <i className="fa fa-heart"></i>
              </button>
            </div>
          </div>
	);
}

export default Card;
