// Imports
import React, { useState } from 'react';
import JourneyForm from './JourneyForm';
import RideReqForm from './RideReqForm';

const JourneyOrRideForm = () => {
    const [driver, setDriver] = useState(true);

    const handleChange = (e) => {
        setDriver(!driver)
    }
        
    return (
        <div>
            {driver}
            <div className='form-group'>
                <select className="custom-select" onChange={handleChange}>
                    <option>Driver</option>
                    <option>Passenger</option>
                </select>
            </div>
            <div>
                {driver === true ?  <JourneyForm/> : <RideReqForm/>}
            </div>
        </div>
    )
}

export default JourneyOrRideForm;