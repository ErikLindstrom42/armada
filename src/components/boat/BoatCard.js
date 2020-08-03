import React from "react";
import "./Boat.css"
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap'



const BoatCard = props => {

    //makes sure that userid is an integer
    const currentUser = parseInt(sessionStorage.getItem("activeUser"))
    const filterByPropulsion = sessionStorage.getItem("filter")

    if (props.boat.userId === currentUser) {
        if (props.boat.propulsion == filterByPropulsion || filterByPropulsion === null || filterByPropulsion === "")

            return (

                <div className="card">
                    <div className="card-content">


                    </div>
                    <div className="boatImage">
                            <img src={props.boat.image} alt={props.boat.model} style={{ width: '250px' }}></img>
                            </div>
                    <div className="boatTitle">
                        <h3>
                            <p>{props.boat.make} {props.boat.model}</p>
                        </h3>
                    </div>
                    
                    <div>


                        <Link to={`boats/${props.boat.id}`}><button id="boatDetailsButton">Details</button> {' '}</Link>
                    </div>
                    
                </div>


            )
        else return null
    }
    else {
        return null
    }

};

export default BoatCard;

