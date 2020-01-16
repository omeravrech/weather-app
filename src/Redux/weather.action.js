import AccuWeatherAPI from '../api/AccuWeather';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const UPDATE_CITY = 'UPDATE_CITY';
export const UPDATE_CURRENT = 'UPDATE_CURRENT';
export const UPDATE_WEATHER = 'UPDATE_WEATHER';
export const FETCH_CITY_ERROR = 'FETCH_CITY_ERROR';

export const fetchWeatherByName = (cityName) => {
    return (dispatch) => {
        AccuWeatherAPI.get('/locations/v1/cities/search', {
            params: {
                q: cityName
            }
        }).then(response => {
            if (response.status !== 200) {
                    throw Error(response.statusText);
            } else if (response.data.length !== 1) {
                throw Error("Too many options.");
            } else {
                dispatch(updateCity(response.data[0]))

                return Promise.all([
                    AccuWeatherAPI.get(`/currentconditions/v1/${response.data[0].Key}?details=true`).catch((err) => { return {status: -1 } }),
                    AccuWeatherAPI.get(`/forecasts/v1/daily/5day/${response.data[0].Key}?metric=true`).catch((err) => { return {status: -1 } })
                ])
            }
        }).then(responses => {
            const [currentResponse , forecastResponse] = responses;
            if (currentResponse.status === 200) { 
                dispatch(updateCurrent(currentResponse.data[0]))
            }
            if (forecastResponse.status === 200) {
                dispatch(updateWeather(forecastResponse.data.DailyForecasts))
            }
        }).catch(() => dispatch(fetchCityError()))
    }
}

export const fetchWeatherByObject = (data) => {
    return (dispatch) => {
        if (data === null || !data.Key) {
            dispatch(fetchCityError())
        } else {
            dispatch(updateCity(data))
            const { Key } = data;
            Promise.all([
                AccuWeatherAPI.get(`/currentconditions/v1/${Key}?details=true`).catch(() => { return {status: -1 } }),
                AccuWeatherAPI.get(`/forecasts/v1/daily/5day/${Key}?metric=true`).catch(() => { return {status: -1 } })
            ]).then(responses => {
                const [currentResponse , forecastResponse] = responses;
                if (currentResponse.status === 200) { 
                    dispatch(updateCurrent(currentResponse.data[0]))
                }
                if (forecastResponse.status === 200) {
                    dispatch(updateWeather(forecastResponse.data.DailyForecasts))
                }
            }).catch((err) => { console.log(err) });
        }
    }
}

 
export const updateCity = (data) => {
    return {
        type: UPDATE_CITY,
        payload: data
    }
}
export const updateCurrent = (data) => {
    return {
        type: UPDATE_CURRENT,
        payload: data
    }
}
export const updateWeather = (data) => {
    return {
        type: UPDATE_WEATHER,
        payload: data
    }
}
export const fetchCityError = () => {
    return {
        type: FETCH_CITY_ERROR
    }
}