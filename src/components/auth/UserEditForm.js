import React, { useState, useEffect } from "react"
import UserManager from "../../modules/UserManager"

const UserEditForm = props => {
    const [user, setUser] = useState({ name: "",userId: "", img: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...user };
        stateToChange[evt.target.id] = evt.target.value;
        setUser(stateToChange);
    };

    const updateUser = evt => {
        evt.preventDefault()
        setIsLoading(true);

    // This is an edit, so we need the id
    const editedUser = {
        id: props.match.params.taskId,
        name: user.user,
        img: user.img,
        userId: user.userId
    };

    UserManager.update(editedUser)
        .then(() => props.history.push("/users"))
    }

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="hidden"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="userId"
                            value={user.userId}
                        />

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={user.user}
                        />
                        <label htmlFor="name">Username</label>

                        <input
                            type="image"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="image"
                            value={user.img}
                        />
                        <label htmlFor="profilePicture">Profile Picture</label>

                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateUser}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default UserEditForm