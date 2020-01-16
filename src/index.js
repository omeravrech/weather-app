import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import App from './Components';
import routes from './routes';
import mainReducer from './Redux/main.reducer';
import { fetchWeatherByName } from './Redux/weather.action';

const store = createStore(
    mainReducer,
    applyMiddleware(ReduxThunk),
);

store.dispatch(fetchWeatherByName("Tel Aviv Israel"));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App routes={routes} />
        </Router>
    </Provider>
    , document.getElementById('root'));