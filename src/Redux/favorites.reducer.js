import { ADD, REMOVE, DELETE_ALL } from './favorites.action';

import fakeData from '../fakeData';

export const favoriteList = (state = fakeData.favList, action) => {
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