import React, { useEffect, useState } from 'react'
import axios from 'axios'

const { REACT_APP_API_KEY } = process.env;



const ShowVehicle = (props) => {
    const [results, setResults] = useState('');
    console.log(props.vehicle)
    useEffect(() => {
        console.log('this is make', props.vehicle.make)
        console.log('this is model', props.vehicle.model)
        console.log('this is year', props.vehicle.year)
        axios.get(`https://cdn.imagin.studio/getImage?&customer=${REACT_APP_API_KEY}&make=${props.vehicle.make}&modelFamily=${props.vehicle.model}&modelYear=${props.vehicle.year}&trim=0&paintId=pspc0004&angle=01&zoomType=fullScreen&width=400`)
    .then(response =>{
    //   setResults(response.config.url);
        setResults(response.config.url);
        console.log(response.config.url);
        })
        .catch(error => console)
    }, []);
    
  return (
    <div>
        <img src={results} alt="" />
    </div>
  )
}

export default ShowVehicle