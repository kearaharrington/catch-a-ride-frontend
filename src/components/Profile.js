import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MessageForm from './MessageForm';
import Messages from './Messages';
import Vehicles from './Vehicles';
import axios from 'axios';

const {REACT_APP_SERVER_URL} = process.env

const Profile = (props) => {
   const { handleLogout, user } = props;
   const { id, firstName, lastName, birthdate, email, exp } = user;
   const expirationTime = new Date(exp * 1000);
   let currentTime = Date.now();

   // make a condition that compares exp and current time
   if (currentTime >= expirationTime) {
       handleLogout();
       alert('Session has ended. Please login to continue.');
   }


    

   const userData = user ?
   (<div>
       <h1>Profile</h1>
       <p>Name: {firstName} {lastName}</p>
       <p>Email: {email}</p>
       <p>Birthday: {birthdate}</p>
       <p>ID: {id}</p>
       <div>
        <MessageForm userId={id}/>
        <Messages user={id} />
        <h2>Vehicle: {<Vehicles userId={id}/>}</h2>
       </div>
   </div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    


    return (
        <div className="text-center pt-4">
            {user ? userData : errorDiv()}
        </div>
    );

}

export default Profile;