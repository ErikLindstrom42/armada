import React, { useState, useEffect } from 'react';
//import the components we will need
import TripCard from './TripCard';
import TripManager from '../../modules/TripManager';
import Button from 'react-bootstrap/Button'

const TripList = (props) => {
    // The initial state is an empty array
    const [trips, setTrips] = useState([]);

    const getTrips = () => {
        // After the data comes back from the API, we
        //  use the setTrips function to update state
        return TripManager.getAll().then(tripsFromAPI => {
            setTrips(tripsFromAPI)
        });
    };

    // got the trips from the API on the component's first render
    useEffect(() => {
        getTrips()
    }, []);

    const deleteTrip = id => {
        TripManager.delete(id)
            .then(() => TripManager.getAll().then(setTrips));
    };

    // Finally we use map() to "loop over" the trips array to show a list of trip cards
    return (
        <>
            
            <section className="section-content">
                <Button id="tripButton"
                    
                    onClick={() => { props.history.push("/trips/new") }}>
                    New Trip
                </Button>
            </section>
            <div className="tripHeader"><h1>Captain's Log</h1> </div>
            <div className="container-cards">
                {trips.map(trip => {
                    if (trip.userId === parseInt(sessionStorage.getItem("activeUser"))) {
                        return (
                            <TripCard
                                key={trip.id}
                                trip={trip}
                                deleteTrip={deleteTrip}
                                {...props} 
                            />
                        )
                    }
                })}
            </div>
            
        </>
    );
};

export default TripList