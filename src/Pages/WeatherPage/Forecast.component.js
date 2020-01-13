import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine} from 'react-sparklines';

import ForecastCard from './ForecastCard.component';

class Forecast extends Component {

    placeholder = () => {
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
    display = () => {
        const { forecast } = this.props;

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

    render() {
        if (this.props.forecast.length === 0) {
            return this.placeholder();
        } else {
            return this.display();
        }
    }

}

const mapStateToProps = (appState) => {
    return {
        forecast: appState.weather_data.forecast,
    }
}

export default connect(mapStateToProps, null)(Forecast);