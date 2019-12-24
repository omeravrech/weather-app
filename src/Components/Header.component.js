import React, { Component } from "react";
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar.component";

export default class Header extends Component {
    
    state = {displayMenu: false}

    render() {
        return(
            <div className="ui teal inverted secondary menu">
                <div className="ui category search item">
                    <SearchBar />
                </div>

                <div className="right dropdown menu item">
                    <div
                        className="ui sample dropdown"
                        onMouseOver={ () => this.setState({displayMenu: true}) }
                        onMouseOut={ () => this.setState({displayMenu: false}) }
                    >
                        <div className="text">Menu</div>
                        <i className="dropdown icon"></i>
                        <div className="menu" style={this.state.displayMenu?{display:'block'}:{display:''}}>
                            { this.props.routes.map((route ,indx) => {
                                return (    
                                    
                                    <Link to={route.path} key={indx}>
                                        <div className="ui icon item" key={indx}
                                            onMouseOver={(e) => { e.currentTarget.className= "ui icon active item"} }
                                            onMouseOut={(e) => { e.currentTarget.className = "ui icon item"} }
                                        >
                                            <i className={route.icon + "icon"}></i>
                                            <span style={{color: "teal"}}>{route.display}</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
