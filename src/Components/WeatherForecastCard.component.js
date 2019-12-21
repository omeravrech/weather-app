import React from 'react';

const twoDigitDisplay = (num) => { if (num < 10) return "0" + num; else return num}
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeatherForecastCard = (props) => {
    if (!props.temperature || !props.day || !props.icon) {
        return (<div></div>)
    }
    
    return(
        <div className="ui blue card">
            <div className="content">
                <div className="header">{days[props.day]}</div>
            </div>
            <div className="image">
                <img src={`https://developer.accuweather.com/sites/default/files/${twoDigitDisplay(props.icon)}-s.png`} alt={"image " + props.icon} />
            </div>
            <div className="extra content">
                <span className="left floated">{props.temperature.day}</span>
                <span className="right floated">{props.temperature.night}</span>
            </div>
        </div>
    );
}

export default WeatherForecastCard;