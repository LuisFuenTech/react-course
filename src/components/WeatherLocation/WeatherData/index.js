import React from 'react'
import PropTypes from 'prop-types'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'

import './style.css'

const WeatherData = ({ data }) => {
    const { temperature, WeatherState, humidity, wind } = data

    return (
    <div className="weatherDataCont">
        <div> <WeatherTemperature temperature={temperature} state={WeatherState} /> </div>
        <div> <WeatherExtraInfo humidity={humidity} wind={wind} /> </div>
    </div>)
}

WeatherData.protoType = {
    data: PropTypes.shape({
        temperature: PropTypes.string.isRequired,
        WeatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherData   