import React from "react";
import "./MaintenanceCard.css"
import { Link } from "react-router-dom"


const MaintenanceCard = props => {

    //makes sure that userid is an integer
    // const currentUser = parseInt(sessionStorage.getItem("activeUser"))





    return (

        <div className="card">
            <div className="card-content">


            </div>
            <div className="maintenanceTitle">
                <h3>{props.maintenance.date} {props.maintenance.action}</h3>
                    <p>{props.maintenance.actionNotes}</p>


            </div>
            <div className="maintenance__description">

            </div>
        </div>


    )



};

export default MaintenanceCard;

