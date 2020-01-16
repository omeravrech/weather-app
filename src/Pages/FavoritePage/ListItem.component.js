import React from 'react';

const ItemList = (props) => {
    const { onRemoveClicked, onEyeClicked, city } = props;

    return(
        <div className="item">
            <div className="ui icon image">
                <i className="red x icon"  onClick={ onRemoveClicked }></i>
            </div>
            <div className="ui icon image">
                <i className="teal eye icon" onClick={ onEyeClicked }></i>
            </div>
            <div className="ui icon image">
                <i className={city.Country.ID.toLowerCase() + " flag"}></i>
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