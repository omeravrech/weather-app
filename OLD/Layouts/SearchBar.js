import React, { Component } from "react";
import axios from '../api/AccuWeather';


class SearchBar extends Component {
    static propTypes = {
        onCityBeenChoosen: (props, propName, componentName) => {
            if (typeof props[propName] !== "function") {
                return new Error(`Invalid prop ${propName} passed to ${componentName}.`);
            }
        }
    }

    constructor(props) {
        super(props);
        this.onCityBeenChoosen = props.onCityBeenChoosen;
    
        this.state = {
            // The active selection's index
            activeSuggestion: -1,
            // The selected city object code
            selectedCityCode: -1,
            // The suggestions that match the user's input
            suggestions: [],
            // Whether or not the suggestion list is shown
            showSuggestions: false,
            // What the user has entered
            userInput: ""
        };
    }

    onInputBeenChanged = event => {
        const userInput = event.target.value;

        // If input is empty, there isn't need to check with API
        if (userInput === '' || userInput === ' ') {
            this.setState({
                activeSuggestion: -1,
                suggestions: [],
                showSuggestions: false,
                userInput: ''
            })
            return;
        }

        // Api request
        axios.get('/locations/v1/cities/autocomplete', {params: {q: userInput }})
            .then(({ data }) => {
                this.setState({
                    activeSuggestion: -1,
                    suggestions: data,
                    showSuggestions: true,
                    userInput
                })
            }).catch(err => {
                this.setState({
                    activeSuggestion: -1,
                    suggestions: [],
                    showSuggestions: false,
                    userInput
                });
            });
    };
    
    onSuggestedValueClicked = event => {
        const { showSuggestions } = this.state;
        if (showSuggestions) {
            this.onCityBeenChoosen(event.currentTarget.id)
            this.setState({
                activeSuggestion: -1,
                suggestions: [],
                showSuggestions: false,
                userInput: event.currentTarget.innerText
            });
        }
    };

    onKeyDown = event => {
        var { activeSuggestion, suggestions, showSuggestions } = this.state;
    
        // User pressed the enter key, update the input and close the suggestions
        if (event.keyCode === 13) {
            if (showSuggestions) {
                const selectedValue = suggestions[activeSuggestion];
                this.onCityBeenChoosen(selectedValue.Key);
                this.setState({
                    activeSuggestion: -1,
                    suggestions: [],
                    showSuggestions: false,
                    userInput: selectedValue.LocalizedName + ", " + selectedValue.Country.LocalizedName,
                });
            }
        }
        if (event.keyCode === 38 && (activeSuggestion > 0)) {
            activeSuggestion--;
            this.setState({ activeSuggestion })
        }
        if ((event.keyCode === 40) && (activeSuggestion < suggestions.length - 1)) {
            activeSuggestion++;
            this.setState({ activeSuggestion })
        }
    };

    renderSuggestionsList = (suggestions, activeSuggestion) => {
        if (!Array.isArray(suggestions)) { return; };
        
        return (
            <div className="results" style={{display: "block"}}>
                { suggestions.map((suggestion, indx) => {
                return (
                    <div
                        className="result"
                        id={ suggestion.Key }
                        key={ `key-${ suggestion.Key }` }
                        value={ suggestion.LocalizedName }
                        onClick={ this.onSuggestedValueClicked }
                        style={ (indx ===  activeSuggestion)?{ background: 'gray'}:{} }
                    >  
                        <div className="title">{ suggestion.Country.LocalizedName }</div>
                        <div className="content">{ suggestion.LocalizedName }</div>
                    </div>
                );
            })}
            </div>
        );
    };

    render() {
        const {
            state: {
                suggestions,
                activeSuggestion,
                showSuggestions,
                userInput
            }
        } = this;

        return (
                <div className="ui search">
                    <div className="ui icon input">
                        <input
                            type="text"
                            onChange={ this.onInputBeenChanged }
                            onKeyDown={ this.onKeyDown }
                            value={ userInput }
                            className="prompt"
                            placeholder="Search..."
                        />
                        <i className="search icon"></i>
                    </div>
                    { showSuggestions?this.renderSuggestionsList(suggestions, activeSuggestion):"" }
                </div>
        );
    }
}

export default SearchBar;