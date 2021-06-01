import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import calculateFuelConsumption from '../utils/calculateFuelConsumption';
import calculateTime from '../utils/calculateTime';

export default function Results(props) {
    const [time, setTime] = useState([])
    const [consumption, setConsumption] = useState()

    useEffect(() => {
        const getTime = () => {
            let currentTime = calculateTime(props.speed, props.distance)
            setTime(currentTime)
        }

        const getConsumption = () => {
            let currentConsumption = calculateFuelConsumption(props.speed, props.distance, props.car.consumption)
            setConsumption(currentConsumption)  
        }
        getConsumption()
        getTime()
    }, [props])

    return (
        <div>
            {props.distance ? <div className='results'>
                    <div className='consumptionResults'>
                        <Typography 
                            variant="h6"
                            color='secondary'>
                            Polttoaineen kulutus: <br></br>
                            {props.speed[1]} km/h : {consumption[1].consumption} litraa <br></br> 
                            {props.speed[0]} km/h : {consumption[0].consumption} litraa <br></br> 
                            Erotus : {consumption[2].difference} litraa<br></br>
                        </Typography>
                    </div>
                        <div className='timeResults'>
                            <Typography 
                                variant="h6"
                                color='secondary'>
                                Matka-aika: <br></br>
                                {props.speed[1]} km/h : {time[1].time} tuntia <br></br> 
                                {props.speed[0]} km/h : {time[0].time} tuntia <br></br> 
                                Erotus: {time[2].difference} minuuttia
                            </Typography>
                        </div>
                    </div>
                
            : 
                <Typography 
                    variant="h6"
                    color='secondary'>
                    Valitse vielä matka
                </Typography>}
        </div>
        
    )
}





