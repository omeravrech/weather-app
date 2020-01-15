// Components
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header.component';
import Footer from './Footer.component'

const App = (props) => {
    const { routes } = props;
    return (
        <div>
            <Header routes={ routes } />
            <div className="ui middle aligned center aligned grid" style={{height: "100vh"}}>
                <div className="left aligned column" style={{maxWidth: 600}}>
                    <Switch>
                        {routes.map((route, indx) => {
                            return (
                                <Route
                                    key={indx}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.component />}
                                />
                            );
                        })}
                    </Switch>
                </div>
            </div>
            < Footer />
        </div>
        
    );
}

export default App;


/*
 <div>
            <Header routes={ routes } />
            <div className="ui center aligned middle aligned grid">
                <div className="column">
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
        </div>
*/