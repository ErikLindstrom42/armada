import React from "react";
import "./Boat.css"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'




const BoatCard = props => {
    //makes sure that userid is an integer
    const currentUser = parseInt(sessionStorage.getItem("activeUser"))

    if (props.boat.userId === currentUser) {

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

                <div className="boatButton">


                    <Link to={`/boats/${props.boat.id}`}><Button variant="info" id="boatButton">Details</Button></Link>
                </div>

            </div>


        )
    }
    else return null

};

export default BoatCard;

