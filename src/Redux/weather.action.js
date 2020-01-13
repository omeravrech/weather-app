import AccuWeatherAPI from '../api/AccuWeather';

export const GET_CITY_DATA = 'GET_CITY_DATA';
export const GET_WEATHER = 'GET_WEATHER';

export const FETCH_CITY_DATA = (cityName) => {
    return {
        type: GET_CITY_DATA,
        payload: cityName
    }
}
export const FETCH_GET_WEATHER = (cityKey) => {
    return {
        type: GET_WEATHER,
        payload: cityKey
    }
}
//GET: /locations/v1/cities/search?q={city_name} 
//GET: /currentconditions/v1/{cityKey}?details=true
//GET: /forecasts/v1/daily/5day/{cityKey}?metric=true


