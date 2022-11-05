import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
// import MessageForm from './MessageForm';
const { REACT_APP_SERVER_URL } = process.env;


const JourneyDetails = () => {
    const [journey, setJourney] = useState();
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false);

    console.log(id);

    // useEffect(() => {
    //     axios.get(`${REACT_APP_SERVER_URL}/journeys/${id}`)
    //         .then(response => {
    //             console.log(response.data);
    //             setJourney(response.data.journey);
    //        })
    //        .catch((err) => {
    //           console.log(err.message);
    //        });
    //  }, []);

    useEffect(() => {
        const fetchJourney = async () => {
            setAuthToken(localStorage.getItem('jwtToken'));
            const result = await axios.get(`${REACT_APP_SERVER_URL}/journeys/show/${id}`);
            console.log(result.data);
            setJourney(result.data.journey);
        };
        fetchJourney();
     }, []);

     const navEdit = (e) => {
        setRedirect(true);
     }

    if (redirect) return <Redirect to={`/journeys/edit/${journey._id}`} id={journey._id} journey={journey} setJourney={setJourney}/> // You can have them redirected to profile (your choice)


    if (journey) {
        return (
            <div>
                <h3>{journey.origin} to {journey.destination}</h3>
                <p>Open Seats: {journey.openSeats}</p>
                <p>Desired Contribution: {journey.contribution}</p>
                {/* <Link to={`/journeys/edit/${journey._id}`} state={{journey: journey}}> */}
                <button onClick={navEdit}>Edit Details</button>
                {/* <MessageForm userId={id}/> */}
            </div>
        );
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}

export default JourneyDetails;