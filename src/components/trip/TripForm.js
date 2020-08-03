import React, { useState } from 'react';
import TripManager from '../../modules/TripManager'

const TripForm = props => {
    const [trip, setTrip] = useState({ location: "", boatId: 1, tripName: "", date: "", image: "", userId: 0 })
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
        trip.image=file.secure_url
    }

    const handleFieldChange = evt => {
        const stateToChange = { ...trip }
        stateToChange[evt.target.id] = evt.target.value
        setTrip(stateToChange)
    }

    const currentUserId = sessionStorage.getItem('activeUser')
    trip.userId = parseInt(currentUserId)

    const constructNewTrip = evt => {
        evt.preventDefault()
        if (trip.location === "" || trip.tripName === "" || trip.date === "" || trip.image === "") {
            window.alert("Please fill in all of the fields");
        } else {
            setIsLoading(true)

            TripManager.post(trip)
                .then(() => props.history.push("/trips"))
        }
    }

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="location"
                            placeholder="Location"
                        />
                        <label htmlFor="tripName">Adventure Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="tripName"
                            placeholder="Adventure Name"
                        />
                        {/* <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="date"
                            placeholder="Date"
                        />
                        <label htmlFor="date">Date</label> */}
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            onChange={handleFieldChange} />
                        <label htmlFor="image">Image URL</label>
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
                            onClick={constructNewTrip}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );


}


export default TripForm