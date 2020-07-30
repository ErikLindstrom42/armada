import React, { useState } from 'react';
import logo from './logo.svg';
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import './Armada.css'

function Armada() {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  //hasUser makes sure the crendentials has a value
  const [hasUser, setHasUser] = useState(isAuthenticated());

  //Used to refresh in after login in Login.js
  const setUser = user => {
    setHasUser(isAuthenticated());
  };

  //Logout function located in Navbar
  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

  return (
    <>
      <div className="Armada">
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
{/* 
        <header className="Armada-header">
          <img src={logo} className="Armada-logo" alt="logo" />
          <p>
            Edit <code>src/Armada.js</code> and save to reload.
        </p>
          <a
            className="Armada-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header> */}
      </div>
    </>
  );
}

export default Armada;
