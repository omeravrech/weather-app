import axios from '../../api/AccuWeather'

export const FETCH_CITY_INFO = 'FETCH_CITY_INFO';
export const FEATH_CURRENT_CITY_WEATHER = 'FEATH_CURRENT_CITY_WEATHER';
export const FEATH_CITY_WEATHER = 'FEATH_CITY_WEATHER';

export const fetch_city_info = (city) => {
    return {
        type: FETCH_CITY_INFO,
        payload: axios.get(`/locations/v1/cities/search`, {
            params: {
                q: city,
            }
        })
    }
}

export const fetch_city_current_status = (cityCode) => {
    return {
        type: FEATH_CURRENT_CITY_WEATHER,
        payload: axios.get(`/currentconditions/v1/${cityCode}`, {
            params: {
                q: cityCode
            }
        })
    }
}

export const fetch_city_status = (cityCode) => {
    return {
        type: FEATH_CITY_WEATHER,
        payload: axios.get(`/forecasts/v1/daily/5day/${cityCode}`, {
            params: {
                q: cityCode
            }
        })
    }
}
