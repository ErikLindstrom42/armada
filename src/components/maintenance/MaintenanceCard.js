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
                    <h3>
                        
                        <p>{props.maintenance.date} {props.maintenance.action}</p>
                        

                    </h3>
                </div>
                <div className="maintenance__description">
                    
                </div>
                <div className="maintenance__deleteButton">

                    
                    <Link to={`maintenances/${props.maintenance.id}`}><button>Details</button></Link>
                </div>
            </div>


        )
        
    

};

export default MaintenanceCard;

