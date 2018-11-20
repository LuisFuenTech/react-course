import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'

const WeatherData = () => (
    <div>
        <div> <WeatherTemperature temperature= {`${24}°C`} /> </div>
        <div> <WeatherExtraInfo humidity ={`${75}% h`} wind = {`${5} m/s`} /> </div>
    </div>
)

export default WeatherData   