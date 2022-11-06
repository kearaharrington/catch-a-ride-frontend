import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MessageForm from './MessageForm';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import Messages from './Messages';

import { Redirect, useParams } from 'react-router-dom';

const { REACT_APP_SERVER_URL } = process.env;



const VisitProfile = () => {
    const [ tuser, setTuser ] = useState({});
    const { idx } = useParams();
    const [reviewsArr, setReviewsArr] = useState([]);
    console.log('BIG CAPS HERE', idx);
    

    useEffect(() => {
        setAuthToken(localStorage.getItem('jwtToken'));
        axios.get(`${REACT_APP_SERVER_URL}/users/profile/go/${idx}`)
            .then(res => {
                console.log('THE USER', res.data);
                setTuser(res.data);
                setReviewsArr(res.data.rev);
                console.log('TUSER CONSOLE LOG', tuser)
            }).catch(err => {
                console.log(err);
            });
    }, [])
console.log('FOR T USER OUTSIDE USEEFFECT', tuser);
    const { id, firstName, lastName, birthdate, email, rev } = tuser;
    
    // const expirationTime = new Date(exp * 1000);
    let currentTime = Date.now();

    // const userData = tuser ?
    //     (<div>
    //         <h1>Profile</h1>
    //         <p>Name: {firstName} {lastName}</p>
    //         <p>Email: {email}</p>
    //         <p>Birthday: {birthdate}</p>
    //         <p>ID: {id}</p>
    //         <p>Messages: {messages}</p>
    //         <div>
    //             {/* <MessageForm userId={tuser.id} /> */}

    //             {/* <Messages arr={reviewsArr} /> */}



    //         </div>
    //     </div>) : <h2>Loading...</h2>

    // const errorDiv = () => {
    //     return (
    //         <div className="text-center pt-4">
    //             <h3>Please <Link to="/login">login</Link> to view this page</h3>
    //         </div>
    //     );
    // };

    return (
        // <div className="text-center pt-4">
        //     {tuser ? userData : errorDiv()}
        // </div>
        <div>
        <h1>Profile</h1>
            <p>Name: {firstName} {lastName}</p>
            <p>Email: {email}</p>
            <p>Birthday: {birthdate}</p>
            <p>ID: {id}</p>
             <Messages arr={reviewsArr} />
            <div></div>
            </div>

        
    );

}

export default VisitProfile;