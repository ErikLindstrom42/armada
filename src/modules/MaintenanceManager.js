const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/maintenances/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/maintenances`).then(result => result.json())
    },
    
    post(newMaintenance) {
        return fetch(`${remoteURL}/maintenances`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMaintenance)
        }).then(data => data.json())
    }
}