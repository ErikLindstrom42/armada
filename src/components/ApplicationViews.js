import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import TripList from "./trip/TripList";
import TripForm from './trip/TripForm';
import TripEditForm from './trip/TripEditForm';
import BoatList from "./event/BoatList";
import BoatForm from './event/BoatForm';
import BoatEditForm from './event/BoatEditForm';
import UserList from "./auth/UserList"
import UserEditForm from "./auth/UserEditForm"


// Check if credentials are in session storage returns true/false
//Redirects to login if nothing in session storage.
//const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  return (
    <React.Fragment>
      <Route
        exact
        path="/home"
        render={(props) => {
          return <Home {...props} />;
        }} />
      {/* LOGIN ROUTE */}
      {/* //pass the `setUser` function to Login component. */}
      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }} />
      <Route path="/register" render={props => {
        return <Register setUser={setUser} {...props} />
      }} />
      <Route 
      path="/home"
      render={props => {
        return <UserList {...props} />
      }} />
       {/* <Route
        path="/users/:userId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <UserEditForm {...props} />
          } else {
            return <Redirect to="/home" />
          }
        }} />
      <Route
        path="/home"
        render={props => {
          return <FriendList {...props} />;
        }} /> */}
           {/* <Route
            path="/friends/new"
            render={(props) => {
                return <FriendForm {...props} />
            }} />

      <Route
        exact path="/home"
        render={props => {
          if (hasUser) {
            return <MessageList {...props}
            />
          }
          else {
            return <Redirect to="/home" />
          }
        }} />

      <Route
        path="/messages/:messageId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <MessageEditForm {...props}
            />
          }
          else {
            return <Redirect to="/home" />
          }
        }} />


 */}

      {/*************** ARTICLES ***************/}
      {/* <Route
            exact
            path="/articles"
            render={props => {
                if (hasUser) {
                    return <ArticleList {...props}/>;//Home here is a placeholder value. 
                    //You would need to inserts and import articles once built
                } else {
                    return <Redirect to="/login" />
                }
            }} />
        <Route
            path="/articles/new"
            render={(props) => {
                return <ArticleForm {...props} />
            }} />
 */}
      {/*************** BOATS ***************/}
      <Route
        exact
        path="/events"
        render={props => {
          return <BoatList {...props} />
        }} />
      
      <Route
        path="/events/new"
        render={(props) => {
          return <BoatForm {...props} />
        }} />
      
      <Route
        path="/events/:eventId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <BoatEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

      {/*************** TRIPS ******************/}
      <Route
        exact
        path="/trips"
        render={props => {
          return <TripList {...props} />
        }} />

      <Route
        path="/trips/new"
        render={(props) => {
          return <TripForm {...props} />
        }} />

      <Route
        path="/trips/:tripId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <TripEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        </React.Fragment>
    );
}
export default ApplicationViews;


