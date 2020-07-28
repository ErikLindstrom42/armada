const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/boats/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/boats`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/boats/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newBoat) {
        return fetch(`${remoteURL}/boats`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBoat)
        }).then(data => data.json())
    },
    update(editedBoat) {
        return fetch(`${remoteURL}/boats/${editedBoat.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedBoat)
        }).then(data => data.json());
    }
}