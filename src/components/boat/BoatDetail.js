import React, { useState, useEffect } from 'react';
import BoatManager from '../../modules/BoatManager'
import { Link } from 'react-router-dom'
import MaintenanceList from '../maintenance/MaintenanceList'

const BoatDetail = props => {

    const [boat, setBoat] = useState({})

    useEffect(() => {
        BoatManager.get(props.match.params.boatId)
            .then(boat => {
                setBoat(boat)
            })
    }, [])

    const deleteBoat = id => {
        BoatManager.delete(id)
            .then(() => BoatManager.getAll().then(props.history.push("/boats")));
    };

    return (
        <>
            <div><img src={boat.image} alt={boat.make}></img></div>
            <div>{boat.make} {boat.model}</div>

            <Link to={`/boats/${boat.id}/edit`}>
                <button>Edit</button>
            </Link>
            <button type="button" onClick={() => deleteBoat(boat.id)}>Delete</button>
            <MaintenanceList
            key = {boat.id}
            boat = {boat}
            {...props}
            />
        </>
    );
}

export default BoatDetail