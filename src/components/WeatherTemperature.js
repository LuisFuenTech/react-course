import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import {CLOUD,
        CLOUDY,
        SUN,
        RAIN,
        SNOW,
        WINDY} from '../constanst/weathers'

const stateToIconName = (state) => {
    switch(state){
        case CLOUD: return "cloud"
        case CLOUDY: return "cloudy"
        case SUN: return "day-sunny"
        case RAIN: return "rain"
        case SNOW: return "snow"
        case WINDY: return "windy"
        default: return "day-sunny"
    }
}

const getWeatherIcon = (state) => {
    return(
        <WeatherIcons name={stateToIconName(state)} size="2x" />
    )
}

const WeatherTemperature = ({temperature, state}) => (
            <div>
                {getWeatherIcon(state)}
                <span> {`${temperature}`} </span>
            </div>
    )

//Validar los valores de las propiedades
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.string
}
export default WeatherTemperature