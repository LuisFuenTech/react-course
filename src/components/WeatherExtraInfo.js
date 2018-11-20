import React from 'react'

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <spa> {humidity + ' - '} </spa>
        <spa> {wind + ' wind'} </spa> 
    </div>
)

export default WeatherExtraInfo