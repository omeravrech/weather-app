import React from 'react';
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine} from 'react-sparklines';

import ForecastCard from './ForecastCard.component';

const loading = () => {
    return (
        <div className="ui center aligned grid">
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
            <div className="three column row">
                <div className="column">
                    <div className="ui placeholder">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui placeholder">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
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
}

const Forecast = (props) => {

    const { forecast } = props;
    if (!Array.isArray(forecast) || (forecast.length === 0)) {
        return loading();
    } 
    
    return (
        <div className="ui grid">
            <div className="one column row">
                <div className="column">
                    <Sparklines
                        data={
                            forecast.map((forecastPerDay) => {
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
                
                    { forecast.map((forecastPerDay, indx) => {
                        
                        return (
                            <div className="column"  key={`forecast_div_key_${indx}`}>
                                <ForecastCard
                                    temperature={{ day: forecastPerDay.Temperature.Maximum.Value, night: forecastPerDay.Temperature.Minimum.Value }}
                                    date={(new Date(forecastPerDay.Date)) }
                                    icon={forecastPerDay.Day.Icon}
                                />
                            </div>
                        );
                    }) }
            </div>
        </div>
    );
}

const mapStateToProps = (appState) => {
    return {
        forecast: appState.weather.forecast,
    }
}

export default connect(mapStateToProps, null)(Forecast);