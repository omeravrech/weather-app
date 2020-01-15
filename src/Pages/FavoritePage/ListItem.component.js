import React from 'react';

const ItemList = (props) => {
    const { onRemoveClicked, onEyeClicked, city } = props;

    return(
        <div className="item">
            <div className="ui icon image">
                <a><i className="x icon"  onClick={ onRemoveClicked }></i></a>
            </div>
            <div className="ui icon image">
                <a><i className="eye icon" onClick={ onEyeClicked }></i></a>
            </div>
            <div className="content">
                <div className="header">{city.LocalizedName}</div>
                <div className="description">
                    {city.AdministrativeArea.LocalizedName}, {city.Country.LocalizedName}
                </div>
            </div>
        </div>
    );
}

export default ItemList;