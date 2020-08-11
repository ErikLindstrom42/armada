import React, { useState, useEffect } from 'react';
import TripManager from '../../modules/TripManager'
import { Link } from 'react-router-dom'
import './Trip.css'
import BoatManager from '../../modules/BoatManager'
import BoatCard from '../boat/BoatCard'
import Button from 'react-bootstrap/Button'

const TripDetail = props => {


    const [trip, setTrip] = useState({})
    const [boats, setBoats] = useState([]);

    useEffect(() => {
        TripManager.get(props.match.params.tripId)
            .then(trip => {
                setTrip(trip)

            })
    }, [])

    useEffect(() => {
        getBoats()
    }, [trip])

    const getBoats = () => {
        // After the data comes back from the API, we
        //  use the setBoats function to update state
        if(trip.boatId !== undefined){ 
        return BoatManager.get(trip.boatId).then(boatsFromAPI => {
            setBoats(boatsFromAPI)
            
        });
    }
    };

    const deleteTrip = id => {
        TripManager.delete(id)
            .then(() => TripManager.getAll().then(props.history.push("/trips")));
    };

    return (
        <>
            <div className="detailView">
            <div className="card">
                <div className="detailPic"><img src={trip.image} alt={trip.tripName}></img></div>
                <div>
                    <p>{trip.tripName} </p>
                    <p>{trip.location} {trip.date}</p>
                </div>
                <div className="detailButtons">
                    <Link to={`/trips/${trip.id}/edit`}>
                        <Button variant="info" id="tripButton">Edit</Button>
                    </Link>
                    <Button variant="info" id="tripButton" onClick={() => deleteTrip(trip.id)}>Delete</Button>
                </div>
            </div>
                <div className="container-cards">

                    <BoatCard
                        key={boats.id}
                        boat={boats}
                        {...props}
                    />
                </div>
            </div>
        </>
    );


}

export default TripDetail