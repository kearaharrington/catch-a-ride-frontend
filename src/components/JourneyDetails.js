import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;


const JourneyDetails = () => {
    const [journey, setJourney] = useState();
    const id = useParams();

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

    return (
        <div>
            <h3>{journey.origin} to {journey.destination}</h3>
            <p>Open Seats: {journey.openSeats}</p>
            <p>Desired Contribution: {journey.contribution}</p>
        </div>
    );
}

export default JourneyDetails;