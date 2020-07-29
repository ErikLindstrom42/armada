import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Armada from './components/Armada';
import ArmadaPic from './components/ArmadaPic';
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Armada />
  </Router>,
  document.getElementById('root')
);
