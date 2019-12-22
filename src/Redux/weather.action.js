import axios from '../API/AccuWeather'

export const FETCH_CITY_INFO = 'FETCH_CITY_INFO';
export const FETCH_CITY_DATA = 'FETCH_CITY_DATA';

export const fetch_city_info = (cityName) => {
    return {
        type: FETCH_CITY_INFO,
        payload: axios.get(`/locations/v1/cities/search`, {params: {q: cityName }})
    }
}

export const fetch_forecast = (cityKey) => {
    return {
        type: FETCH_CITY_DATA,
        payload: Promise.all([
            axios.get(`/currentconditions/v1/${cityKey}`, {params: {details: true }}),
            axios.get(`/forecasts/v1/daily/5day/${cityKey}`, {params: {metric: true }})
        ])
    }
}