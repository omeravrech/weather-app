import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import WeatherForecastDisplay from './WeatherForecastDisplay.component';
import WeatherCurrentDisplay from './WeatherCurrentDisplay.component';
import { fetch_forecast } from '../../Redux/weather.action'

const lineAmount = 20;
const lineSize = ['small','medium', 'long', 'very long', 'full'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const twoDigitDisplay = (num) => { if (num < 10) return "0" + num; else return num}

class WeatherPage extends Component {

    render() {
        const { city,
            current_status,
            forecast,
            city_have_update
         } = this.props.weather;

        if (city.length === 1 && city_have_update === true) {
            this.props.fetch_forecast(city[0].Key);
        }
        
        if ((current_status.length !== 1) || (city.length !== 1)) {
            const lines = (new Array(lineAmount).fill(null));
            return (
                <div className="ui segments">
                    <div className="ui teal inverted segment">
                        <h1>Can't find your requested city.<br /> Please try again...</h1>
                    </div>
                    <div className="ui segment">
                        <div className="ui placeholder">
                            { lines.map((line, indx) => {
                                return (<div className={lineSize[Math.floor(Math.random() * lineSize.length)] + " line"} key={indx}></div>);
                            }) }
                        </div>
                    </div>
                </div>
            );
        }
        const currentTime = new Date(current_status[0].LocalObservationDateTime);
        return (
                <div className="ui left aligned piled grid">
                    <div className="row">
                        <div className="column">
                            <div className="weather hdr title">{city[0].EnglishName}</div>
                            <div className="weather hdr date">
                                {`${days[currentTime.getDay()]}, `}
                                {twoDigitDisplay(currentTime.getHours())}:
                                {twoDigitDisplay(currentTime.getMinutes())}:
                                {twoDigitDisplay(currentTime.getSeconds())}
                            </div>
                            <div className="weather hdr sum">{current_status[0].WeatherText}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <WeatherCurrentDisplay current_status={ current_status[0] } />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <WeatherForecastDisplay forecast={forecast} />
                        </div>
                    </div>
               </div>
        )

    }
}


const mapStateToProps = (appState) => {

    return {
        weather: {
            city: appState.fetch_city_data.city,
            city_have_update: appState.fetch_city_data.flag,
            current_status: appState.fetch_forecast.current_status,
            forecast: appState.fetch_forecast.forecast,
        }
    }
}
function mapDispacthToProps(dispatch) {
    return bindActionCreators({ fetch_forecast }, dispatch);
}

export default connect(mapStateToProps, mapDispacthToProps)(WeatherPage);