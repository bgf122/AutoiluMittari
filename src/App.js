import { Typography } from '@material-ui/core';
import CarSelection from './components/CarSelection';
import CustomSlider from './components/CustomSlider';
import Results from './components/Results';
import React, { useState } from 'react';

export default function App() {
  const [speed, setSpeed] = useState([80, 100])
  const [distance, setDistance] = useState(0)
  const [car, setCar] = useState(undefined)

  return (
    <div className='container'>
      <div className='calcWrapper'>
        <div className='appBar'>
          <div className='toolBar'>
            <Typography variant="h6">Autoilumittari</Typography>
          </div>
        </div>
        <CarSelection 
          setCar={setCar}/> 
        {car ? 
        <CustomSlider
          speed={speed}
          setSpeed={setSpeed}
          distance={distance}
          setDistance={setDistance}/>
        : <div></div>}      
        {car ? 
          <Results
            distance={distance}
            speed={speed}
            car={car}/>
          : <div></div>}
      </div>
    </div>
  );
}

