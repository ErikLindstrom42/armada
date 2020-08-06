import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  const handleLogout = () => {
      props.clearUser();
      props.history.push('/');
  }
  return (
      <nav>
        <ul className="container">
  {props.hasUser?
          <li className="nav-link">
          <Link className="nav-link" to="/boats">
                 Boats 
          </Link>
          </li>
    : null}
  {props.hasUser?
          <li className="nav-link">
          <Link className="nav-link" to="/trips">
                 Trips 
          </Link>
          </li>
    : null}

            {/*LOGIN LOGOUT METHODS  */}
  {props.hasUser? 
          <li>
          <span className="nav-link" onClick={handleLogout}> Logout </span>
          </li>
    :<li>
          <Link className="nav-link" to="/login">Login</Link>
          </li>
    }
        </ul>
      </nav>

  );
};


export default withRouter(NavBar);