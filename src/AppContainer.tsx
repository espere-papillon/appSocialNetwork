import React from 'react';
import './index.css';
import App from './App';
import {store} from './redux/redux-store';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";


export const AppContainer = () => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>)
}





