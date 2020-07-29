const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/trips/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/trips`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/trips/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newTrip) {
        return fetch(`${remoteURL}/trips`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTrip)
        }).then(data => data.json())
    },
    update(editedTrip) {
        return fetch(`${remoteURL}/trips/${editedTrip.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTrip)
        }).then(data => data.json());
    }
}