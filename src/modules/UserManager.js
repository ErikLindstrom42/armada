const remoteURL = "http://localhost:5002"


export default {
    getUser: (id) => {
        return fetch(`${remoteURL}/users/${id}`).then(result => result.json())
    },
    getAllUsers: () => {
        return fetch(`${remoteURL}/users`).then(result => result.json())
    },
    update(editedUser) {
        return fetch(`${remoteURL}/edits/${editedUser.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedUser)
        }).then(data => data.json());
    },
    createUser: (newUser) => {


        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })


    },
    findUserByUsername: (username) => {
        return fetch(`${remoteURL}/users?user=${username}`).then(result => result.json())
    }

};
