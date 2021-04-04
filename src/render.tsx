import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, StateType, updateNewMessageText, updateNewPostText} from './redax/state';
import {addPost} from './redax/state';


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


