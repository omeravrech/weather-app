const searchCityName = (searchString) => {
    return {
        type: 'SEARCH_CITY_NAME',
        searchString
    }
}

export {
    searchCityName
}