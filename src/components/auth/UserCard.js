import React from "react";
import  "./UserCard.css"

const UserCard = props => {
  return (
      
    <div className="user-card">
      <div className="user-card-content">
      <h1>{props.user.user}'s Armada</h1>
        <picture>
          <img src={props.user.img} alt="User" />
        </picture>
        <h3>
          <span className="card-petname">
          </span>
      
        </h3>
      </div>
    </div>
  );
};

export default UserCard;