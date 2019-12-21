import { combineReducers } from 'redux';
import { fetch_city_data } from './weather.reducer';

const rootReducer = combineReducers({
    fetch_city_data,
    default: (state = {}, action) => {console.log("Monitor: Action", action.type, "been lunched"); return state;}
})

export default rootReducer;