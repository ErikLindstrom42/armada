import React, { useState } from "react"
import UserManager from "./../../modules/UserManager"
import "./Auth.css"

const Register = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "", user: "", checkPassword: ""});

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };



const handleRegister = evt => {
  evt.preventDefault();

  UserManager.findUserByUsername(credentials.user).then(user => {


    if (credentials.user === "" || credentials.email === "" || credentials.password === "" || credentials.checkPassword === "") {
      window.alert("Please input a username, password, and email");
    }
  
      else if (credentials.password !== credentials.checkPassword) {
        window.alert("Passwords do not match")
      }
     else if (user.length > 0) {
       window.alert("Username already exists")
   

     }
     else {
       UserManager.createUser(credentials)
       .then(() => {
         sessionStorage.setItem("credentials", JSON.stringify(credentials))
         props.history.push("/login")
         window.alert("Registration successful! Please log in")
     }
             );

     }
    }
  
  )
    // Create the credentials and redirect user to credentials list
    }



  /* This is representing our sign in and registration forms. 
  We can adjust the visualization and functionality as needed */

  return (
    <div className="registrationContainer">
      <form onSubmit={handleRegister}>
        <fieldset>
          <h3>New User? Register an Account</h3>
          <div className="formgrid">
            <input onChange={handleFieldChange} type="email"
              id="email"
              placeholder="Email"
              required="" autoFocus="" />
            

            <input onChange={handleFieldChange} type="password"
              id="password"
              placeholder="Password"
              required="" />
            

            <input onChange={handleFieldChange} type="password"
              id="checkPassword"
              placeholder="Re-type Password"
              required="" />
            

            <input onChange={handleFieldChange} type="userName"
              id="user"
              placeholder="User Name"
              required="" />
            
          </div>
          <div className="registrationSubmit">
          <button type="submit">Create Account</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;