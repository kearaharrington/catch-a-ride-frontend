import React, { useEffect, useState } from 'react'
import axios from 'axios'

const { REACT_APP_API_KEY } = process.env;



const ShowVehicle = (props) => {
    const [results, setResults] = useState('');

    useEffect(() => {
        axios.get(`https://cdn.imagin.studio/getImage?&customer=${REACT_APP_API_KEY}&make=${props.make}&modelFamily=${props.model}&modelYear=${props.year}&trim=0&paintId=pspc0004&angle=01&zoomType=fullScreen&width=400`)
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