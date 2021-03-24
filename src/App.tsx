import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Description} from "./components/Description/Description";
import {Posts} from "./components/Posts/Posts";
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import { News } from './components/News/News';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/*<Description />*/}
                {/*<Posts />*/}
                <div className={"app-wrapper-content"}>
                    <Route path={"/dialogs"} component={Dialogs}/>
                    <Route path={"/description"} component={Description}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;