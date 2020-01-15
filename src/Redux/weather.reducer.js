import { 
    UPDATE_CITY, 
    UPDATE_CURRENT,
    UPDATE_WEATHER,
    FETCH_CITY_ERROR,
    INIT_DATA
 } from './weather.action';

import fakeData from '../fakeData'

const initValues = {
    city_data: fakeData.city[0],
    city_weather: fakeData.city_current_status[0],
    forecast: fakeData.forecast.DailyForecasts
}

export const weather = (state = initValues, action) => {
    switch(action.type) {
        case UPDATE_CITY:
            return Object.assign({}, state,
                {
                    city_data: action.payload,
                    city_weather: undefined,
                    forecast: []
                }
            );
        
        case UPDATE_CURRENT:
            return Object.assign({}, state,
                { city_weather: action.payload }
            );
        
        case UPDATE_WEATHER:
            return Object.assign({}, state,
                { forecast: action.payload }
            );

        case FETCH_CITY_ERROR:
        case INIT_DATA:
            return initValues;

        default:
            return state; 
    }
}