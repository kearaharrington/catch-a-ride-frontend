import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import Messages from './Messages';
import Images from './Image';
const { REACT_APP_SERVER_URL } = process.env;


const Profile = (props) => {
   const { handleLogout, user } = props;


   const { id, firstName, lastName, birthdate, email, exp} = user;
   const [reviewsArr, setReviewsArr] = useState([]);
   const expirationTime = new Date(exp * 1000);
   let currentTime = Date.now();

  useEffect(() => {
    setAuthToken(localStorage.getItem('jwtToken'));
    axios.get(`${REACT_APP_SERVER_URL}/users/profile`)
    .then(res => {
        console.log('RESPONSE', res.data);
        setReviewsArr(res.data.rev);
    }).catch(err => { console.log(err);
    });
  }, []);



   // make a condition that compares exp and current time
   if (currentTime >= expirationTime) {
       handleLogout();
       alert('Session has ended. Please login to continue.');
   }

   const userData = user ?
   (<div className='profile-card'>
       <h1>Profile</h1>
       <Images />
       <p>Name: {firstName} {lastName}</p>
       <p>Email: {email}</p>
       <p>Birthday: {birthdate}</p>
       <p>ID: {id}</p>
       <div>

        <Messages arr={reviewsArr} />
        
        

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