import React from "react";
import "./Card.css";

function Card({ imgURL, cardMessage, bgcolor }) {
  return (
    <div className="card-cont" data-color={bgcolor ? bgcolor : ""}>
      <a href="#" className="card-body">
        <img src={imgURL} alt="Icon Image" className="card-img" />
        <p>{cardMessage[0]}</p>
      </a>
    </div>
  );
}

export default Card;
