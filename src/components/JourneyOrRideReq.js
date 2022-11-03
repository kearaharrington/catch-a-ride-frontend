// Imports
import React, { useState } from 'react';
import axios from 'axios';
import JourneyForm from './JourneyForm';
import RideReqForm from './RideReqForm';
const { REACT_APP_SERVER_URL } = process.env;

const JourneyOrRideForm = (props) => {
    // const [driver, setDriver] = useState(props.user.driver);
    const [driver, setDriver] = useState();
    // const [form, setForm] = useState();
    let form;

    const handleChange = (e) => {
        console.log(e.target.value);
        setDriver(e.target.value)
    }

    // if (driver === true) {
    //     form = <JourneyForm/>
    // } else {
    //     form = <RideReqForm/>
    // }

    return (
        <div>
            <div className='form-group'>
                <select className="custom-select" onChange={handleChange}>
                    <option value={true}>Driver</option>
                    <option value={false}>Passenger</option>
                </select>
            </div>
            <div>
                {driver == true? <JourneyForm/> : <RideReqForm/>}
            </div>
        </div>
    )
}

export default JourneyOrRideForm;