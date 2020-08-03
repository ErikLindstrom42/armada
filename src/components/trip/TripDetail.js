import React, { useState, useEffect } from 'react';
import TripManager from '../../modules/TripManager'
import {Link} from 'react-router-dom'
import './Trip.css'

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
        <div className="detailView">
            <div className="detailPic"><img src={trip.image} alt={trip.tripName}></img></div>
            <div>
            <p>{trip.tripName} </p>
            <p>{trip.location} {trip.date}</p>
            </div>
            <div className="detailButtons">
        <Link to={`/trips/${trip.id}/edit`}>
          <button>Edit</button>
        </Link>
            <button type="button" onClick={() => deleteTrip(trip.id)}>Delete</button>
            </div>
            </div>
        </>
    );


}

export default TripDetail