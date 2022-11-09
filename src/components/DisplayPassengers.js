// import React, { useEffect, useState } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import axios from 'axios';
// import setAuthToken from '../utils/setAuthToken';
// // import JourneyDetails from './JourneyDetails';
// const { REACT_APP_SERVER_URL } = process.env;

// const DisplayPassengers = (props) => {
//     const { passengers, setPassengers } = props;

//     const removePassenger = (e) => {
//         e.preventDefault();
//         const passenger = id
//         axios.delete(`${REACT_APP_SERVER_URL}/journeys/passengers/remove`, passenger)
//             .catch(error => console.log('===> Error in remove passengers', error));
//     };

//     const allPassengers = passengers.map((passenger,idx) => {
//         return (
//             <li key={idx} id={passenger._id}>{passenger.firstName} {passenger.lastName} <button onclick={removePassenger}>Remove</button></li>
//         )
//     })

//     return (
//         <div>
//             <ul>
//                 {allPassengers}
//             </ul>
//         </div>
//     )
// }

// export default DisplayPassengers;