import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { fetch_city_info } from '../Redux/Actions/weather.action'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            suggestions: [],
            suggestionIndex: -1,
        }
    }

    onKeyPressed = (event) => {
        const { keyCode } = event;
        const { indexOfSelectedOption, suggestions, userInput } = this.state;
    
        //User press enter to search city
        if (keyCode === 13) {
            if (userInput !== '' && userInput !== ' ') {
                this.props.fetch_city_info(userInput);
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

    renderSuggestionOptions = () => {}
    
    render = () => {
        const {userInput} = this.state;

        return (
            <div className="ui category search item">
                <div className="ui icon input">
                    <input
                        className="prompt"
                        type="text"
                        placeholder="Search city...  "
                        onKeyDown={ this.onKeyPressed }
                        value={ userInput }
                        onChange={ e => this.setState({userInput: e.target.value}) }
                    />
                    <i className="search icon"></i>
                </div>
                { this.renderSuggestionOptions() }
            </div>
        );
        
    }
}
function mapDispacthToProps(dispatch) {
    return bindActionCreators({ fetch_city_info }, dispatch);
}

export default connect(null, mapDispacthToProps)(SearchBar);
/*


    onKeyDown = ({ key, keyCode }) => {
       
        if (keyCode === 13) {
            //User press enter to search city from suggestion list
            // if user press enter to search a city
            if (userInput !== '' && userInput !== ' ') {
                if (indexOfSelectedOption > -1 && suggestions.length) {
                    cityHaveChoosen(suggestions[indexOfSelectedOption]);
                } else {
                    suggestions.forEach(element => {
                        if (element.LocalizedName === userInput) {
                            cityHaveChoosen(element);
                        }
                    });
                }
            }
        }

    }

    onDropDownClicked = (event) => {
        const {id} = event.target;
        const { indexOfSelectedOption, suggestions } = this.state;
        if (id > -1 && id < suggestions.length) {
            indexOfSelectedOption(suggestions[id]);
        }
    }

    renderSuggestionOptions = () => {
        const { suggestions, indexOfSelectedOption } = this.state;

        if (suggestions.length < 1) {
            return (<div className="results transition hidden"></div>);
        }

        return (
            <div className="results" style={{display: "block"}}>
                { suggestions.map(({Key, LocalizedName, Country}, indx) => {
                    return (
                        <div className="category" key={ `city_category_key_${Key}` }>
                            <div className="name" key={ `city_country_key_${Key}` }>
                                { Country.LocalizedName }
                            </div>
                            <div className="results" key={ `city_inner_results_key_${Key}` }>
                                <div
                                    className={ (indexOfSelectedOption === indx)?"result active":"result" }
                                    key={ `city_result_key_${Key}`}
                                    id={ indx }
                                    onClick= {this.onDropDownClicked }
                                    onMouseOver={ (e) => { e.target.className = "result active" }}
                                    onMouseLeave={ (e) => { e.target.className = "result" }}
                                >
                                    { LocalizedName }
                                </div>
                            </div>    
                        </div>
                    )
                })}
            </div>
        );
    }
*/