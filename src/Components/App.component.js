// Components
import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header.component';
import Footer from './Footer.component'

export default class App extends Component {

    render() {
        const { routes } = this.props;
        return (
            <div className="ui sixteen column center aligned grid">
                <div className="row">
                    <div className="sixteen wide column">
                        <Header routes={routes} />
                    </div>
                </div>
                <div className="row">
                    <div className="eight wide column">
                        <Switch>
                            {routes.map((route, indx) => {
                                return (<Route
                                    key={indx}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.component />}
                                />);
                            })}
                        </Switch>
                    </div>
                </div>
                <div className="row">
                    <div className="sixteen wide column">
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}
