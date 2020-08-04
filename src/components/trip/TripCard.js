import React, { useState, useEffect } from "react";
import "./Trip.css"
import { Link } from 'react-router-dom'



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
                <div className="tripImage">
                    <h3>
                        <img src={props.trip.image} alt={props.trip.location} style={{ width: '250px' }}></img>
                    </h3>
                </div>
                <p>{props.trip.tripName}</p>
                <div className="trip__description">
                    <p>{props.trip.synopsis}</p>
                </div>
                <div>
                    <Link to={`trips/${props.trip.id}`}><button id="tripDetailsButton">Details</button></Link>

                </div>
             
            </div>


        )
    }

};

export default TripCard;

