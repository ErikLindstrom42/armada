import React, { useState, useEffect } from 'react';
import TripManager from '../../modules/TripManager'
import './Trip.css'
import BoatManager from '../../modules/BoatManager'
import Button from 'react-bootstrap/Button'

const TripForm = props => {
    const [trip, setTrip] = useState({ location: "", boatId: "", tripName: "", date: "", image: "", userId: 0 })
    const [isLoading, setIsLoading] = useState(false)
    const [boats, setBoats] = useState([]);


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
        trip.image = file.secure_url
    }



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

    const currentUserId = sessionStorage.getItem('activeUser')
    trip.userId = parseInt(currentUserId)

    let boatList = boats.map((boat) =>

        (trip.userId === boat.userId ?
            <option key={boat.id} value={boat.id}>{boat.make} {boat.model}</option> : null)

    )


    const handleFieldChange = evt => {
        const stateToChange = { ...trip }
        stateToChange[evt.target.id] = evt.target.value
        setTrip(stateToChange)
    }




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

                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            onChange={handleFieldChange} />
                        <div className="boatSelector">
                            <select
                                onChange={handleFieldChange}
                                required
                                id="boatId"
                            >{boatList}</select>
                        </div>

                        <div className="picUpload">
                            <div className="cloudinaryUpload">
                                <h3>Upload Image</h3>
                                <input type="file"
                                    name="file"
                                    id="image"
                                    placeholder="Upload an image"
                                    onChange={uploadImage}
                                />
                                {loading ? (
                                    <h3>Loading...</h3>
                                ) : (
                                        <img src={image} style={{ width: '300px' }} alt="Cloudinary Upload" />
                                    )

                                }
                            </div>
                        </div>

                        <div className="tripButton">
                            <Button
                                variant="info"
                                disabled={isLoading}
                                id="tripButton"
                                onClick={constructNewTrip}
                            >Submit</Button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    );


}


export default TripForm