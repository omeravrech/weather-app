import { FETCH_CITY_INFO, FETCH_CITY_DATA } from './weather.action';

export const fetch_city_data = (state = {city: [], flag: false}, action) => {
    switch(action.type) {

        case FETCH_CITY_INFO:
            return {
                city: action.payload.data || [],
                flag: true
            } 
        default:
            return {
                city: state.city,
                flag: false
            }
    }
}
export const fetch_forecast = (state = {current_status: [], forecast: [] }, action) => {
    if (action.type === FETCH_CITY_DATA) {
        const current_status = action.payload[0] || { data: []}
        const forecast = action.payload[1] || { data: []}
        return {
            current_status: current_status.data,
            forecast: forecast.data
        }
    } else {
        return state;
    }
}