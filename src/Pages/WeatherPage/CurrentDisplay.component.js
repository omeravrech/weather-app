import React from 'react';
import { connect } from 'react-redux'


const twoDigitDisplay = (num) => { if (num < 10) return "0" + num; else return num};
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const CurrentDisplay = (props) => {
    const { current_status } = props;
    if (!(current_status) || (typeof(current_status) !== "object") || Array.isArray(current_status) || Object.keys(current_status).length === 0) {
        return (
            <div className="ui middle aligned grid">
                <div className="one column row">
                    <div className="column">
                        <div className="ui placeholder">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        );

    } else {
        const currentTime = new Date(current_status.LocalObservationDateTime);
        return(
            <div className="ui middle aligned grid">
                <div className="sixteen wide column">
                    <span className="city-location">
                        { `${days[currentTime.getDay()]}, ` }
                        { twoDigitDisplay(currentTime.getHours()) }:
                        { twoDigitDisplay(currentTime.getMinutes()) }:
                        { twoDigitDisplay(currentTime.getSeconds()) }
                    </span>
                </div>
                <div className="five wide column">
                    <span className="temperature-number">{parseInt(current_status.RealFeelTemperature.Metric.Value)}</span>
                    <span className="temperature-unit">°{current_status.RealFeelTemperature.Metric.Unit}</span>
                </div>
                <div className="eleven wide column">
                    <div className="ui grid">
                        <div className="one column row">
                            <div className="column">
                                <span className="city-weather">Wind: </span>
                                <span className="city-weather">{current_status.Wind.Speed.Metric.Value} {current_status.Wind.Speed.Metric.Unit}</span>
                            </div>
                            <div className="column">  
                                <span className="city-weather">Humidity: </span>
                                <span className="city-weather">{current_status.RelativeHumidity} %</span>
                            </div>
                            <div className="column">  
                                <span className="city-weather">Precipitation: </span>
                                <span className="city-weather">{current_status.PrecipitationSummary.Precipitation.Metric.Value}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

    
}

const mapStateToProps = (appState) => {
    return {
        current_status: appState.weather.city_weather,
    }
}

export default connect(mapStateToProps, null)(CurrentDisplay);
