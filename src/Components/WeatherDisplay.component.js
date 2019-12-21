import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherForecastDisplay from './WeatherForecastDisplay.component';
import axios from '../api/AccuWeather';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const twoDigitDisplay = (num) => { if (num < 10) return "0" + num; else return num}

class WeatherDisplay extends Component {
    state = {
        city_current_status: [],
        city_forecast: []
    }

    UNSAFE_componentWillReceiveProps = (newProps) => {
        
        if (newProps.weather.city.length === 1) {
            axios.get(`/currentconditions/v1/${newProps.weather.city[0].Key}`, {params: {details: true}})
            .then(({data}) => {
                if (data.length) {
                    this.setState({city_current_status: data});
                }
            }).catch(err => {
                this.setState({city_current_status: []});
            });
        } 
    }

    render() {
        

        if (((this.state.city_current_status.length !== 1) || (this.props.weather.city.length !== 1))) {
            return (
                <div>
                    <div>
                        Please choose a city.
                    </div>
                    <div className="ui placeholder">
                        <div className="long line"></div>
                        <div className="very long line"></div>
                        <div className="very long line"></div>
                        <div className="long line"></div>
                        <div className="long line"></div>
                        <div className="medium line"></div>
                        <div className="very long line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            );
        }

        const { city } = this.props.weather;
        const { city_current_status } = this.state;
        //const { city , city_current_status} =  fakeData;

        const currentTime = new Date(city_current_status[0].LocalObservationDateTime);

        return (
                <div className="ui equal width left aligned grid">
                    <div className="row">
                        <div className="column">
                            <div className="weather hdr title">{city[0].EnglishName}</div>
                                <div className="weather hdr date">
                                    {`${days[currentTime.getDay()]}, `}
                                    {twoDigitDisplay(currentTime.getHours())}:
                                    {twoDigitDisplay(currentTime.getMinutes())}:
                                    {twoDigitDisplay(currentTime.getSeconds())}
                                </div>
                            <div className="weather hdr sum">{city_current_status[0].WeatherText}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="eight wide column">
                            <div className="ui three column grid">
                                <div className="row">
                                    <div className="column">
                                        <img src={`https://developer.accuweather.com/sites/default/files/${twoDigitDisplay(city_current_status[0].WeatherIcon)}-s.png`}></img>
                                    </div>
                                        <div className="column weather body-temp">{"11"}</div>
                                    <div className="column">
                                        <div className="weather">
                                            °C
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="eight column">
                            <div className="grid">
                                <div className="row">
                                    <div className="column">
                                        {"Precipitation: "}
                                        {city_current_status[0].PrecipitationSummary.Precipitation.Metric.Value}
                                        {city_current_status[0].PrecipitationSummary.Precipitation.Metric.Unit}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="column">Humidity: {city_current_status[0].RelativeHumidity}%</div>
                                </div>
                                <div className="row">
                                    <div className="column">{`Wind: ${city_current_status[0].Wind.Speed.Metric.Value} ${city_current_status[0].Wind.Speed.Metric.Unit}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <WeatherForecastDisplay cityCode={city[0].Key} />
                        </div>
                    </div>
               </div>
        )

    }
}


const mapStateToProps = (appState) => {

    return {
        weather: {
            city: appState.fetch_city_data
        }
    }
}

export default connect(mapStateToProps)(WeatherDisplay);