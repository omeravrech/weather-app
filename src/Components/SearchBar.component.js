import React, { Component } from "react";

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            suggestions: [],
            selectedIndex: -1,
        }
    }

    onKeyDown = ({ key, keyCode, currentTarget }) => {
        var { suggestions, selectedIndex, userInput } = this.state;
        // If user press enter
        if (keyCode === 13) {
            if (suggestions.length && selectedIndex > -1) {
                userInput = suggestions[selectedIndex].LocalizedName
            }
            if (userInput !== '' && userInput !== ' ') {
                this.setState({
                    userInput,
                    suggestions: [],
                    selectedIndex: -1
                });
                // @TODO: controlled event for userInput 
            }
            
        }
        // If user press letter a-z, A-Z or space
        // (other character not allowed)
        else if ((keyCode >=65 && keyCode <= 90) || keyCode === 32)
        {
            let { userInput } = this.state;
            this.setState({userInput: `${userInput}${key}` })
        }
        // If user press backspace
        else if (keyCode === 8) {
            let { userInput } = this.state;
            this.setState({userInput: userInput.slice(0, -1) })
        }

        // If user press UP, there are suggestions and we not out the range
        else if(keyCode === 38 && suggestions.length && selectedIndex > -1) {
            selectedIndex--;
            this.setState({selectedIndex});
        }
        // If user press UP, there are suggestions and we not out the range
        else if(keyCode === 40 && suggestions.length && suggestions.length > selectedIndex) {
            selectedIndex++;
            this.setState({selectedIndex});
        }
    }

    renderSuggestionOptions = () => {
        const { suggestions, selectedIndex } = this.state;

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
                                    className={ (selectedIndex===indx)?"result active":"result" }
                                    key={ `city_result_key_${Key}`}
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

    render() {
        const { userInput } = this.state;

        return(
            <div className="ui teal secondary inverted menu">
                <div className="ui category search item">
                    <div className="ui icon input">
                        <input
                            className="prompt"
                            type="text"
                            placeholder="Search city...  "
                            onKeyDown={ this.onKeyDown }
                            value={ userInput }
                            readOnly
                        />
                        <i className="search icon"></i>
                    </div>
                    { this.renderSuggestionOptions() }
                </div>
                <div className="right menu">
                    <div className="item">

<div className="ui simple labeled dropdown button">
    <div className="text">Menu</div>
    <i className="dropdown icon"></i>
    <div className="menu">
        <div className="item"><i className="home icon"></i> Home</div>
        <div className="item"><i className="star icon"></i> Favorite</div>
    </div>
</div>

                    </div>
                </div>
            </div>
        );
    }
}


    



/*
                    <div className="teal link item"
                        onMouseOver={ (e) => e.target.className = "browse item active" }
                        onMouseOut={ (e) => e.target.className = "browse item" }
                    >Home</div>
                    <div
                        className="teal link item"
                        onMouseOver={ (e) => e.target.className = "browse item active" }
                        onMouseOut={ (e) => e.target.className = "browse item" }
                    >Favorite</div>
                </div>
*/