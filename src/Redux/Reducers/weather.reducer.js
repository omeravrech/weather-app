import { FETCH_CITY_INFO, FEATH_CURRENT_CITY_WEATHER } from '../Actions/weather.action';

export const fetch_city_data = (state = [], action) => {

    switch(action.type) {
        case FETCH_CITY_INFO:
            return action.payload.data;
        default:
            return state;
    }
}