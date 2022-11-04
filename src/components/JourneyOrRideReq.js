// Imports
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import JourneyForm from './JourneyForm';
import RideReqForm from './RideReqForm';
// const { REACT_APP_SERVER_URL } = process.env;

const JourneyFormContainer = (props) => {
    const [form, setForm] = useState(props.driver === true? <JourneyForm/> : <RideReqForm/>);
    const [driver, setDriver] = useState(props.driver);

    // useEffect(() => {if (props.driver === false) {
    //     setForm(<RideReqForm/>)
    // }}, [])
    const handleChange = (e) => {
        console.log(e.target.value);
        setDriver(e.target.value)
        // driver = e.target.value;
    }
    
    return (
        <div>
            {props.driver}
            <div className='form-group'>
                <select className="custom-select" onChange={handleChange}>
                    <option value={true}>Driver</option>
                    <option value={false}>Passenger</option>
                </select>
            </div>
            <div>
                {/* {props.driver === true? <JourneyForm/> : <RideReqForm/>} */}
                {form}
            </div>
        </div>
    )
}

const JourneyOrRideForm = (props) => {
    // const [driver, setDriver] = useState(props.user.driver);
    const [driver, setDriver] = useState(true);
    // const [form, setForm] = useState();
    // let form;
    // let driver = true;

    return (
        <div>
            <div>
                <JourneyFormContainer driver={driver}/>
            </div>
        </div>
    )
}

export default JourneyOrRideForm;