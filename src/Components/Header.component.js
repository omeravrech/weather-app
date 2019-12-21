import React, { Component } from "react";
import SearchBar from "./SearchBar.component";

export default class Header extends Component {
    
    
    render() {

        return(
            <div className="ui teal secondary inverted menu">
                < SearchBar fetchCityData={ this.props.fetchCityData }/>
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
