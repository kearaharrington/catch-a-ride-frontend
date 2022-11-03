// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import JourneyForm from './JourneyForm';
import RideReqForm from './RideReqForm';
const { REACT_APP_SERVER_URL } = process.env;

const JourneyOrRideForm = () => {
    const [driver, setDriver] = useState();

    const handleChange = (e) => {
        setDriver(e.target.value)
    }

    if (driver === true) {
        form = <JourneyForm/>
    } else {
        form = <RideReqForm/>
    }

    return (
        <div>
            <div className='form-group'>
                <select class="custom-select" onChange={handleChange}>
                    <option value={true}>Driver</option>
                    <option value={false}>Passenger</option>
                </select>
            </div>
            <div>
                {form}
            </div>
        </div>
    )
}

export default JourneyOrRideForm;