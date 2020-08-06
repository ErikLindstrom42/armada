import React, { useState, useEffect } from 'react';
import BoatManager from '../../modules/BoatManager'
import { Link } from 'react-router-dom'
import MaintenanceList from '../maintenance/MaintenanceList'
import './Boat.css'
import Button from 'react-bootstrap/Button'

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
            <div className="detailView">
                <div className="detailPic"><img src={boat.image} alt={boat.make}></img></div>
                <div>
                    <p>{boat.modelYear} {boat.make} {boat.model}</p>
                    <p>{boat.propulsion}boat, purchased in {boat.purchaseYear}.</p>
                    
                </div>
                <div className="boatButton">
                    <Link to={`/boats/${boat.id}/edit`}>
                        <Button variant="info" id="boatButton">Edit</Button>
                    </Link>
                    

                    <Button variant="info" id="boatButton" onClick={() => deleteBoat(boat.id)}>Delete</Button>
                    <p></p>
                </div>
                <MaintenanceList
                    key={boat.id}
                    boat={boat}
                    {...props}
                />
            </div>
        </>
    );
}

export default BoatDetail