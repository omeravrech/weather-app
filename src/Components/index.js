// Components
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header.component';
import Footer from './Footer.component'

const App = (props) => {
    const { routes } = props;
    return (
        <div className="ui middle aligned centered grid" style={{minWidth: '400px'}}>
            <div className="one column row">
                <div className="column">
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
            <div className="one column row">
                <div className="column">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;