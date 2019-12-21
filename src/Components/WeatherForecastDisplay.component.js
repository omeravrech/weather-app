import React, { Component } from 'react';
import { Sparklines, SparklinesLine} from 'react-sparklines';
import WeatherForecastCard from './WeatherForecastCard.component';
import axios from '../api/AccuWeather';

class WeatherForecastDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            forecast: {},
        }
        this.updateForecastData(props.cityCode);
    }

    updateForecastData = (cityCode) => {
        axios.get(`/forecasts/v1/daily/5day/${this.props.cityCode}`, {params: {metric: true}})
             .then(({data}) => {
                this.setState({forecast: data});
            }).catch(err => {});
    }

    render() {
        if (!this.state.forecast.DailyForecasts) {
            return (<div></div>)
        }

        const { DailyForecasts } = this.state.forecast;
        console.log(DailyForecasts);

        return (
            <div className="ui grid">
                <div className="one column row">
                    <div className="column">
                        <Sparklines
                            data={
                                DailyForecasts.map((forecastPerDay) => {
                                    let {Temperature} = forecastPerDay;
                                    console.log(forecastPerDay)
                                    return Temperature.Maximum.Value;
                                })
                            }
                        >
                            <SparklinesLine color="orange" />
                        </Sparklines>
                    </div>
                </div>
                <div className="five column row">
                    
                        { DailyForecasts.map((forecastPerDay, indx) => {
                            return (
                                <div className="column"  key={`forecast_div_key_${indx}`}>
                                    <WeatherForecastCard key={`forecast_card_key_${indx}`}
                                        temperature={{ day: forecastPerDay.Temperature.Maximum.Value, night: forecastPerDay.Temperature.Minimum.Value }}
                                        day={(new Date(forecastPerDay.Date)).getDay()}
                                        icon={forecastPerDay.Day.Icon}
                                    />
                                    
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}


export default WeatherForecastDisplay;