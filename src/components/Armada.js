import React, { useState } from 'react';
import logo from './logo.svg';
import './Armada.css'

function Armada() {
const temp = "temp"

  
  return (
    <div className="Armada">

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
      </header>
    </div>
  );
}

export default Armada;
