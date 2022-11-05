import React from 'react';
import { Link } from 'react-router-dom';
import MessageForm from './MessageForm';


const Profile = (props) => {
   const { handleLogout, user } = props;
<<<<<<< HEAD
   const { id, firstName, lastName, birthdate, email, exp, vehicle } = user;
=======
   const { id, firstName, lastName, birthdate, email, exp, messages } = user;
>>>>>>> be9723ba2bce8fab398f55af19bf107225c0b2de
   const expirationTime = new Date(exp * 1000);
   let currentTime = Date.now();
   console.log("User Data:    ",user);
   console.log("Messages:    ",messages);
   

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
       <p>Messages: {messages}</p>
       <div>
<<<<<<< HEAD
        {/* <MessageForm userId={id}/> */}
        {/* <Messages user={id} /> */}
        <h2>Vehicle: {vehicle}</h2>
=======
        <MessageForm userId={id}/>
>>>>>>> be9723ba2bce8fab398f55af19bf107225c0b2de
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