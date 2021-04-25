import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {store} from './redax/redux-store';
import {store} from './redax/store';
import {Provider} from "./StoreContext";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);






