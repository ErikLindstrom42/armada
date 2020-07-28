import React from "react";
import "./BoatCard.css"


const BoatCard = props => {

//makes sure that userid is an integer
    const currentUser = parseInt(sessionStorage.getItem("activeUser"))
    if (props.boat.userId == currentUser) {

        return (

            <div className="card">
                <div className="card-content">
                    <div className="nameDate">

                    </div>

                </div>
                <div className="boatTitle">
                    <h3>
                        <a href={props.boat.image} alt={props.boat.model} target="_blank" rel="noopener noreferrer">{props.boat.title} </a>

                    </h3>
                </div>
                <div className="boat__description">
                    <p>{props.boat.synopsis}</p>
                </div>
                <div className="boat__deleteButton">

                        <button type="button" onClick={() => props.deleteBoat(props.boat.id)}>Delete</button>
                    </div>
            </div>
            

        )
    }

};

export default BoatCard;

