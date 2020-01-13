import { combineReducers } from 'redux';
import { weather_data } from './weather.reducer';

const rootReducer = combineReducers({
    weather_data
})

export default rootReducer;