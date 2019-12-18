// Components
import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from './Layouts';
import { DefaultPage } from './Components';
import axios from './api/AccuWeather';

const background = '#2185d0';

class App extends Component {

    state = { weatherInfo: {}}

    onSearchSubmit = (value) => {
        axios.get(`/forecasts/v1/daily/5day/${value}`)
        .then(({data, status}) => {
            if (status === 200) {
                data.LocationName = value;
                this.setState({ weatherInfo: data });
            }
        }).catch(() => { this.setState({ weatherInfo: {} }) });
    }

    render() {
        return (
            <div>
                <div style={{background}}>
                    <HeaderLayout onCityBeenChoosen={ this.onSearchSubmit } />
                </div>
                <br />
                <div className="ui container">
                    <DefaultPage data={this.state.weatherInfo} />
                </div>
                <br />
                <div style={{background}}>
                    <FooterLayout />
                </div>
            </div>
        );
    }
}

export default App;
