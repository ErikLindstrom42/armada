import React, { useState, useEffect } from 'react';
import MaintenanceCard from './MaintenanceCard';
import MaintenanceManager from '../../modules/MaintenanceManager';
import MaintenanceForm from './MaintenanceForm';
import "./Maintenance.css"


const MaintenanceList = (props) => {
    // The initial state is an empty array
    const [maintenances, setMaintenances] = useState([]);
    // { location: "", tripName: "", date: "", image: "", userId: "" }
    
    const getMaintenances = () => {
        // After the data comes back from the API, we
        //  use the setMaintenances function to update state
        return MaintenanceManager.getMaintenanceById(props.boat.id).then(maintenancesFromAPI => {
            setMaintenances(maintenancesFromAPI)
        });
    };

    useEffect(() => {
        getMaintenances()
    }, []);


    return (
        <>


            <div className="container-cards">
                <div>
                    <MaintenanceForm                        
                        {...props}
                        getMaintenances={getMaintenances}
                    />
                    
                </div>
                <div className="maintenanceList">
                {maintenances.map(maintenance =>

                    <MaintenanceCard
                        key={maintenance.id}
                        maintenance={maintenance}
                        {...props}
                    />
                )}
                </div>
            </div>

        </>
    );
};

export default MaintenanceList