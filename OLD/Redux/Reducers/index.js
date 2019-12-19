import { compbinedReducers, combineReducers } from 'redux';

const selectedCityReducer = (selectedCity = null, action) => {
    if (action.type === 'SEARCH_CITY_NAME') {
        
    }
}

export default combineReducers({
    selectedCity: selectedCityReducer
})