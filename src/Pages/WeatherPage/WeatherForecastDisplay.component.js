import React from 'react';
import { Sparklines, SparklinesLine} from 'react-sparklines';

import WeatherForecastCard from './WeatherForecastCard.component';

const WeatherForecastDisplay = (props) => {

    if (!props.forecast || !props.forecast.Headline) {
        return (<div></div>)
    }

    const { DailyForecasts } = props.forecast;

    return (
        <div className="ui grid">
            <div className="one column row">
                <div className="column">
                    <Sparklines
                        data={
                            DailyForecasts.map((forecastPerDay) => {
                                let {Temperature} = forecastPerDay;
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
                                    date={(new Date(forecastPerDay.Date)) }
                                    icon={forecastPerDay.Day.Icon}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}


export default WeatherForecastDisplay;