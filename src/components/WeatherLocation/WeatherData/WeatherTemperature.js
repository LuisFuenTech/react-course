import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import './style.css'
import {CLOUD,
        CLOUDY,
        SUN,
        RAIN,
        SNOW,
        WINDY,
        THUNDER,
        DRIZZLE} from '../../../constanst/weathers'

const stateToIconName = (state) => {
    switch(state){
        case CLOUD: return "cloud"
        case CLOUDY: return "cloudy"
        case SUN: return "day-sunny"
        case RAIN: return "rain"
        case SNOW: return "snow"
        case WINDY: return "windy"
        case THUNDER: return "day-thunderstorm"
        case DRIZZLE: return "day-showers"
        default: return "day-sunny"
    }
}

const getWeatherIcon = (state) => {
    return(
        <WeatherIcons className="wicon" name={stateToIconName(state)} size="4x" />
    )
}

const WeatherTemperature = ({temperature, state}) => (
            <div className="weatherTemperatureCont">
                {getWeatherIcon(state)}
                <span className="temperature"> {`${temperature}`} </span>
                <span className="temperaturetype">°C</span>
            </div>
)

//Validar los valores de las propiedades
WeatherTemperature.propTypes = {
    temperature: PropTypes.string.isRequired,
    state: PropTypes.string
}
export default WeatherTemperature