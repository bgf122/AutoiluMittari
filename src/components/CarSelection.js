import { ButtonGroup, 
    Button,  
    Typography } from '@material-ui/core';
import { carTypes } from '../data/carTypes';
import React from 'react';
import '../App.css'

export default function CarSelection(props) { 
    const changeCar = (index) => {
        props.setCar(carTypes[index])
    }

    return (
        <div className='carSelection'>
            <Typography 
                variant="h6"
                color='secondary'>
                Valitse auto
            </Typography>
            <div className='carButtons'>
                <ButtonGroup variant="contained" color="primary">
                    {carTypes.map((car, index) => <Button key={index} onClick={() => changeCar(index)}>Auto: {car.car} <br></br>Kulutus: {car.consumption} l/100 km</Button>)}
                </ButtonGroup>
            </div>
        </div>
    )
}
