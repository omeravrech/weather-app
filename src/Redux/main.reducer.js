import { combineReducers } from 'redux';
import { weather } from './weather.reducer';
import { favoriteList } from './favorites.reducer';

const rootReducer = combineReducers({
    weather,
    favoriteList,
    monitor: (state= [], action) => { console.log("Action called =>", action.type, action.payload); return state; }
})

export default rootReducer;