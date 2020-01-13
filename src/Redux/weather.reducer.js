import { GET_WEATHER, GET_CITY_DATA } from './weather.action';

import fakeData from '../fakeData';

const initValues = {
    city_data: fakeData.city[0],
    city_weather: fakeData.city_current_status[0],
    forecast: []
}

export const weather_data = (state = initValues, action) => {
    switch(action.type) {
        case GET_CITY_DATA:
            console.log(" GET_CITY_DATA");
            return Object.assign({}, state);
        
        case GET_WEATHER:
            console.log("GET_WEATHER");
            return Object.assign({}, state);
        
        default:
            return state; 
    }
}