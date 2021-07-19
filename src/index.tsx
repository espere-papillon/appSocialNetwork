import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from './redux/redux-store';
import {AppContainer} from "./AppContainer";


export const rerenderEntireTree = () => {
    ReactDOM.render(<AppContainer/>, document.getElementById('root'));
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);






