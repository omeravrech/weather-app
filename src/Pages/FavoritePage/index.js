import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { removeFromFavorite, clearList} from '../../Redux/favorites.action';
import { fetchWeatherByObject } from '../../Redux/weather.action'
import ItemList from './ListItem.component';


const FavoritePage = (props) => {

    const [redirect, enableRedirect] = useState(false);

        return (
            <div className="ui segment" style={{maxHeight: "500px", minHeight: "240px"}}>
                { redirect?<Redirect to="/" />:""}
                <div className="ui list" style={{maxHeight: "460px", minHeight: "200px", overflow: "auto"}}>
                        { props.favoriteList.map((city, indx) => {
                            return (
                                <ItemList
                                    key={"list_item_" + indx}
                                    city={city}
                                    onEyeClicked={ () => { props.fetchWeatherByObject(city); enableRedirect(true) } }
                                    onRemoveClicked={ () => props.removeFromFavorite(city.Key) }
                                />
                            );
                        }) }
                </div>
            </div>
        );
}

const mapStateToProps = (appState) => {
    return {
        favoriteList: appState.favoriteList
    }
}

const mapDispacthToProps = (dispatch) => {
    return bindActionCreators({ removeFromFavorite, clearList, fetchWeatherByObject}, dispatch);
}

export default connect(mapStateToProps, mapDispacthToProps)(FavoritePage);


//annotation transition visible