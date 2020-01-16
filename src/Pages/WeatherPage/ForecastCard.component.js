import React from 'react';

const twoDigitDisplay = (num) => { if (num < 10) return "0" + num; else return num}
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const ForecastCard = (props) => {
        
    return(
        <div className="ui padded grid">
                <div className="sixteen wide column">
                    { days[props.date.getDay()] }
                </div>
                <div className="image sixteen wide  column">
                    <img
                        src={`https://developer.accuweather.com/sites/default/files/${twoDigitDisplay(props.icon)}-s.png`}
                        alt={"image " + props.icon}
                        width="100%" height="100%"
                    />
                </div>
                <div className="eight wide column">
                    <i className="sun outline icon"></i>
                    {parseInt(props.temperature.day)}°
                </div>
                <div className="eight wide column">
                    <i className="moon outline icon"></i>
                    {parseInt(props.temperature.night)}°
                </div>
        </div>
    );
}

export default ForecastCard;