import React from "react";
import "./TripCard.css"
import {Link} from 'react-router-dom'


const TripCard = props => {

    //makes sure that userid is an integer
    const currentUser = parseInt(sessionStorage.getItem("activeUser"))
    if (props.trip.userId === currentUser) {

        return (

            <div className="card">
                <div className="card-content">
                    <div className="nameDate">

                    </div>

                </div>
                <div className="tripTitle">
                    <h3>
                        <img src={props.trip.image} alt={props.trip.location} style={{width: '250px'}}></img>
                        <p>{props.trip.tripName}</p>
                    </h3>
                </div>
                <div className="trip__description">
                    <p>{props.trip.synopsis}</p>
                </div>
                <div className="trip__deleteButton">
                <Link to={`trips/${props.trip.id}`}><button>Details</button></Link>
                    
                </div>
            </div>


        )
    }

};

export default TripCard;

