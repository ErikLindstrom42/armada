import React, { useState } from 'react';
import MaintenanceManager from '../../modules/MaintenanceManager'

const MaintenanceForm = props => {
    const [maintenance, setMaintenance] = useState({ location: "", boatId: "", maintenanceName: "", date: "", image: "", userId: 0 })
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = { ...maintenance }
        stateToChange[evt.target.id] = evt.target.value
        setMaintenance(stateToChange)
    }

    const currentUserId = sessionStorage.getItem('activeUser')
    maintenance.userId = parseInt(currentUserId)

    const constructNewMaintenance = evt => {
        evt.preventDefault()
        if (maintenance.location === "" || maintenance.maintenanceName === "" || maintenance.date === "" || maintenance.image === "") {
            window.alert("Please fill in all of the fields");
        } else {
            setIsLoading(true)

            MaintenanceManager.post(maintenance)
                .then(() => props.history.push("/maintenances"))
        }
    }

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="location"
                            placeholder="Location"
                        />
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="maintenanceName"
                            placeholder="Adventure Name"
                        />
                        <label htmlFor="maintenanceName">Adventure Name</label>             
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="date"
                            placeholder="Date"
                        />
                        <label htmlFor="date">Date</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="image"
                            placeholder="Image URL"
                        />
                        <label htmlFor="image">Image URL</label>
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