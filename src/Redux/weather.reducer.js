import { 
    UPDATE_CITY, 
    UPDATE_CURRENT,
    UPDATE_WEATHER,
    FETCH_CITY_ERROR,
 } from './weather.action';

const initValues = {
    city_data: undefined,
    city_weather: undefined,
    forecast: []
}

export const weather = (state = initValues, action) => {
    switch(action.type) {
        case UPDATE_CITY:
            return  {
                city_data: action.payload,
                city_weather: undefined,
                forecast: []
            }

        case UPDATE_CURRENT:
            return Object.assign({}, state,
                { city_weather: action.payload }
            );
        
        case UPDATE_WEATHER:
            return Object.assign({}, state,
                { forecast: action.payload }
            );

        case FETCH_CITY_ERROR:
            return initValues;

        default:
            return state; 
    }
}