import React, { useState } from 'react';
import BoatManager from '../../modules/BoatManager'


const BoatForm = props => {
    const [boat, setBoat] = useState({ make: "", model: "", modelYear: "", purchaseYear: "", propulsion: "Sail", image: "", userId: 0 })
    const [isLoading, setIsLoading] = useState(false)

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'darwin')
        setLoading(true)
        const res = await fetch(
            '	https://api.cloudinary.com/v1_1/dfpncq7pk/image/upload',
            {
                method: 'POST',
                body: data
            }
        )

        const file = await res.json()

        setImage(file.secure_url)
        setLoading(false)
        boat.image=file.secure_url
    }


let newBoatId

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
                .then((response) => {
                    props.history.push("/boats") 
                    //Below is to pull ID from response as sample for future projects
                    newBoatId= response.id
                    console.log(newBoatId)
                }  )
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
                        {/* <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="image"
                            placeholder="Image URL"
                        />
                        <label htmlFor="image">Image URL</label> */}
                        <div className="pic___upload">

                            <h1>Upload Image</h1>
                            <input type="file"
                                name="file"
                                id="image"
                                placeholder="Upload an image"
                                onChange={uploadImage}
                            />
                            {loading ? (
                                <h3>Loading...</h3>
                            ) : (
                                    <img src={image} style={{ width: '300px' }} />
                                )

                            }
                        </div>

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