import React, { useState, useEffect } from 'react';
import BoatManager from '../../modules/BoatManager'

const BoatEditForm = props => {
    const [boat, setBoat] = useState({ make: "", model: "", modelYear: "", purchaseYear: "", propulsion: "", image: "", userId: 0 })
    const [isLoading, setIsLoading] = useState(false)
    const handleFieldChange = evt => {
        const stateToChange = { ...boat }
        stateToChange[evt.target.id] = evt.target.value
        setBoat(stateToChange)
    }

    const updatingExistingBoat = evt => {
        evt.preventDefault()
        setIsLoading(true)

        const editedBoat = {
            id: props.match.params.boatId,
            make: boat.make,
            model: boat.model,
            modelYear: boat.modelYear,
            purchaseYear: boat.purchaseYear,
            propulsion: boat.propulsion,
            image: boat.image,
            userId: boat.userId
        }

        BoatManager.update(editedBoat)
            .then(() => props.history.push("/boats"))

    }

    useEffect(() => {
        BoatManager.get(props.match.params.boatId)
            .then(boat => {
                setBoat(boat)
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
                            id="make"
                            value={boat.make}
                        />
                        <label htmlFor="make">Make</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="model"
                            value={boat.model}
                        />
                        <label htmlFor="model">Model</label>

                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="modelYear"
                            value={boat.modelYear}
                        />
                        <label htmlFor="modelYear">Year Built</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="purchaseYear"
                            value={boat.purchaseYear}
                        />
                        <label htmlFor="purchaseYear">Year Bought</label>
                        <select 
                        id="propulsion"
                            onChange={handleFieldChange}>
                            <option value="Sail">Sail</option>
                            <option value="Paddle">Paddle</option>
                            <option value="Motor">Motor</option>
                        </select>
                        
                        <label htmlFor="propulsion">Propulsion Type</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="image"
                            value={boat.image}
                        />
                        <label htmlFor="image">Image URL</label>
                        <input
                            type="hidden"
                            id="userId"
                            value={boat.userId}
                        />
                    </div>

                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updatingExistingBoat}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );


}

export default BoatEditForm