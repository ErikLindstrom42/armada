import React, { useState } from 'react';
import MaintenanceManager from '../../modules/MaintenanceManager'
import MaintenanceList from './MaintenanceList'

const MaintenanceForm = props => {
    const [maintenance, setMaintenance] = useState({ action: "", boatId: "", actionNotes: "", date: "", })
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = { ...maintenance }
        stateToChange[evt.target.id] = evt.target.value
        setMaintenance(stateToChange)
    }
    

    maintenance.boatId = props.boat.id

    const constructNewMaintenance = evt => {
        evt.preventDefault()
        if (maintenance.action === "" || maintenance.actionNotes === "" || maintenance.date === "") {
            window.alert("Please fill in all of the fields");
        } else {


            MaintenanceManager.post(maintenance)
                .then(() => {
                    props.getMaintenances()
                    document.getElementById("maintenanceForm").reset();
                })


        }
    }

    return (
        <>
            <form id = "maintenanceForm">
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="action">Maintenance Performed</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="action"
                            placeholder="changed oil etc..."
                        />
                        <label htmlFor="actionNotes">Details</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="actionNotes"
                            placeholder="Details"
                        />
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            required
                            onChange={handleFieldChange}
                            id="date"
                            placeholder="Date"
                        />

                    </div>

                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewMaintenance}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );


}


export default MaintenanceForm