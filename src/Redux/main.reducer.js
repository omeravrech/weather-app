import { combineReducers } from 'redux';
import { weather } from './weather.reducer';
import { favoriteList } from './favorites.reducer';

const rootReducer = combineReducers({
    weather,
    favoriteList,
})

export default rootReducer;