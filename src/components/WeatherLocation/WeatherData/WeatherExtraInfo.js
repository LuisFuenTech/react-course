import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <span className ="extraInfoText"> {`Humidity: ${humidity}`} </span>
        <span className ="extraInfoText"> {`Winds: ${wind}`} </span> 
    </div>
)

WeatherExtraInfo.protoType = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string
}

export default WeatherExtraInfo