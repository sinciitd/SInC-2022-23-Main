import React from "react";

const Card = (props) => {
  return (
    <div className="d-flex flex-row justify-content-around align-items-center">
      <div className="p-2 bd-highlight">
        <div className="cardCoordi">
          <img
            className="card-img-topCoordi"
            src={props.img}
            alt={`${props.name}`}
          ></img>
          <div className="cardNameCoordi">
            <div>
              <b>{props.name}</b>
            </div>
            {props.position}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
