import React from "react";
import "./BoatCard.css"
import { Link } from "react-router-dom"


const BoatCard = props => {

    //makes sure that userid is an integer
    const currentUser = parseInt(sessionStorage.getItem("activeUser"))
    const filterByPropulsion = sessionStorage.getItem("filter")

    if (props.boat.userId === currentUser) {
        if(props.boat.propulsion == filterByPropulsion || filterByPropulsion === null || filterByPropulsion === "")

        return (

            <div className="card">
                <div className="card-content">


                </div>
                <div className="boatTitle">
                    <h3>
                        <img src={props.boat.image} alt={props.boat.model} style={{ width: '250px' }}></img>
                        <p>{props.boat.make} {props.boat.model}</p>
                        

                    </h3>
                </div>
                <div className="boat__description">
                    
                </div>
                <div className="boat__deleteButton">

                    
                    <Link to={`boats/${props.boat.id}`}><button>Details</button></Link>
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

