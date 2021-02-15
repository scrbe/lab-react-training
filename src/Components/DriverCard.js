import React from 'react';
import Ratings from './Ratings'

function DriverCard({ name, ratings, car:{model, licensePlate}, img }) {
    return <div>
        <h2> {name} </h2>
        <p>model: {model} </p>
        <p>license plate: {licensePlate} </p>
        <img src={img} alt={name}></img>
        <Ratings> 2.2</Ratings>
        </div>
}

export default DriverCard
