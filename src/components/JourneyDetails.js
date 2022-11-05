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
        axios.get(`${REACT_APP_SERVER_URL}/journeys/${id}`)
            .then(response => {
                console.log(response.data);
                setJourney(response.data.journey);
           })
           .catch((err) => {
              console.log(err.message);
           });
     });

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