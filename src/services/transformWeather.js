import convert from 'convert-units'
import { SNOW, WINDY } from '../constanst/weathers'

const getTemp = (kelvin) => {
    return convert(kelvin).from('K').to('C').toFixed(2)
}

const getWeatherState = (weather) => {
    return WINDY
}

const transformWeather = (data_api) => {
    const { humidity, temp } = data_api.main
    const {speed} = data_api.wind
    const {name} = data_api
    const WeatherState = getWeatherState(data_api.weather.main)
    const temperature = `${getTemp(temp)}`

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