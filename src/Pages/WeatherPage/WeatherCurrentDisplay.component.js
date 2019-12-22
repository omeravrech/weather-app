import React from 'react';

const twoDigitDisplay = (num) => { if (num < 10) return "0" + num; else return num}

const WeatherCurrentDisplay = (props) => {
    const { current_status } = props;

    if ((typeof(current_status) !=="object") || Array.isArray(current_status) || !(Object.keys(current_status).length)) { return <div> No data to render </div>}

    return(
        <div className="ui two column grid">
            <div className="eight wide column">
                
                <div className="ui three column grid">
                    <div className="column">
                        <img src={`https://developer.accuweather.com/sites/default/files/${twoDigitDisplay(current_status.WeatherIcon)}-s.png`} alt=""></img>
                    </div>
                        <div className="column weather body-temp">
                            {parseInt(current_status.RealFeelTemperature.Metric.Value)}
                        </div>
                    <div className="column">
                        <div className="weather">
                            °{current_status.RealFeelTemperature.Metric.Unit}
                        </div>
                    </div>
                </div>

            </div>
            <div className="ui eight wide column">
                <div className="grid">
                    <div className="row">
                        <div className="column">
                            Precipitation: {current_status.PrecipitationSummary.Precipitation.Metric.Value}
                            {current_status.PrecipitationSummary.Precipitation.Metric.Unit}
                            <br />
                            Humidity: {current_status.RelativeHumidity}%
                            <br />
                            Wind: {current_status.Wind.Speed.Metric.Value} {current_status.Wind.Speed.Metric.Unit}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WeatherCurrentDisplay;