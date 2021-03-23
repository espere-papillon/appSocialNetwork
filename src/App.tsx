import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Description} from "./components/Description/Description";
import {Posts} from "./components/Posts/Posts";
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";

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
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
