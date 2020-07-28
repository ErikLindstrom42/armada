import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Armada from './components/Armada';
import { Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Armada />
  </React.StrictMode>,
  document.getElementById('root')
);
