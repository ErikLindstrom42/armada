import React, { useState, useEffect } from 'react';
//import the components we will need
import BoatCard from './BoatCard';
import BoatManager from '../../modules/BoatManager';

const BoatList = (props) => {
    // The initial state is an empty array
    const [boats, setBoats] = useState([]);

    const getBoats = () => {
        // After the data comes back from the API, we
        //  use the setBoats function to update state
        return BoatManager.getAll().then(boatsFromAPI => {
            setBoats(boatsFromAPI)
        });
    };

    // got the boats from the API on the component's first render
    useEffect(() => {
        getBoats()
    }, []);

    const deleteBoat = id => {
        BoatManager.delete(id)
            .then(() => BoatManager.getAll().then(setBoats));
    };

    // Finally we use map() to "loop over" the boats array to show a list of boat cards
    return (
        <>

            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/boats/new") }}>
                    New Boat
                </button>
            </section>
            <div className="container-cards">
                {boats.map(boat => {
                   
                        return (
                            <BoatCard
                                key={boat.id}
                                boat={boat}
                                deleteBoat={deleteBoat}
                                {...props}
                            />
                        )
                    
                })}
            </div>

        </>
    );
};

export default BoatList