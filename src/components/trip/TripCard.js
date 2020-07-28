import React from "react";
import "./TripCard.css"


const TripCard = props => {

//makes sure that userid is an integer
    const currentUser = parseInt(sessionStorage.getItem("activeUser"))
    if (props.trip.userId == currentUser) {

        return (

            <div className="card">
                <div className="card-content">
                    <div className="nameDate">

                    </div>

                </div>
                <div className="tripTitle">
                    <h3>
                        <a href={props.trip.url} alt={props.trip.title} target="_blank" rel="noopener noreferrer">{props.trip.title} </a>

                    </h3>
                </div>
                <div className="trip__description">
                    <p>{props.trip.synopsis}</p>
                </div>
                <div className="trip__deleteButton">

                        <button type="button" onClick={() => props.deleteTrip(props.trip.id)}>Delete</button>
                    </div>
            </div>
            

        )
    }

};

export default TripCard;

