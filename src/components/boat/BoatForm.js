import React, { useState } from 'react';
import BoatManager from '../../modules/BoatManager'

const BoatForm = props => {
    const [boat, setBoat] = useState({ make: "", model: "", modelYear: 0, purchaseYear: "", propulsion: "Sail", image: "", userId: 0 })
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = { ...boat }
        stateToChange[evt.target.id] = evt.target.value
        setBoat(stateToChange)
    }

    const currentUserId = sessionStorage.getItem('activeUser')
    boat.userId = parseInt(currentUserId)

    const constructNewBoat = evt => {
        evt.preventDefault()
        if (boat.make === "" || boat.model === "" || boat.modelYear === "" || boat.purchaseYear === "" || boat.image === "") {
            window.alert("Please fill in all of the fields");
        } else {
            setIsLoading(true)
            boat.modelYear = parseInt(boat.modelYear)

            BoatManager.post(boat)
                .then(() => props.history.push("/boats"))
        }
    }

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
                            placeholder="Make"
                        />
                        <label htmlFor="make">Make</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="model"
                            placeholder="Model"
                        />
                        <label htmlFor="model">Model</label>

                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="modelYear"
                            placeholder="Year Built"
                        />
                        <label htmlFor="modelYear">Year Built</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="purchaseYear"
                            placeholder="Year Bought"
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
                            placeholder="Image URL"
                        />
                        <label htmlFor="image">Image URL</label>
                    </div>

                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewBoat}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );


}


export default BoatForm