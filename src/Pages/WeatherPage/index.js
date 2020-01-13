import React from 'react';
import { connect } from 'react-redux';

import Forecast from './Forecast.component';
import CurrentDisplay from './CurrentDisplay.component';


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const twoDigitDisplay = (num) => { if (num < 10) return "0" + num; else return num}

const WeatherPage = (props) => {
    const { city,
            current_status,
        } = props.weather;
        const currentTime = new Date(current_status.LocalObservationDateTime);

    return (
        <div className="ui grid">
            <div className="one column row">
                <div className="column">
                    <span className="city-name">{city.EnglishName}</span>
                </div>
            </div>
            <div className="one column row">
                <div className="column">
                    <span className="city-location">
                        {`${days[currentTime.getDay()]}, `}
                        {twoDigitDisplay(currentTime.getHours())}:
                        {twoDigitDisplay(currentTime.getMinutes())}:
                        {twoDigitDisplay(currentTime.getSeconds())}
                    </span>
                </div>
                <div className="column">
                    <span className="city-location">
                        {city.AdministrativeArea.EnglishName + ", " + city.Country.EnglishName}
                    </span>
                </div>
            </div>
            <div className="one column row">
                <div className="column">
                    <CurrentDisplay />
                </div>
            </div>
            <div className="one column row">
                <div className="column">
                    <Forecast />
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (appState) => {
    return {
        weather: {
            city: appState.weather_data.city_data,
            current_status: appState.weather_data.city_weather,
        }
    }
}

export default connect(mapStateToProps, null)(WeatherPage);