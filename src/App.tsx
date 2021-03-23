import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Description} from "./components/Description/Description";
import {Posts} from "./components/Posts/Posts";
import {Dialogs} from './components/Dialogs/Dialogs';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            {/*<Description />*/}
            {/*<Posts />*/}
            <div className={"app-wrapper-content"}>
                <Dialogs />
            </div>
        </div>
    );
}

export default App;
