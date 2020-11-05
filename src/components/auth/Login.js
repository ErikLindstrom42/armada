import React, { useState } from "react"
import UserManager from "./../../modules/UserManager"
import { Link } from "react-router-dom";
import "./Auth.css"

const userName = ""
const password = ""
const Login = props => {
  const [credentials, setCredentials] = useState([]);

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };
  sessionStorage.setItem("activeUser", 1)
  const tryLogin = (e) => {
    e.preventDefault();
    let loginAccepted = false
    UserManager.getAllUsers()
      .then(users => {
        users.find(user => {
          if (user.user === credentials.user && user.password === credentials.password) {
            loginAccepted = true
            sessionStorage.setItem("credentials", JSON.stringify(credentials))
            sessionStorage.setItem("activeUser", user.id)
            props.setUser(credentials)
            props.history.push("/boats")
          }


        })
        if (loginAccepted === false) {
          window.alert("Incorrect username or password")
        }
      })


  }




  /* This is representing our sign in and registration forms. 
  We can adjust the visualization and functionality as needed */

  return (
    <div className="loginContainer">
      <form onSubmit={tryLogin}>
          <fieldset>
        <div>
            <h3>Please sign in</h3>
            <div className="formgrid">
              <input onChange={handleFieldChange} type="userName"
                id="user"
                placeholder="Username"
                required="" autoFocus="" />
              <label htmlFor="userName"></label>

              <input onChange={handleFieldChange} type="password"
                id="password"
                placeholder="Password"
                required="" />
              <label htmlFor="inputPassword"></label>
            </div>
            <div className="loginButton">
            <button type="submit">Sign in</button>
            </div>
            <div className="register">New user? &nbsp;
      <Link to="/register"> Register a new account </Link>
            </div>
        </div>
          </fieldset>
      </form>

    </div>
  );
};

export default Login;