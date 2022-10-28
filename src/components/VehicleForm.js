// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const { REACT_APP_SERVER_URL } = process.env;

const Vehicle = (props) => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [seats, setSeats] = useState('');
    const [year, setYear] = useState('');
    const [user, setUser] = useState('');
    const [redirect, setRedirect] = useState(false);

setUser(props.user.token);

    const handleMake = (e) => {
        setMake(e.target.value);
    }

    const handleModel = (e) => {
        setModel(e.target.value);
    }

    const handleSeats = (e) => {
        setSeats(e.target.value);
    }

    const handleYear = (e) => {
        setYear(e.target.value);
    }

   function handleSubmit() {
    const newVehicle = {make, model, seats, year, user}
    axios.post(`${REACT_APP_SERVER_URL}/vehicle/register`, newVehicle)
    .then(response => {
        console.log('===> Yay, new user');
        console.log(response);
        setRedirect(true);
    })
    .catch(error => console.log('===> Error in Signup', error));
   }
   if (redirect) return <Redirect to="/profile" />
    return (
        <div className="row mt-4">
        <div className="col-md-7 offset-md-3">
            <div className="card card-body">
                <h2 className="py-2">Add Vehicle</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="make" value={make} onChange={handleMake} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="model">Model</label>
                        <input type="text" name="model" value={model} onChange={handleModel} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="seats">Seats</label>
                        <input type="number" name="seats" value={seats} onChange={handleSeats} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input type="number" name="year" value={year} onChange={handleYear} className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                </form>
            </div>
        </div>
    </div>

    )
}

export default Vehicle;
