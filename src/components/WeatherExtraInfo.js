import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <WeatherIcons name="day-sleet" size="2x" />
        <span> {humidity} </span>

        <WeatherIcons name="strong-wind" size="2x" />
        <span> {wind + ' wind'} </span> 
    </div>
)

WeatherExtraInfo.protoType = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string
}

export default WeatherExtraInfo