//import convert from 'convert-units'
import {
            CLOUDY,
            SUN,
            RAIN,
            SNOW,
            THUNDER,
            DRIZZLE
        } from './../constanst/weathers'
/*
const getTemp = (kelvin) => {
    return convert(kelvin).from('K').to('C').toFixed(2)
}*/

const getWeatherState = (weather) => {
    const {id} = weather[0]

    if(id < 300){
        return THUNDER
    }
    else if(id < 400){
        return DRIZZLE
    }
    else if(id < 600){
        return RAIN
    }
    else if(id < 700){
        return SNOW
    }
    else if(id === 800){
        return SUN
    }
    else{
        return CLOUDY
    }
}

const transformWeather = (data_api) => {
    const {weather} = data_api
    const { humidity, temp} = data_api.main
    const {speed} = data_api.wind
    const {name} = data_api
    const WeatherState = getWeatherState(weather)
    const temperature = `${temp}`

    const data = {
        city: name,
        humidity: `${humidity} %`,
        temperature,
        wind: `${speed} m/s`,
        WeatherState
    }

    return data
}

export default transformWeather