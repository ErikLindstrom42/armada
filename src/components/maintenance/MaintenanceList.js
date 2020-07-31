import React, { useState, useEffect } from 'react';
//import the components we will need
import MaintenanceCard from './MaintenanceCard';
import MaintenanceManager from '../../modules/MaintenanceManager';


const MaintenanceList = (props) => {
    // The initial state is an empty array
    const [maintenances, setMaintenances] = useState([]);

    const getMaintenances = () => {
        // After the data comes back from the API, we
        //  use the setMaintenances function to update state
        return MaintenanceManager.getAll().then(maintenancesFromAPI => {
            setMaintenances(maintenancesFromAPI)
        });
    };

    // got the maintenances from the API on the component's first render
    useEffect(() => {
        getMaintenances()
    }, []);



    // Finally we use map() to "loop over" the maintenances array to show a list of maintenance cards
    return (
        <>
                
            <div className="container-cards">
                {maintenances.map(maintenance => 

                    
                        <MaintenanceCard
                            key={maintenance.id}
                            maintenance={maintenance}
                            {...props}
                        />

                    

                )}
            </div>

        </>
    );
};

export default MaintenanceList