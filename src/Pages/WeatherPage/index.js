import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Forecast from './Forecast.component';
import CurrentDisplay from './CurrentDisplay.component';
import { addToFavorite, removeFromFavorite } from '../../Redux/favorites.action';


class WeatherPage extends Component {

    loading = () => {
        return(       
            <div className="ui segment">
                Waiting for city...
                <div className="ui placeholder">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        );
    }

    FavButton = (city) => {
        const {favoriteList} = this.props;

        if (favoriteList.filter(({ Key }) => { return Key === city.Key}).length === 1) {
            return (
                <div className="ui vertical animated button" tabIndex="0" onClick={() => this.props.removeFromFavorite(city.Key)}>
                    <div className="hidden content">Remove</div>
                    <div className="visible content">
                        <i className="star outline icon"></i>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="ui vertical animated button" tabIndex="0" onClick={() => this.props.addToFavorite(city)}>
                    <div className="hidden content">Save</div>
                    <div className="visible content">
                        <i className="star icon"></i>
                    </div>
                </div>
            );
        }
    }

    render() {
        const { city } = this.props.weather;

        if (!city || (typeof(city) !== "object") || Array.isArray(city) || !(Object.keys(city).length)) {   
            return this.loading();
        } else {

            return (
                <div className="ui grid"  style={{background: "#fff"}}>
                    <div className="row">
                        <div className="thirteen wide column">
                            <span className="city-name">{city.LocalizedName}</span>
                        </div>
                        <div className="three wide right aligned column">
                            {this.FavButton(city)}
                        </div>
                    </div>
                    <div className="one column row">
                        <div className="column">
                            <span className="city-location">
                                {city.AdministrativeArea.LocalizedName + ", " + city.Country.LocalizedName}
                            </span>
                        </div>
                        <div className="column">
                            <CurrentDisplay />
                        </div>
                    </div>
                    <div className="one column row">
                        <div className="column">
                            <Forecast />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (appState) => {
    return {
        weather: {
            city: appState.weather.city_data,
            current_status: appState.weather.city_weather,
        },
        favoriteList: appState.favoriteList
    }
}
const mapDispacthToProps = (dispatch) => {
    return bindActionCreators({ addToFavorite, removeFromFavorite }, dispatch);
}

export default connect(mapStateToProps, mapDispacthToProps)(WeatherPage);
