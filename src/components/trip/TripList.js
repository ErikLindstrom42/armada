import React, { useState, useEffect } from 'react';
//import the components we will need
import TripCard from './TripCard';
import TripManager from '../../modules/TripManager';

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
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/trips/new") }}>
                    New Trip
                </button>
            </section>
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