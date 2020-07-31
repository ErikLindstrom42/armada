import React, { useState } from 'react';
import TripManager from '../../modules/TripManager'

const TripForm = props => {
    const [trip, setTrip] = useState({ location: "", boatId: "", tripName: "", date: "", image: "", userId: 0 })
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = { ...trip }
        stateToChange[evt.target.id] = evt.target.value
        setTrip(stateToChange)
    }

    const currentUserId = sessionStorage.getItem('activeUser')
    trip.userId = parseInt(currentUserId)

    const constructNewTrip = evt => {
        evt.preventDefault()
        if (trip.location === "" || trip.tripName === "" || trip.date === "" || trip.image === "") {
            window.alert("Please fill in all of the fields");
        } else {
            setIsLoading(true)

            TripManager.post(trip)
                .then(() => props.history.push("/trips"))
        }
    }

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="location"
                            placeholder="Location"
                        />
                        <label htmlFor="tripName">Adventure Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="tripName"
                            placeholder="Adventure Name"
                        />
                        {/* <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="date"
                            placeholder="Date"
                        />
                        <label htmlFor="date">Date</label> */}
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            onChange={handleFieldChange} />
                        <label htmlFor="image">Image URL</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="image"
                            placeholder="Image URL"
                        />
                    </div>

                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewTrip}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );


}


export default TripForm