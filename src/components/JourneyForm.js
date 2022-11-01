// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const { REACT_APP_SERVER_URL } = process.env;

const JourneyForm = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [contribution, setContribution] = useState('');
    const [openSeats, setOpenSeats] = useState('');
    const history = useHistory();
    // const [redirect, setRedirect] = useState(false);

    const handleOrigin = (e) => {
        setOrigin(e.target.value);
    }
    
    const handleDestination = (e) => {
        setDestination(e.target.value);
    }

    const handleContribution = (e) => {
        setContribution(e.target.value);
    }

    const handleOpenSeats = (e) => {
        setOpenSeats(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const newJourney = { origin, destination, contribution, openSeats };
        console.log(newJourney);
        axios.post(`${REACT_APP_SERVER_URL}/journeys/new`, newJourney)
            .then(response => {
                console.log('===> Yay, new journey');
                console.log(response);
                history.push(`/journeys/${response.data}`)
            })
            .catch(error => console.log('===> Error in Journey creation', error));
    }

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Post a New Journey!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="origin">Leaving From:</label>
                            <input type="text" name="origin" value={origin} onChange={handleOrigin} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="destination">Heading To:</label>
                            <input type="text" name="destination" value={destination} onChange={handleDestination} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contribution">$ Contribution:</label>
                            <input type="number" name="contribution" value={contribution} onChange={handleContribution} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="openSeats">Available Seats:</label>
                            <input type="number" name="openSeats" value={openSeats} onChange={handleOpenSeats} className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JourneyForm;