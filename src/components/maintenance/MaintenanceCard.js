import React from "react";
import "./Maintenance.css"
import { Link } from "react-router-dom"


const MaintenanceCard = props => {

    //makes sure that userid is an integer
    // const currentUser = parseInt(sessionStorage.getItem("activeUser"))





    return (

        <div className="card">
            <div className="card-content">


            </div>
            <div className="maintenanceTitle">
                <h4>{props.maintenance.action} </h4>
                {props.maintenance.date}
                    <p>{props.maintenance.actionNotes}</p>


            </div>
            <div className="maintenance__description">

            </div>
        </div>


    )



};

export default MaintenanceCard;

