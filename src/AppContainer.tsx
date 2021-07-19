import React from 'react';
import './index.css';
import App from './App';
import {store} from './redux/redux-store';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


export const AppContainer = () => {
    return(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>)
}





