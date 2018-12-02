import React, { Component} from 'react'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location'
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather'
import './style.css'

const api_key = '3d6cd125378775c60293616c9a4cebc0'
const url = 'http://api.openweathermap.org/data/2.5/weather'

class WeatherLocation extends Component {
    constructor({city}) {
        super()
        this.state = {
            city,
            data: null
        }
    }

    getApiData = () => {
        
    }

    handleUpdateClick = () => {
        const api_weather = `${url}?q=${this.state.city}&appid=${api_key}&units=metric`
        fetch(api_weather)
            .then((res) => {
                return res.json()
            })
            .then((data_api) => {
                const data = transformWeather(data_api)
                this.setState({ data })
            })
            .catch((err) => {
            })
    }

    componentWillMount = () => {        
        this.handleUpdateClick()
    }

    render = () => {
        const {onWeatherLocationClick} = this.props
        const { city, data } = this.state
        return (
            <div className="weatherLocation" onClick = {onWeatherLocationClick}>
                <Location city={city} />
                {data ?  <WeatherData data={data} /> : 
                <CircularProgress size={60} thickness={7} />}
            </div>)
    }
}

WeatherLocation.protoType = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

//Unique exportation from this file
export default WeatherLocation;
