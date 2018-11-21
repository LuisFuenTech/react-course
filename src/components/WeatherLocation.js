import React from 'react'
import Location from './Location'
import WeatherData from './WeatherData'

const WeatherLocation = () => (
    <div>
        <Location city = {'Cartagena'} />
        < WeatherData />
    </div>
)

//Unique exportation from this file
export default WeatherLocation;
