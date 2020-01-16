import { ADD, REMOVE, DELETE_ALL } from './favorites.action';

export const favoriteList = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return [...state, action.payload];
        case REMOVE:
            return state.filter((city) => { return city.Key !== action.payload })
        case DELETE_ALL:
            return [];
        default:
            return state;
    }
}