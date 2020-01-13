import React from 'react';

const twoDigitDisplay = (num) => { if (num < 10) return "0" + num; else return num}
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const ForecastCard = (props) => {
        
    return(
        <div className="ui center aligned teal card grid">
            <div className="one column row">
                <div className="column">{days[props.date.getDay()]}</div>
            </div>
            <div className="one column row">
                <div className="image column">
                    <img
                        src={`https://developer.accuweather.com/sites/default/files/${twoDigitDisplay(props.icon)}-s.png`}
                        alt={"image " + props.icon}
                        width="100%" height="100%"
                    />
                </div>
            </div>
            <div className="two column row">
                <div className="column">{parseInt(props.temperature.day)}</div>
                <div className="column">{parseInt(props.temperature.night)}</div>
            </div>
        </div>
    );
}

export default ForecastCard;