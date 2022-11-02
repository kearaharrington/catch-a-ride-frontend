import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;


const JourneyDetails = () => {
    const [journey, setJourney] = useState();
    const { id } = useParams();
    console.log(id);

    // useEffect(async () => {
    //     await axios.get(`${REACT_APP_SERVER_URL}/journeys/${id}`)
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
     }, []);

    if (journey) {
        return (
            <div>
                <h3>{journey.origin} to {journey.destination}</h3>
                <p>Open Seats: {journey.openSeats}</p>
                <p>Desired Contribution: {journey.contribution}</p>
                <Link to={`/journeys/edit/${journey._id}`} state={{journey: journey}}>
                    <button>Edit Details</button>
                </Link>
            </div>
        );
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}

export default JourneyDetails;