import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Description} from "./components/Description/Description";
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
                <div className={"app-wrapper-content"}>
                    <Route path={"/dialogs"} component={Dialogs}/>
                    {/*<Route path={"/description"} component={Description}/>*/}
                    {/*<Route path={"/news"} component={News}/>*/}
                    {/*<Route path={"/music"} component={Music}/>*/}
                    {/*/!*<Route path={"/saved"} component={Saved}/>*!/*/}
                    {/*<Route path={"/settings"} component={Settings}/>*/}

                    {/*<Route path={"/dialogs"} render={() => <Dialogs />}/>*/}
                    <Route path={"/description"} render={() => <Description />}/>
                    <Route path={"/news"} render={() => <News />}/>
                    <Route path={"/music"} render={() => <Music />}/>
                    {/*<Route path={"/saved"} component={Saved}/>*/}
                    <Route path={"/settings"} render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
