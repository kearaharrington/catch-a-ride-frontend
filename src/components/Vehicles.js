import React, { useState, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;


function Vehicles(props) { 
    const [vehicle, setVehicle] = useState([]);
    // setVehicle(props.user.vehicle);
    
    // useEffect(() => {
    //     axios.get(`${REACT_APP_SERVER_URL}/vehicles/vehicle/635d9cba511ddd6650a0a635`)
    //     .then(vehicles => {
    //         if (vehicles.data) {
    //             setVehicle(vehicles.data);
    //         }else {
    //             setVehicle('error');
    //         }
            
    //     })
    // }, [])


    useEffect(() => {
        setAuthToken(localStorage.getItem('jwtToken'));
        axios.get(`${REACT_APP_SERVER_URL}/users/profile`)
        .then(res => {
            console.log(res.data);
            setVehicle(res.data.vehicle);
            // if (vehicles) {
            //     // setVehicle(vehicles.data);
            //     setVehicle( arr => [...arr, `${vehicles.data.vehicle}`]);
            //     console.log(vehicles.data)

            // }else {
            //     setVehicle('erroR');
            // }
            
        })
    }, [])
    // console.log('Vehicle variable is this:', vehicle)
    // console.log(vehicle[0])
    console.log(vehicle);
    const vehicleBoard = vehicle.map((v, idx) => {
        return (
            <div key={idx}>
                <h2>
                    {/* The make goes below this */}
                    {v.make}
                </h2>
                <br />
                <p>
                    {/* the model goes below this */}
                    {v.model}
                </p>
            </div>
        )
    })
    return (
        <div>
            {/* {vehicle[0].make} */}
            {/* {vehicleBoard2} */}
            {vehicleBoard}
        </div>
        
    ) 
}


export default Vehicles;