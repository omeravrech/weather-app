import React from 'react';
import WeatherChart from './WeatherChart';

const days = ['Saterday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const DefaultPage = (props) => {

    const { DailyForecasts, LocationName } = props.data;

    if (!DailyForecasts) return(<div></div>);

    return (
        <div className="ui contianer">
            <div className="ui card">
                <div className="ui card header">
                    <div className="crd-hdr loc">{ LocationName }</div>
                    <div className="crd-hdr">{ days[(new Date(DailyForecasts[0].EpochDate)).getDay()] }</div>
                    <div className="crd-hdr">{ DailyForecasts[0].Day.IconPhrase }</div>
                </div>
                <div className="card body">
                   <WeatherChart chartForecastData={ DailyForecasts } />
                </div>
            </div>
        </div>
    );
}

export default DefaultPage;