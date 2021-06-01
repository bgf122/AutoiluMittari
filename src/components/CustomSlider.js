import React from 'react';
import { Slider,  
    Typography } from '@material-ui/core';
import { distanceMarks, speedMarks } from '../data/marks'
import '../App.css';

export default function CustomSlider(props) {
    const changeDistance = (event, value) => {
        props.setDistance(value)
    }
    
    const changeSpeed = (event, value) => {
        props.setSpeed(value)
    }

    const changeCommitted = () => {
    }
    
    return (
        <div className='sliderContainer'>
            <div className='speedSlider'>
                <Typography 
                    variant="h6"
                    color='secondary'>
                    Nopeus
                </Typography>
                <Slider
                    max={150}
                    min={1}
                    step={1}
                    marks={speedMarks}
                    valueLabelDisplay='auto'
                    value={props.speed}
                    onChange={changeSpeed}
                    onChangeCommitted={changeCommitted}> 
                </Slider>
            </div>
            <div className='distanceSlider'>
                <Typography 
                    variant="h6"
                    color='secondary'>
                    Matka
                </Typography>
                <Slider
                    max={1000}
                    step={1}
                    marks={distanceMarks}
                    valueLabelDisplay='auto'
                    value={props.distance}
                    onChange={changeDistance}
                    onChangeCommitted={changeCommitted}> 
                </Slider>
            </div>
        </div>
    )
}
