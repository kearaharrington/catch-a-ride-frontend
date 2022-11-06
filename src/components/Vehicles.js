import React, { useState, useEffect } from 'react';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;


function Vehicles() { 
    const [vehicle, setVehicle] = useState('');
    
    
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
        axios.get(`${REACT_APP_SERVER_URL}/vehicles/vehicle/635d9cba511ddd6650a0a635`)
        .then(vehicles => {
            if (vehicles) {
                setVehicle(vehicles.data);
            }else {
                setVehicle('erroR');
            }
            
        })
    }, [])
    console.log(vehicle)
    // const vehicleBoard = vehicle.map((v, idx) => {
    //     return (
    //         <div id={idx}>
    //             <h2>
    //                 {v.title}
    //             </h2>
    //             <p>
    //                 {v.content}
    //             </p>
    //         </div>
    //     )
    // })
    return (
        <div>
            
            {vehicle.vehicle.make}
        </div>
        
    ) 
}


export default Vehicles;