import React, { useState, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import ShowVehicle from './ShowVehicle';
import '../css/Vehicle.css'
const { REACT_APP_SERVER_URL } = process.env;
const { REACT_APP_API_KEY } = process.env;


function Vehicles(props) { 
    const [vehicle, setVehicle] = useState([]);
    const [results, setResults] = useState('');
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

    

    ////////////////// YOUR GOING TO HAVE TO MAKE A NEW COMPONENT FOR
    // useEffect(() => {
        // axios.get(`https://cdn.imagin.studio/getImage?&customer=${REACT_APP_API_KEY}&make=${v.make}&modelFamily=${v.model}&modelYear=&trim=0&paintId=pspc0004&angle=01`)
        // .then(response =>{
        // //   setResults(response.config.url);
        // setResults(response.config.url);
        // console.log(response.config.url);
        // })
        // .catch(error => console.log('ERROR', error));
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
                <p>
                    {/* the model goes below this */}
                    {v.model}
                </p>
                <div className='side-by-side'>
                    <ShowVehicle make={v.make} model={v.model} year={v.year}/>
                    <button type='button' id='edit-vehicle-button' className='glow-on-hover'>Edit Vehicle</button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    })
    return (
        <div>
            {/* {vehicle[0].make} */}
            {/* {vehicleBoard2} */}
            <div>
                My Vehicles:
            </div>
            {vehicleBoard}
        </div>
        
    ) 
}


export default Vehicles;