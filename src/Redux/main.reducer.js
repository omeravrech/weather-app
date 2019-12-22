import { combineReducers } from 'redux';
import { fetch_city_data,
    fetch_forecast } from './weather.reducer';

const rootReducer = combineReducers({
    fetch_city_data,
    fetch_forecast
})

export default rootReducer;