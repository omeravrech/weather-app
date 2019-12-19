// Resources
import React from 'react';
import SearchBar from './SearchBar';


const HeaderLayout = (props) => {
    return (
        <div className="ui secondary menu">
            <div className="left item">
                <SearchBar onCityBeenChoosen={ props.onCityBeenChoosen } />
            </div>
            <div className="right item">
                <div className="ui button white">Search</div>
            </div>
        </div>
    );
};

export default HeaderLayout;
