import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import transforWeather from './../../services/transformWeather'
import { SNOW, WINDY } from '../../constanst/weathers'
import './style.css'

const location = 'Palmira,CO'
const api_key = '3d6cd125378775c60293616c9a4cebc0'
const url_api = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`

const data1 = {
    city: 'Cartagena',
    temperature: '20',
    WeatherState: SNOW,
    humidity: '75 %',
    wind: '5 m/s'
}

class WeatherLocation extends Component {
    constructor() {
        super()
        this.state = {
            data: data1
        }
    }

    handleUpdateClick = () => {
        fetch(url_api)
            .then((res) => {
                return res.json()
            })
            .then((data_api) => {
                const data = transforWeather(data_api)
                this.setState({data})
            })
            .catch((err) => {
                console.log({error: err})
            })
    }

    render = () => {        
        const { data } = this.state
        return (
            <div className="weatherLocation">
                <Location city={data.city} />
                < WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>)
    }
}

//Unique exportation from this file
export default WeatherLocation;
