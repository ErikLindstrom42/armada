import React, { useState, useEffect } from 'react';
import TripManager from '../../modules/TripManager'

const TripEditForm = props => {
    const [trip, setTrip] = useState({ location: "", tripName: "", date: "", image: "", userId: 0 })
    const [isLoading, setIsLoading] = useState(false)
    const handleFieldChange = evt => {
        const stateToChange = { ...trip }
        stateToChange[evt.target.id] = evt.target.value
        setTrip(stateToChange)
    }

    const updatingExistingTrip = evt => {
        evt.preventDefault()
        setIsLoading(true)

        const editedTrip = {
            id: props.match.params.tripId,
            location: trip.location,
            tripName: trip.tripName,
            date: trip.date,
            image: trip.image,
            userId: trip.userId
        }

        TripManager.update(editedTrip)
            .then(() => props.history.push("/trips"))

    }

    useEffect(() => {
        TripManager.get(props.match.params.tripId)
            .then(trip => {
                setTrip(trip)
                setIsLoading(false)
            })
    }, [])

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
                            value={trip.location}
                        />
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="tripName"
                            value={trip.tripName}
                        />
                        <label htmlFor="tripName">Adventure Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="date"
                            value={trip.date}
                        />
                        <label htmlFor="date">Date</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="image"
                            value={trip.image}
                        />
                        <label htmlFor="image">Image URL</label>
                        <input
                            type="hidden"
                            id="userId"
                            value={trip.userId}
                        />
                    </div>

                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updatingExistingTrip}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );


}


export default TripEditForm