import React, { Component } from "react";
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar.component";

export default class Header extends Component {
    
    onMouseOver = (event) => {
        console.log(event.target);
    }
    
    render() {
        return(
            <div className="ui teal inverted secondary menu">
                <div className="ui category search item">
                    <SearchBar />
                </div>
                <div className="right menu">
                    <div className="ui dropdown item" onMouseOver={this.onMouseOver}>
                        Menu
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            { this.props.routes.map((route ,indx) => {
                                return (    
                                    <div className="icon item" key={indx}>
                                        <Link to={route.path} key={indx}>
                                            <i className={route.icon + "icon"}></i>{route.display}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
