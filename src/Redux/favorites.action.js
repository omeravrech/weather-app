export const ADD        = "ADD"
export const REMOVE     = "REMOVE"
export const DELETE_ALL = "DELETE_ALL"

export const addToFavorite = (city) => {
    return {
        type: ADD,
        payload: city
    }
}

export const removeFromFavorite = (cityKey) => {
    return {
        type: REMOVE,
        payload: cityKey
    }
}

export const clearList = () => {
    return {
        type: DELETE_ALL
    }
}