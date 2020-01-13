import React from 'react';
import { connect } from 'react-redux'

const CurrentDisplay = (props) => {
    const { current_status } = props;

    return(
        <div className="ui middle aligned grid">
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

const mapStateToProps = (appState) => {
    return {
        current_status: appState.weather_data.city_weather,
    }
}

export default connect(mapStateToProps, null)(CurrentDisplay);
