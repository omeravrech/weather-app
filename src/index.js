import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import App from './Components';
import mainReducer from './Redux/main.reducer';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(mainReducer)}>
        <Router>
            <App routes={routes} />
        </Router>
    </Provider>
    , document.getElementById('root'));