import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import AccuWeatherAPI from '../api/AccuWeather';
import { fetchWeatherByObject, fetchWeatherByName } from '../Redux/weather.action';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indexOfSelectedOption: -1,
            userInput: "",
            suggestions: []
        }
    }
    onKeyPressed = (event) => {
        const { keyCode } = event;
        const { indexOfSelectedOption, suggestions, userInput } = this.state;
    
        //User press enter to search city
        if (keyCode === 13) {
            if (indexOfSelectedOption > -1 && indexOfSelectedOption < suggestions.length)
            {
                this.props.fetchWeatherByObject(suggestions[indexOfSelectedOption]);

                this.setState({
                    userInput: "",
                    suggestions: [],
                    indexOfSelectedOption: -1,
        
                })
            }
            else if (userInput !== '' && userInput !== ' ') {
                this.props.fetchWeatherByName(userInput);
            }
        }
        // If user press UP, there are suggestions and we not out the range
        else if(keyCode === 38 && suggestions.length && indexOfSelectedOption > 0) {
            this.setState({indexOfSelectedOption: indexOfSelectedOption - 1});
        }
        // If user press UP, there are suggestions and we not out the range
        else if(keyCode === 40 && suggestions.length && suggestions.length-1 > indexOfSelectedOption) {
            this.setState({indexOfSelectedOption: indexOfSelectedOption + 1});
        }
    }

    onDropDownClicked = (event) => {
        const {id} = event.currentTarget;
        const { suggestions } = this.state;
        if (id > -1 && id < suggestions.length) {
            this.props.fetchWeatherByObject(suggestions[id]);
            this.setState({
                suggestions: [],
                userInput: "",
                indexOfSelectedOption: -1
            })
        }
    }

    onInputChanged = (event) => {
        const {value} = event.target;

        if (value !== '' || value !== ' ') {
            AccuWeatherAPI.get('/locations/v1/cities/autocomplete', {params: {q: value }})
            .then(({data}) => { 
                this.setState({
                    userInput: value,
                    suggestions: data,
                    indexOfSelectedOption: -1,
        
                })
            }).catch((err) => {
                this.setState({
                    userInput: value,
                    suggestions: [],
                    indexOfSelectedOption: -1,
                });
            })
        } else {
            this.setState({
                userInput: value,
                suggestions: [],
                indexOfSelectedOption: -1,
            })
        }
    }

    renderSuggestionOptions = () => {
        const { suggestions, indexOfSelectedOption } = this.state;

        if (suggestions.length < 1) {
            return;
        }

        return (
            <div className="results transition visible" style={{display: 'block'}}>
            { suggestions.map(({Key, LocalizedName, Country}, indx) => {
                return (
                    <div className="category" key={`cat_${Key}`} >
                        <div className="name" key={`name_${Key}`}>
                            <i className={ Country.ID.toLowerCase() + " flag"}></i>
                            <span>{ Country.LocalizedName }</span>
                        </div>
                        <div className="results" key={`inner_results_${Key}`}>
                            <div
                                className={ (indexOfSelectedOption === indx)?"result active":"result" }
                                key={ `result_${Key}` }
                                id={ indx }
                                onClick= {this.onDropDownClicked }
                                onMouseOver={ (e) => { e.target.className = "result active" }}
                                onMouseLeave={ (e) => { e.target.className = "result" }}
                            > { LocalizedName }
                            </div>
                        </div>
                    </div>  
                );
            })}
            </div>
        );
    }
    
    render = () => {
        const { userInput } = this.state;
        return (
            
            <div className="ui category search item">
                <div className="ui icon input">
                    <input
                        className="prompt"
                        type="text"
                        placeholder="Search city...  "
                        onKeyDown={ this.onKeyPressed }
                        value={ userInput }
                        onChange={ this.onInputChanged }
                    />
                    <i className="search icon"></i>
                </div>
                {this.renderSuggestionOptions()}
            </div>
        );
        
    }
}

function mapDispacthToProps(dispatch) {
    return bindActionCreators({ fetchWeatherByObject, fetchWeatherByName }, dispatch);
}

export default connect(null, mapDispacthToProps)(SearchBar);
