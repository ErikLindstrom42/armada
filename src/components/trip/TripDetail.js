import React, { useState, useEffect } from 'react';
import TripManager from '../../modules/TripManager'
import {Link} from 'react-router-dom'

const TripDetail = props => {


    const [trip, setTrip] = useState({})
    

    useEffect(() => {
        TripManager.get(props.match.params.tripId)
            .then(trip => {
                setTrip(trip)
            })
    }, [])

    const deleteTrip = id => {
        TripManager.delete(id)
            .then(() => TripManager.getAll().then(props.history.push("/trips")));
    };

    return (
        <>
            <div><img src={trip.image} alt={trip.tripName}></img></div>
            <div>{trip.tripName} {trip.date}</div>
            
        <Link to={`/trips/${trip.id}/edit`}>
          <button>Edit</button>
        </Link>
            <button type="button" onClick={() => deleteTrip(trip.id)}>Delete</button>
            
        </>
    );


}

export default TripDetail